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
					value="Strongly Disagree"
					readOnly
				/>
			</div>
			<div className="scale-container">
				<b>Disagree</b>
				<input
					type="radio"
					value="Disagree"
					readOnly
				/>
			</div>
			<div className="scale-container">
				<b>Neutral</b>
				<input
					type="radio"
					value="Neutral"
					readOnly
				/>
			</div>
			<div className="scale-container">
				<b>Agree</b>
				<input
					type="radio"
					value="Agree"
					readOnly
				/>
			</div>
			<div className="scale-container" id='last-container'>
				<b>
					Strongly Agree
				</b>
				<input
					type="radio"
					value="Strongly Agree"
					readOnly
				/>
			</div>
		</div>
	);
}
