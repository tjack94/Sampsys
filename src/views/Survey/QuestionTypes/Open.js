import React from 'react'

export default function Open(props){
    return(
        <textarea onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}/>
    )
}