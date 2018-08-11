import React from 'react'

export default function TrueFalse(props){
    return(
        <div>
						<div>
							True<input
								type="radio"
								name="question_response"
								value={'true'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
						<div>
							False<input
								type="radio"
								name={"question_response"}
								value={'false'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
					</div>
    )
}