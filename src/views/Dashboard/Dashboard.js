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
	render() {
		const surveyList =
			this.state.surveys.length < 1 ? (
				<h2>You don't have any Surveys Yet</h2>
			) : (
				this.state.surveys.map((survey, index) => {
					return (
						<tr className="survey-list" key={index}>
							<Link className="link-to-survey" to={`/results/${survey.survey_id}`}>
								<td>{survey.survey_name} </td>
							</Link>
							<td>{survey.response_count}</td>

							<button
								className="delete-button"
								onClick={() => this.deleteSurvey(survey.survey_id, index)}
							>
								delete
							</button>
						</tr>
					);
				})
			);

		return (
			<div className="dashboard">
				<h1>My Surveys</h1>
				<div>
					<Link to="/create-survey/step1">
						<button className="login-button">Create New Survey</button>
					</Link>
				</div>
				<table border="0">
					<tr>
						<td>
							{' '}
							<b>
								<u>Survey Name</u>
							</b>
						</td>
						<td>
							<b>
								Number of <br /> <u>Responses</u>
							</b>
						</td>
					</tr>
					{surveyList}
				</table>
			</div>
		);
	}
}
export default connect((state) => state)(Dashboard);
