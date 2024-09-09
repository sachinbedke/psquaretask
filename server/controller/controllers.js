const asyncHandler = require("express-async-handler")
// const { OAuth2Client } = require("google-auth-library")

const { genrateToken } = require("../lib/genrateToken")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Auth = require("../model/Auth")

exports.registerUser = asyncHandler(async (req, res) => {

    console.log("ajshbdlkasjdlaisjbd");


    const { password } = req.body
    console.log(req.body);

    const hashPass = await bcrypt.hash(password, 10)

    await Auth.create({ ...req.body, password: hashPass })
    res.status(201).json({ message: "User Register Success" })
    // })
})
exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const result = await Auth.findOne({
        email
    })
    if (!result) {
        return res.status(401).json({ message: "invalid email or Mobile" })
    }
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({ message: "invalid password" })
    }
    const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "15d" })

    res.cookie("auth", token, { maxAge: 1000 * 60 * 60 * 24 * 15 })
    res.status(200).json({
        message: "User Login Success",
        result
    })

})
exports.logout = asyncHandler(async (req, res) => {
    res.clearCookie("auth")
    res.json({ message: "Logout Success" })
})