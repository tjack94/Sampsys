import React from 'react'

export default function YesNo(props){
    return(
        <div>
						<div>
							Yes<input
								type="radio"
								name="question_response"
								value={'yes'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
						<div>
							No<input
								type="radio"
								name="question_response"
								value={'no'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
					</div>
    )
}