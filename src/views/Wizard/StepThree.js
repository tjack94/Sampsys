import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import { Link } from 'react-router-dom';

class StepThree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionType: ''
		};
	}
	handleChange(string) {
		this.setState({ questionType: string });
	}
	render() {
		const nextButton =
			this.state.questionType === '' ? null : (
				<Link to={`/create-survey/step4/${this.state.questionType}`}>
					<button className="next-button" onClick={() => this.props.setQuestionType(this.state.questionType)}>
						Next
					</button>
				</Link>
			);
		return (
			<div className="wizard slide-in-right">
				<h2>Select Question Type</h2>
				<div className="select-box">
					<select
						className="select-question-type"
						onChange={(e) => this.handleChange(e.target.value)}
						name="Question-type"
					>
						<option value="">Select A Question type</option>
						<option value="multiple_choice"> Multiple Choice</option>
						<option value="likert">Likert Scale (Agree/Disagree)</option>
						<option value="rating"> Rating Scale (Numeric Rating)</option>
						<option value="open">Open Ended</option>
						<option value="true_false">Dichotomous (True or False)</option>
						<option value="yes_no">Dichotomous (Yes or No)</option>
					</select>
				</div>
				{nextButton}
			</div>
		);
	}
}
export default connect((state) => state, Actions)(StepThree);
