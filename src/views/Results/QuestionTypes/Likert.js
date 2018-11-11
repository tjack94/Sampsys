import React from 'react';

export default function Likert(props) {
	const stronglyAgree = 'Strongly Agree';
	const agree = 'Agree';
	const neutral = 'Neutral';
	const disagree = 'Disagree';
	const stronglyDisagree = 'Strongly Disagree';
	return (
		<div className="scale-table">
			<div className="scale-container">
				<b>Strongly Disagree</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Strongly Disagree"
					readOnly
					checked={props.currentQuestion.response === stronglyDisagree ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container">
				<b>Disagree</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Disagree"
					readOnly
					checked={props.currentQuestion.response === disagree ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container">
				<b>Neutral</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Neutral"
					readOnly
					checked={props.currentQuestion.response === neutral ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container">
				<b>Agree</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Agree"
					readOnly
					checked={props.currentQuestion.response === agree ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container" id="last-container">
				<b>Strongly Agree</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value="Strongly Agree"
					readOnly
					checked={props.currentQuestion.response === stronglyAgree ? 'checked' : ''}
				/>
			</div>
		</div>
	);
}
