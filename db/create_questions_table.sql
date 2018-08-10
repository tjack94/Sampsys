CREATE TABLE questions (
question_id SERIAL PRIMARY KEY ,
survey_id INTEGER REFERENCES surveys (survey_id) , 
question_type TEXT,
 Question TEXT,
 possible_responses  TEXT ARRAY
)
