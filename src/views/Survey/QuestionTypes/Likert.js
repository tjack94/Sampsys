import React from 'react'

export default function Likert(props){
    return(
        <table name={this.state.currentQuestion.questionid +"likert"}>
						<tr>
							<td>Strongly Disagree</td>
							<td>Disagree</td>
							<td>Neutral</td>
							<td>Agree</td>
							<td>Strongly Agree</td>
						</tr>
						<tr>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Strongly Disagree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Disagree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Neutral"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Agree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Strongly Agree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
						</tr>
					</table>
    )
}