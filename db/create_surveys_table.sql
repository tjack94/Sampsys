CREATE TABLE surveys (
survey_name TEXT,
survey_id SERIAL PRIMARY KEY , 
user_id INTEGER REFERENCES users (id),
response_count INTEGER  
)

