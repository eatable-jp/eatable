CREATE TABLE buyers (
    id SERIAL UNIQUE NOT NULL,
    buyer_name TEXT NOT NULL,
    buyer_address TEXT NOT NULL,
    phone_number INTEGER NOT NULL,
    email_address TEXT NOT NULL
);