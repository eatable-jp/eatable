require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors")
const knex = require('knex')

//const environment = process.env.ENV || 'development';
//const config = require("../knexfile")[environment];
//const db = knex(config);

const app = express()

//Middleware
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// Automatically parse request body as form data.
app.use(express.urlencoded({extended: false}));

app.enable('trust proxy');

//Serve the static assets
app.use(express.static(path.resolve(__dirname,"..","build")));

// Set Content-Type for all responses for these routes.
app.use((req, res, next) => {
    res.set('Content-Type', 'text/html');
    next();
});



// Set up a variable to hold our connection pool. It would be safe to
// initialize this right away, but we defer its instantiation to ease
// testing different configurations.
let pool;

app.use(async (req, res, next) => {
  if (pool) {
    return next();
  }
  try {
    pool = await createPoolAndEnsureSchema();
    next();
  } catch (err) {
    return next(err);
  }
});


const createUnixSocketPool = async config => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
  
    // Establish a connection to the database
    return knex({
      client: 'pg',
      connection: {
        user: process.env.DB_USER, 
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
      },
      // ... Specify additional properties here.
      ...config,
    });
};



const createTcpPool = async config => {
    // Extract host and port from socket address
    const dbSocketAddr = process.env.DB_HOST.split(':'); // e.g. '127.0.0.1:5432'
  
    // Establish a connection to the database
    return knex({
      client: 'pg',
      connection: {
        user: process.env.DB_USER, // e.g. 'my-user'
        password: process.env.DB_PASS, // e.g. 'my-user-password'
        database: process.env.DB_NAME, // e.g. 'my-database'
        host: dbSocketAddr[0], // e.g. '127.0.0.1'
        port: dbSocketAddr[1], // e.g. '5432'
      },
      // ... Specify additional properties here.
      ...config,
    });
  };

const createPool = async () => {
    // Configure which instance and what database user to connect with.
    // Remember - storing secrets in plaintext is potentially unsafe. Consider using
    // something like https://cloud.google.com/kms/ to help keep secrets secret.
    const config = {pool: {}};
    config.pool.max = 5;
    config.pool.min = 5;
    config.pool.acquireTimeoutMillis = 60000;
    config.pool.createTimeoutMillis = 30000;
    config.pool.idleTimeoutMillis = 600000;
    config.pool.createRetryIntervalMillis = 200;
    console.log("this pool")

    if (process.env.DB_HOST === "127.0.0.1:8080") {
        return createTcpPool(config);
    } else {
        return createUnixSocketPool(config);
    }
};

/*

const ensureSchema = async pool => {
    const hasTable = await pool.schema.hasTable('votes');
    if (!hasTable) {
      return pool.schema.createTable('votes', table => {
        table.increments('vote_id').primary();
        table.timestamp('time_cast', 30).notNullable();
        table.specificType('candidate', 'CHAR(6)').notNullable();
      });
    }
    logger.info("Ensured that table 'votes' exists");
};


const ensureSchema = async pool => {
    const hasTable = await pool.schema.hasTable('items');
    if (!hasTable) {
      return pool.schema.createTable('items', table => {
        table.increments('vote_id').primary();
        table.timestamp('time_cast', 30).notNullable();
        table.specificType('candidate', 'CHAR(6)').notNullable();
      });
    }
};
*/

const createPoolAndEnsureSchema = async () =>
  await createPool()
    .then(async pool => {
      //await ensureSchema(pool);
      return pool;
    })
    .catch(err => {
      //logger.error(err);
      throw err;
    });

/*
const insertVote = async (pool, vote) => {
    try {
    return await pool('votes').insert(vote);
    } catch (err) {
    throw Error(err);
    }
};

const getVotes = async pool => {
    return await pool
      .select('candidate', 'time_cast')
      .from('votes')
      .orderBy('time_cast', 'desc')
      .limit(5);
};

const getVoteCount = async (pool, candidate) => {
    return await pool('votes').count('vote_id').where('candidate', candidate);
};

*/

const getItems = async pool => {
    return await pool
        .select('*')
        .from('items')
}

app.get('/items', async (req, res) => {
    console.log("first in items  ")
    console.log(process.env.DB_USER)
    console.log(process.env.DB_PASS)
    console.log(process.env.DB_NAME)
    console.log(process.env.DB_HOST)
    pool = pool || (await createPoolAndEnsureSchema());
    console.log("pool created ")
    //console.log(pool)
    try {
        const items = await getItems(pool)
        res.json(items);
    } catch (err) {
        console.error(err);
    res
      .status(500)
      .send('Unable to load page; see logs for more details.')
      .end();
    }
});


/*
//***************************************ITEMS*************************************
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

//************************SELLERS************************************************ 

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

app.patch('/sellers', async(req,res) => {
    const s = req.body
    const itemId = req.body.id
    //const items = await db.select().table("items");
    const patchItem = await db.select()
    .table("sellers")
    .where({id:itemId})
    .update({id: s.id ,shop_name:s.shop_name, shop_location: s.shop_location, shop_long: s.shop_long,
        shop_lat:s.shop_lat, opening_time:s.opening_time,closing_time:s.closing_time, phone_number:s.phone_number});

    res.send("Seller info updated!!")
})

//Query with id
app.delete('/sellers',async(req,res) => {
    const itemId = req.query.id
    const itemIdInt = parseInt(itemId)
    const foundItem = await db.select().table("sellers").where({id:itemIdInt});
    const deleteItem = await db.select()
    .table("sellers")
    .where({id:itemIdInt})
    .del()

    res.send(`${foundItem[0].shop_name} has been deleted`)
})

/************************************BUYERS************************************** 

app.get("/buyers",async(req,res) => {
    const allBuyers = await db.select().table('buyers')
    res.json(allBuyers)
});

// add buyer without ID DB will assign one.
app.post("/buyers", async(req,res) => {
    const nB = req.body
    const newBuyer = await db.select().table("buyers")
    .insert({display_name:nB.display_name, email:nB.email, address: nB.address, phone_number:nB.phone_number})
    res.json(`New user ${nB.display_name} added!`)
});

app.patch('/buyers', async(req,res) => {
    const nB = req.body
    const itemId = req.body.id
    //const items = await db.select().table("items");
    const patchItem = await db.select()
    .table("buyers")
    .where({id:itemId})
    .update({id: nB.id, display_name:nB.display_name, email:nB.email, address: nB.address, phone_number:nB.phone_number});

    res.send("Buyer info updated!!")
})

//Query with ID
app.delete('/buyers',async(req,res) => {
    const buyerId = req.query.id
    const buyerIdInt = parseInt(buyerId)
    const foundBuyer = await db.select().table("buyers").where({id:buyerIdInt});
    const deleteItem = await db.select()
    .table("buyers")
    .where({id:buyerIdInt})
    .del()

    res.json(`${foundBuyer[0].display_name} has been deleted`)
})

*/

//test endpoint
app.get("/hello", async(req,res) => {
    res.json("Let's save some food!!!!!!!!!!")
})


app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname,"..","build","index.html"));
});

module.exports = app;