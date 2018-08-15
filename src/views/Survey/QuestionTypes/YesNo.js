import React from 'react'

export default function YesNo(props){
    return(
        <div>
						<div>
							Yes<input
								type="radio"
								name={props.currentQuestion.question_id + "response"}
								value={'yes'}
								onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
							/>
						</div>
						<div>
							No<input
								type="radio"
								name={props.currentQuestion.question_id + "response"}
								value={'no'}
								onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
							/>
						</div>
					</div>
    )
}