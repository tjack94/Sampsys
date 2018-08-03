CREATE TABLE users (
username TEXT UNIQUE , 
password TEXT,
email TEXT, 
first_name TEXT, 
last_name TEXT,
 id SERIAL PRIMARY KEY 
)
