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

//***************************************ITEMS************************************************
app.get('/items', async(req,res) => {
    const items = await db.select().table("items");
    res.json(items);
})

//going to be in the body JSON as is standard for post 
app.post('/items', async(req,res) => {
    const newItem = req.body;
    const items = await db.select().table("items").insert(newItem);
    res.json(`New Item ${newItem.name} has been posted to sell`)
})

//in the body pass in the new JSON object
app.patch('/items', async(req,res) => {
    const c = req.body
    const itemId = req.body.id
    //const items = await db.select().table("items");
    const patchItem = await db.select()
    .table("items")
    .where({id:itemId})
    .update({name:c.name, image:c.image ,type:c.type,buyer_id:c.buyer_id,price:c.price,original_price:c.original_price,expiration_date:c.expiration_date,note:c.note});

    res.send("item updated")
})

//grab the item with a query param
app.delete('/items',async(req,res) => {
    const itemId = req.query.id
    const itemIdInt = parseInt(itemId)
    const foundItem = await db.select().table("items").where({id:itemIdInt});
    const deleteItem = await db.select()
    .table("items")
    .where({id:itemIdInt})
    .del()

    res.send(`${foundItem[0].name} has been deleted`)
})

//************************SELLERS******************************************* */

app.get('/sellers', async(req,res) => {
    const allSellers = await db.select().table("sellers")
    res.json(allSellers)
});

//JSON body no id included when creating the DB will take care of it
app.post('/sellers', async(req,res) => {
    const newSeller = req.body;
    const s = req.body
    const sellers = await db.select().table("sellers")
    .insert({id: s.id,shop_name:s.shop_name, shop_location: s.shop_location, shop_long: s.shop_long,
    shop_lat:s.shop_lat, opening_time:s.opening_time,closing_time:s.closing_time, phone_number:s.phone_number});
    res.json(`New member named ${newSeller.name} has been created, happy selling!`)
})



app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname,"..","build","index.html"));
});

module.exports = app;