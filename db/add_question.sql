insert into questions (
    survey_id,
    question_type,
    question, 
    possible_responses
) VALUES(
    $1,
    $2,
    $3,
    $4
)