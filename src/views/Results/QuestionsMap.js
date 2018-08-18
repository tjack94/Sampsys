import React from 'react'
import QuestionChart from './QuestionChart'
import OpenQuestionChart from './OpenQuestionChart'

export default function QuestionsMap(props){
    return(
        props.questions.map((question, index)=>{
            if (question.question_type != 'open'){
            return <QuestionChart key={index} currentQuestion={question}/>
            } else{
                return (
                    <OpenQuestionChart key={index} currentQuestion ={question}/>
                )
            }
        })
    )
}