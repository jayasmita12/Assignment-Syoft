const express = require("express")
const {registeruser,authuser} = require("../controllers/userController")

const router = express.Router()
router.route("/").post(registeruser)
router.route("/login").post(authuser)

module.exports=router