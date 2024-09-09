const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });

const app = express();
console.log("hello fowejik");

app.use(express.json()); // This will handle JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // This will handle form data

// app.use(bodyParser.json());
// app.use(cookieParser());

// app.use(bodyParser.urlencoded({ extended: true }));
// const allowedOrigins = ['http://localhost:19006', 'http://192.168.177.149:8081'];

app.use(cors({
    origin: "*",
    credentials: true
}));






app.use("/api", require("./router/rotes"));

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" });
});


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: `SERVER ERROR: ${err.message}` });
});


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MONGO CONNECTED");
        app.listen(process.env.PORT, "0.0.0.0", () => console.log("SERVER RUNNING 🏃‍♂️"));

    })
    .catch((err) => console.log(`Error connecting to MongoDB: ${err.message}`));
