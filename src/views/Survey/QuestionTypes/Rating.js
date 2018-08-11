import React from 'react'

export default function Rating(props){
    return(
        <table name={this.state.currentQuestion.questionid+"rating"}>
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
									name="question_response"
									value={1}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={2}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={3}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={4}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={5}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
						</tr>
					</table>
    )
}