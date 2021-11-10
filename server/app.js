const express = require("express");
const path = require("path");
<<<<<<< HEAD
const db = require("/Users/Marcus/Desktop/Eatable/eatable/knexfile.js");
=======
>>>>>>> a3702605dda4af30558c8ece17c6cbab498d88c1
const cors = require("cors")

const app = express()

//Middleware
app.use(express.json());
app.use(cors({
    origin: '*'
}));

//Serve the static assets
app.use(express.static(path.resolve(__dirname,"..","build")));

//test endpoint
<<<<<<< HEAD
app.get("/api/hello", async(req,res) => {
    res.json("Let's save some food!")
=======
app.get("/hello", async(req,res) => {
    res.json("Let's save some food!!!!!!!!!!")
>>>>>>> a3702605dda4af30558c8ece17c6cbab498d88c1
})


app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname,"..","build","index.html"));
});

module.exports = app;