const fs = require("fs");
const db = require("/Users/Marcus/Desktop/Eatable/eatable/knexfile.js");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const allSellers = getSellers();
  return knex('sellers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sellers').insert(allSellers);
    });
};

function getSellers(){
  const sellers = JSON.parse(fs.readFileSync("./data/sellers.json"))
  return sellers
}
