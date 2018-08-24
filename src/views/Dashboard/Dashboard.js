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
		const filteredSurveys = this.state.surveys.filter((survey, index) => index !== surveyIndex);
		axios.delete('/api/delete-survey/' + survey_id).then(() => {
			this.setState({ surveys: filteredSurveys });
		});
	}
	distributeSurvey(surveyId) {
		axios.get(`/api/get-surveyid/${surveyId}`).then(() => {
			this.props.history.push('/create-survey/link-generator');
		});
	}
	render() {
		const surveyList =
			this.state.surveys.length < 1 ? (
				<h2 className="no-surveys">You don't have any Surveys Yet</h2>
			) : (
				this.state.surveys.map((survey, index) => {
					return (
						<div key={index}>
							<Link className="link-to-survey" to={`/results/${survey.survey_id}`}>
								<div className="survey-list scale-out-center" >
									
									{survey.survey_name}
									<span>
										<b># of Responses:</b>
										{survey.response_count}
									</span>
									<button
										className="delete-button"
										id='delete-survey'
										onClick={(e) => {e.preventDefault(); this.deleteSurvey(survey.survey_id, index)}}
									>
										delete
									</button>
								</div>
							</Link>
						</div>
					);
				})
			);

		return (
			<div className="dashboard scale-in-top" id="dashboard">
				<h1 id='my-surveys'>My Surveys</h1>
				<div>
					<Link to="/create-survey/step1">
						<button className="create-new-survey">Create New Survey</button>
					</Link>
				</div>
				<div className="survey-list-container">{surveyList}</div>
			</div>
		);
	}
}
export default connect((state) => state)(Dashboard);
