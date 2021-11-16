CREATE TABLE users (
    id SERIAL UNIQUE NOT NULL,
    user_name TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);