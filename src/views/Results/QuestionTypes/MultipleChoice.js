import React from 'react'

export default function MultipleChoice(props){
    return props.currentQuestion.possible_responses.map((response, index) => {
        return (
            <div key={index} >
                <input
                    type="radio"
                    name={props.currentQuestion.question_id+"response"}
                    value={response}
                    checked={props.currentQuestion.response === response ? 'selected' : ''}
                    readOnly
                />
                {response}
            </div>
   );
   
    });
}