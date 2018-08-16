import React from 'react';

export default function Rating(props) {
	return (
		<div className="scale-table">
			<div className="scale-container">
				<b>1</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={1}
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<b>2</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={2}
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<b>3</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={3}
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container">
				<b>4</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={4}
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
			<div className="scale-container" id='last-container'>
				<b>5</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={5}
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>
			</div>
		</div>
	);
}
