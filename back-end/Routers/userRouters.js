const router = require("express").Router();
const {userControllers} = require("../Controllers");

router.post("/register", userControllers.Register);

module.exports = router