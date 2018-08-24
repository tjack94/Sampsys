import React, { Component } from 'react';
import axios from 'axios';
import ResultsMap from './ResultsMap';
import ResutsNavigation from './ResultsNavigation';
import { Link } from 'react-router-dom';

class Individual extends Component {
	constructor(props) {
		super(props);
		this.state = {
			responses: [],
			survey: {},
			consumerIds: []
		};
	}
	componentWillMount() {
		this.updateComponent();
	}
	updateComponent() {
		const promises = [];

		promises.push(
			axios
				.get(`/api/individual-response/${this.props.match.params.surveyid}/${this.props.match.params.userid}`)
				.then(({ data }) => data)
		);
		promises.push(axios.get('/api/get-survey-info').then(({ data }) => data));
		promises.push(
			axios.get(`/api/collective-responses/${this.props.match.params.surveyid}`).then(({ data }) => data)
		);

		return Promise.all(promises).then(([ responses, survey, consumers ]) => {
			const consumerIds = [];
			consumers.map((consumer) => consumerIds.push(consumer.consumer_id));
			this.setState({ responses, survey, consumerIds });
		});
	}
	render() {
		return this.state.responses.length < 1 ? null : (
			<div className="main-component scale-in-top">
				<Link id="back-button" to={`/results/${this.props.match.params.surveyid}`}>
					<button className="login-button">Back to Collective</button>
				</Link>
				<ResutsNavigation
					ids={this.state.consumerIds}
					currentSurvey={this.props.match.params.userid}
					surveyId={this.props.match.params.surveyid}
					update={this.updateComponent.bind(this)}
				/>
				<h1>{this.state.survey[0].survey_name} </h1>
				<ResultsMap questions={this.state.responses} />
			</div>
		);
	}
}
export default Individual;
