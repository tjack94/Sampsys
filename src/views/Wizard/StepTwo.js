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
			this.props.getSurveyName(response.data[0].survey_name);
		});
		axios.get('/api/get-survey-questions').then((response) => {
			this.setState({ questions: response.data });
		});
	}
	deleteQuestion(questionId, questionIndex) {
		const updatedQuestions = this.state.questions.filter((question, index) => index !== questionIndex);
		axios.delete('/api/delete-question/' + questionId).then(() => {
			this.setState({ questions: updatedQuestions });
		});
	}
	render() {
		const questionsList =
			this.state.questions.length < 1 ? (
				<p>No Questions added yet</p>
			) : (
				this.state.questions.map((question, index) => {
					return (
						<tr key={index}>
							<td className="question-column">
								{index + 1}. {question.question}
							</td>
							<td>({question.question_type}) </td>
							<td>
								<button
									onClick={() => this.deleteQuestion(question.question_id, index)}
									className="delete-button"
								>
									X
								</button>
							</td>
						</tr>
					);
				})
			);
		const showTable =
			this.state.questions.length < 1 ? (
				questionsList
			) : (
				<table border="0">
					<tbody>
						<tr>
							<td className="table-heading">Question</td>
							<td className="table-heading">Type</td>
						</tr>
						{questionsList}
					</tbody>
				</table>
			);
		return (
			<div className="wizard slide-in-right">
				<h1>{this.props.saveSurveyToState.surveyName}</h1>
				{showTable}

				<Link to="/create-survey/step3">
					<button className="login-button">Add Question</button>
				</Link>
				<Link to="/create-survey/link-generator">
					<button className="next-button">Done</button>
				</Link>
			</div>
		);
	}
}
export default connect((state) => state, Actions)(StepTwo);
