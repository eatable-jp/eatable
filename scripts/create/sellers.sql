CREATE TABLE sellers (
    id SERIAL UNIQUE NOT NULL,
    seller_name TEXT NOT NULL,
    shop_name TEXT NOT NULL,
    shop_location TEXT NOT NULL,
    shop_long TEXT NOT NULL,
    shop_lat TEXT NOT NULL,
    opening_time TEXT NOT NULL,
    closing_time TEXT NOT NULL,
    phone_number INTEGER NOT NULL,
    email_address TEXT NOT NULL
 );