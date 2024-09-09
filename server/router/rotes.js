const { loginUser, registerUser, logout } = require("../controller/controllers")

const router = require("express").Router()

router
    .post("/register", registerUser)
    .post("/login", loginUser)
    .post("/logout", logout)

module.exports = router