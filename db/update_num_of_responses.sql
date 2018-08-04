update surveys 
SET response_count = response_count + 1
WHERE survey_id = $1