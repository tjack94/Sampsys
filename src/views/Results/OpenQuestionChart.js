import React, { Component } from 'react';
import axios from 'axios';

class OpenQuestionChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			responses: [],
			displayChart: false
		};
	}
	componentWillMount() {
		axios
			.get('/api/get-chart-data/' + this.props.currentQuestion.question_id)
			.then(({ data }) => this.setState({ responses: data }))
			.then(() => {
				this.setState({ displayChart: true });
			});
	}

	render() {
		const responseList =
			this.state.displayChart === true
				? this.state.responses.map((response, index) => {
						return (
							<li className="response-list-item" key={index}>
								{response.response}
							</li>
						);
					})
				: 'loading...';
		return (
			<div className="open-ended-responses">
				<b className="chart-title">{ this.props.currentQuestion.question }</b>
				<ul className="response-list">{ responseList }</ul>
			</div>
		);
	}
}
export default OpenQuestionChart;
