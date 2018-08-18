import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			surveys: []
		};
	}
	componentWillMount() {
		axios.get(`/api/get-user-surveys`).then((response) => {
			this.setState({ surveys: response.data });
		});
	}
	deleteSurvey(survey_id, surveyIndex) {
		const filteredSurveys = this.state.surveys.filter((survey, index) => index != surveyIndex);
		axios.delete('/api/delete-survey/' + survey_id).then(() => {
			this.setState({ surveys: filteredSurveys });
		});
	}
	editSurvey(surveyId) {
		axios.get(`/api/get-surveyid/${surveyId}`).then(() => {
			this.props.history.push('/create-survey/step2');
		});
	}
	render() {
		const surveyList =
			this.state.surveys.length < 1 ? (
				<h2 className="no-surveys">You don't have any Surveys Yet</h2>
			) : (
				this.state.surveys.map((survey, index) => {
					return (
						<div className="survey-list" key={index}>
							<Link className="link-to-survey" to={`/results/${survey.survey_id}`}>
								{survey.survey_name}
								<span>
									<b># of Responses:</b>
									{survey.response_count}
								</span>
							</Link>
							<div id="survey-controls">
								<button
									className="response-button"
									id="edit-button"
									onClick={() => this.editSurvey(survey.survey_id)}
								>
									Edit
								</button>
								<button
									className="delete-button"
									onClick={() => this.deleteSurvey(survey.survey_id, index)}
								>
									delete
								</button>
								
							</div>
						</div>
					);
				})
			);

		return (
			<div className="dashboard" id="dashboard">
				<h1>My Surveys</h1>
				<div>
					<Link to="/create-survey/step1">
						<button className="login-button">Create New Survey</button>
					</Link>
					<hr />
				</div>
				<div className="survey-list-container">{surveyList}</div>
			</div>
		);
	}
}
export default connect((state) => state)(Dashboard);
