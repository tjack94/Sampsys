import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Collective extends Component {
	constructor(props) {
		super(props);
		this.state = {
			responses: [],
			surveyId: ''
		};
	}
	componentWillMount() {
		axios.get(`/api/collective-responses/${this.props.match.params.surveyid}`).then((results) => {
			axios.get(`/api/get-surveyid/${this.props.match.params.surveyid}`).then(response => this.setState( { surveyId: response.data[0] } ))
			this.setState({ responses: results.data });
		});
	}
	render() {
		const responseList =
			this.state.responses.length < 1 ? (
				<h2>No Responses Yet </h2>
			) : (
				this.state.responses.map((response, index) => {
					const surveyId = this.props.match .surveyid
					return (
						<Link key={index} to={`/results/${this.state.surveyId.survey_id}/${response.consumer_id}`}>
							<li>{response.consumer_id} response</li>
						</Link>
					);
				})
			);
		return (
			<div>
				<ol>{responseList}</ol>
			</div>
		);
	}
}
export default Collective;
