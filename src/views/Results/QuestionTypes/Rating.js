import React from 'react';

export default function Rating(props) {
	return (
		<div className="scale-table">
			<div className="scale-container">
				<b>1</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					readOnly
					value={1}
					checked={Number(props.currentQuestion.response) === 1 ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container">
				<b>2</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					readOnly
					value={2}
					checked={Number(props.currentQuestion.response) === 2 ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container">
				<b>3</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					readOnly
					value={3}
					checked={Number(props.currentQuestion.response) === 3 ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container">
				<b>4</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					readOnly
					value={4}
					checked={Number(props.currentQuestion.response) === 4 ? 'checked' : ''}
				/>
			</div>
			<div className="scale-container" id="last-container">
				<b>5</b>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					readOnly
					value={5}
					checked={Number(props.currentQuestion.response) === 5 ? 'checked' : ''}
				/>
			</div>
		</div>
	);
}
