import React from 'react';
import Likert from './Likert';
import Rating from './Rating';
import YesNo from './YesNo';
import TrueFalse from './TrueFalse';

export default function QuestionSwitch(props){
    switch(props.questionType){
        case 'likert':
        return <Likert/>

        case "rating":
        return <Rating/>

        case 'yes_no':
        return <YesNo/>

        case 'true_false':
        return <TrueFalse/>

        case 'open':
        return null

        default: return null
    }
}