import React from 'react';

export default function TrueFalse(props) {
	return (
		<div className="multiple-choice">
			<div>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={'true'}
					checked={props.currentQuestion.response === 'true' ? 'checked' : ''}
					readOnly
				/>
				True
			</div>
			<div>
				<input
					type="radio"
					name={props.currentQuestion.question_id + 'response'}
					value={'false'}
					checked={props.currentQuestion.response === 'false' ? 'checked' : ''}
					readOnly
				/>
				False
			</div>
		</div>
	);
}
