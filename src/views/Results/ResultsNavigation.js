import React from 'react';
import { Link } from 'react-router-dom';

export default function ResultsNavigation(props) {
	const consumerIds = props.ids;
	const currentSurvey = Number(props.currentSurvey);
	const currentIndex = consumerIds.indexOf(currentSurvey);
	const previousButton =
		currentIndex === 0 ? (
			<div />
		) : (
			<Link to={`/results/${props.surveyId}/${consumerIds[currentIndex - 1]}`}>
				<button className="next-button" onClick={() => props.update()}>{`<<Previous`}</button>
			</Link>
		);
	const nextButton =
		currentIndex === consumerIds.length - 1 ? (
			<div />
		) : (
			<Link to={`/results/${props.surveyId}/${consumerIds[currentIndex + 1]}`}>
				<button className="next-button" onClick={() => props.update()}>
					{'Next>>'}
				</button>
			</Link>
		);
	return (
		<div className="nav-button-container">
			{previousButton}
			{nextButton}
		</div>
	);
}
