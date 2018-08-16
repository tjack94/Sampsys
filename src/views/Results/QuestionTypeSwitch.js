import React from 'react'
import MultipleChoice from '../Wizard/QuestionTypes/MultipleChoice';

export default function QuestionTypeSwitch(props){
    
        switch(props.question.question_type){

    case "likert":
    return <LikertChart question ={props.question}/>

    case "multiple_choice":
    return <MultipleChoiceChart question ={props.question}/>

    case "open":
    return <OpenChart question ={props.question}/>
        }
}