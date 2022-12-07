const express = require("express")
const cors = require("cors")
const PORT = 2000
const db = require("./models")

require("dotenv").config();

const server = express()
server.use(express.json())
server.use(cors())

const {userRouters} = require ("./Routers")
server.use("/users", userRouters)

server.listen (PORT, () => {
    console.log (`Success Running At Port ${PORT}`)
    // db.sequelize.sync({alter:true})
})