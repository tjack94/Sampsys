import React from 'react';

export default function Likert(props) {
	return (
		<div className="scale-table">
			<div className="scale-container">
				<b>
					Strongly Disagree
				</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Strongly Disagree"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<b>Disagree</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Disagree"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<b>Neutral</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Neutral"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<b>Agree</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Agree"
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container" id='last-container'>
				<b>
					Strongly Agree
				</b>
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
