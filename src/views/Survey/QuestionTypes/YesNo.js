import React from 'react';

export default function YesNo(props) {
	return (
		<div className="multiple-choice">
			<div>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={'yes'}
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>Yes
			</div>
			<div>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={'no'}
					onChange={(e) => props.handleChange(props.currentQuestion.question_id, e.target.value)}
				/>No
			</div>
		</div>
	);
}
