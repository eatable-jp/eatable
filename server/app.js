const express = require("express");
const path = require("path");
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
app.get("/hello", async(req,res) => {
    res.json("Let's save some food!!!!!!!!!!")
})


app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname,"..","build","index.html"));
});

module.exports = app;