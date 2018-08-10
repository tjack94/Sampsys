import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import { Link } from 'react-router-dom';

class StepTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			surveyName: ''
		};
	}
	componentWillMount() {
		axios.get('/api/get-survey-info').then((response) => {
			console.log(response)
			this.props.getSurveyName(response.data[0].survey_name);
			
		});
		axios.get('/api/get-survey-questions').then((response) => {
			this.setState({ questions: response.data });
		});
	}
	render() {
		const questionsList =
			this.state.questions.length < 1 ? (
				<p>No Questions added yet</p>
			) : (
				this.state.questions.map((question, index) => {
					return <div key={index}>{question.question}</div>;
				})
			);
		return (
			<div>
				<h1>{this.props.saveSurveyToState.surveyName}</h1>
				{questionsList}
				<Link to="/create-survey/step3">
					<button>Add Question</button>
				</Link>
				<Link to= '/create-survey/link-generator'>
				<button>Done</button>
				</Link>
			</div>
		);
	}
}
export default connect((state) => state, Actions)(StepTwo);
