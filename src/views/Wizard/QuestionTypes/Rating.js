import React from 'react';

export default function Rating(props){
	return (
		<div className="scale-table">
			<div className="scale-container">
				<b>1</b>
				<input
					type="radio"
					readOnly
					value={1}
				/>
			</div>
			<div className="scale-container">
				<b>2</b>
				<input
					type="radio"
					readOnly
					value={2}
				/>
			</div>
			<div className="scale-container">
				<b>3</b>
				<input
					type="radio"
					readOnly
					value={3}
				/>
			</div>
			<div className="scale-container">
				<b>4</b>
				<input
					type="radio"
					readOnly
					value={4}
				/>
			</div>
			<div className="scale-container" id="last-container">
				<b>5</b>
				<input
					type="radio"
					readOnly
					value={5}
				/>
			</div>
		</div>
	);
}
