import React from 'react'

export default function Rating(props){
    return(
        <table >
            <tbody>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
						</tr>
						<tr>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value={1}
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value={2}
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value={3}
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value={4}
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name={props.currentQuestion.question_id + "response"}
									value={5}
									onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
								/>
							</td>
						</tr>
                        </tbody>
					</table>
    )
}