import React from 'react'
import QuestionChart from './QuestionChart'

export default function QuestionsMap(props){
    return(
        props.questions.map((question, index)=>{
            return <QuestionChart key={index} currentQuestion={question}/>
        })
    )
}