CREATE TABLE items (
    id SERIAL UNIQUE NOT NULL,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    type TEXT NOT NULL,
    price INTEGER NOT NULL,
    original_price INTEGER NOT NULL,
    expiration_date TEXT NOT NULL,
    note TEXT,
    seller_id INTEGER REFERENCES sellers(id),
    buyer_id INTEGER DEFAULT NULL,
    shop_lat TEXT NOT NULL,
    shop_long TEXT NOT NULL
);