const fs = require("fs");
const db = require("/Users/Marcus/Desktop/Eatable/eatable/knexfile.js");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const allItems = getItems();
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert(allItems);
    });
};

function getItems(){
  const items = JSON.parse(fs.readFileSync("./data/items.json"))
  return items
}