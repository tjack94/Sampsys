import React from 'react'

export default function YesNo(props){
    return(
        <div className='multiple-choice'>
						<div>
							<input
								type="radio"
								name={props.currentQuestion.question_id + "response"}
								value={'yes'}
								readOnly
								checked= {props.currentQuestion.response === 'yes'? 'checked': ''}
							/>Yes
						</div>
						<div>
							<input
								type="radio"
								name={props.currentQuestion.question_id + "response"}
								value={'no'}
								readOnly
								checked= {props.currentQuestion.response === 'no'? 'checked': ''}
							/>No
						</div>
					</div>
    )
}