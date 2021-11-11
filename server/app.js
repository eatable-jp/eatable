const express = require("express");
const path = require("path");
const cors = require("cors")
const knex = require('knex')

const environment = process.env.ENVIRONMENT || 'development';
const config = require("../knexfile")[environment];
const db = knex(config);

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

//items
/*app.get('/items', async(req,res) => {
    const items = await db.select().table("items")
    res.json(items);
})*/


app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname,"..","build","index.html"));
});

module.exports = app;