import React from 'react'

export default function TrueFalse(props){
    return(
        <div className='multiple-choice'>
						<div>
							<input
								type="radio"
								name={props.currentQuestion.question_id + "response"}
								value={'true'}
								onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
							/>
							True
						</div>
						<div>
							<input
								type="radio"
								name={props.currentQuestion.question_id + "response"}
								value={'false'}
								onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
							/>
							False
						</div>
					</div>
    )
}