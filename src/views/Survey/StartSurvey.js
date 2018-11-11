import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import './survey.css';
import SampsysLogo from '../Login/SampsysLogo.png';

class StartSurvey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			survey: {},
			questions: []
		};
	}
	componentWillMount() {
		axios.get(`/api/start-survey/${this.props.match.params.surveyid}`).then((response) => {
			this.setState({ survey: response.data[0] });
		});
		axios.get(`/api/get-survey-questions/${this.props.match.params.surveyid}`).then((response) => {
			this.setState({ questions: response.data });
		});
	}
	beginSurvey() {
		axios.post('/api/create-consumerid').then(() => {
			this.props.history.push(`/take-survey/${this.state.survey.survey_id}/`);
		});
	}
	render() {
		return (
			<div className="start-survey">
				<header className="navbar">
					<img src={SampsysLogo} alt="logo" className="logo" />
				</header>
				<div className="main-component">
					<h1>{this.state.survey.survey_name}</h1>
					<h4 className="survey-length">{this.state.questions.length} Questions</h4>
					<button className="next-button" onClick={() => this.beginSurvey()}>
						Start
					</button>
				</div>
			</div>
		);
	}
}
export default connect((state) => state, Actions)(StartSurvey);
