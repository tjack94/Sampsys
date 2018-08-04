import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
	render() {
		const surveyList =
			this.state.surveys.length < 1 ? (
				<h2>You don't have any Surveys Yet</h2>
			) : (
				this.state.surveys.map((survey, index) => {
					return (
						<Link to={`/results/${survey.survey_id}`} key={index}>
							<div>
								{survey.survey_name} # of Responses {survey.response_count}
							</div>
						</Link>
					);
				})
			);

		return <div>{surveyList}</div>;
	}
}
export default connect((state) => state)(Dashboard);
