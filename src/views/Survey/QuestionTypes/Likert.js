import React from 'react'

export default function Likert(props){
    return(
        <table width= '400' >
            <tbody>
						<tr>
							<td>Strongly <br/> Disagree</td>
							<td>Disagree</td>
							<td>Neutral</td>
							<td>Agree</td>
							<td>Strongly <br/> Agree</td>
						</tr>
						<tr>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value="Strongly Disagree"
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value="Disagree"
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value="Neutral"
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value="Agree"
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value="Strongly Agree"
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
						</tr>
                        </tbody>
					</table>
    )
}