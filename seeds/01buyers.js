const fs = require("fs");
const db = require("/Users/Marcus/Desktop/Eatable/eatable/knexfile.js");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const allBuyers = getbuyers();

  return knex('buyers').del()
    .then(function () {
      // Inserts seed entries
      return knex('buyers').insert(allBuyers);
    });
};

function getbuyers(){
  const buyers = JSON.parse(fs.readFileSync("./data/buyers.json"))
  return buyers
}
