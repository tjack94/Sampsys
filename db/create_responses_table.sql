CREATE Table responses (
response_id SERIAL PRIMARY KEY ,
question_id INTEGER REFERENCES questions (question_id),
consumer_id INTEGER,
response TEXT
)
