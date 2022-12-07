const db = require("../models")

module.exports = {
    Register: async (req, res) => {
        try{    
            await db.Users.create(req.body)
            res.status(200).send("User Created")
        }catch(err){
            console.log(err)
            res.status(404).send(err)
        }
    }
}