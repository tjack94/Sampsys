import React from 'react';

export default function Likert(props) {
	return (
		<div className="scale-table">
			<div className="scale-container">
				<u>
					Strongly Disagree
				</u>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Strongly Disagree"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<u>Disagree</u>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Disagree"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<u>Neutral</u>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Neutral"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<u>Agree</u>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Agree"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container" id='last-container'>
				<u>
					Strongly Agree
				</u>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Strongly Agree"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
		</div>
	);
}
