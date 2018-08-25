import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QuestionsMap from './QuestionsMap';
import './results.css';

class Collective extends Component {
	constructor(props) {
		super(props);
		this.state = {
			responses: [],
			survey: {},
			questions: [],
			showIndividualResponses: false
		};
	}
	componentWillMount() {
		const promises = [];

		promises.push(
			axios.get(`/api/collective-responses/${this.props.match.params.surveyid}`).then(({ data }) => data)
		);
		promises.push(axios.get(`/api/get-surveyid/${this.props.match.params.surveyid}`).then(({ data }) => data));
		promises.push(
			axios.get(`/api/get-survey-questions/${this.props.match.params.surveyid}`).then(({ data }) => data)
		);

		return Promise.all(promises)
			.then(([ responses, survey_id, questions ]) => {
				const survey = survey_id[0];

				this.setState({ responses, survey, questions });
			})
			.catch(() => this.props.history.push('/dashboard'));
	}
	render() {
		const responseList =
			this.state.responses.length < 1 ? (
				<h2>No Responses Yet </h2>
			) : (
				this.state.responses.map((response, index) => {
					return (
						<Link key={index} to={`/results/${this.state.survey.survey_id}/${response.consumer_id}`}>
							<button className="response-button">Response {index + 1}</button>
						</Link>
					);
				})
			);
		const individualResponses = this.state.showIndividualResponses ? (
			<div className="responses-box scale-in-top">
				<button className="delete-button" onClick={() => this.showOrHideResponses()}>
					Hide
				</button>
				<h2>Responses</h2>
				{responseList}
			</div>
		) : (
			<button className="next-button" onClick={() => this.showOrHideResponses()}>
				See Individual Responses
			</button>
		);

		return this.state.survey.survey_name ? (
			<div className="main-component scale-in-top" id="collective-results">
				<h1>{this.state.survey.survey_name}</h1>
				<div>
					<Link to="/create-survey/link-generator">
						<button className="login-button">Get Survey Link</button>
					</Link>
					<Link to="/create-survey/step2">
						<button className="login-button">Edit Survey</button>
					</Link>
				</div>
				{individualResponses}
				<QuestionsMap questions={this.state.questions} />
			</div>
		) : null;
	}
	showOrHideResponses() {
		if (this.state.showIndividualResponses === true) {
			this.setState({ showIndividualResponses: false });
		} else {
			this.setState({ showIndividualResponses: true });
		}
	}
}
export default Collective;
