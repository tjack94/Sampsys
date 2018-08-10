import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MultipleChoice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answers: [ '' ]
		};
	}
	handleQuestionChange(string) {
		this.setState({ question: string });
	}
	handleAnswerChange(string, index) {
		var answersEdited = this.state.answers;
		answersEdited[index] = string;
		this.setState({ answers: answersEdited });
	}
	deleteAnswer(index) {
		var answersEdited = this.state.answers;
		answersEdited.splice(index, 1);

		this.setState({ answers: answersEdited });
	}
	addAnswer() {
		var answersEdited = this.state.answers;
		answersEdited.push('');

		this.setState({ answers: answersEdited });
	}
	saveQuestionToDb() {
		const newQuestion = {
			questionType: this.props.questionInfo.questionType,
			question: this.state.question,
			possibleResponses: this.state.answers
		};
		axios.post(`/api/add-question/multiple-choice`, newQuestion).then(()=>{
			this.props.history.push('/create-survey/step2')
		});
	}
	render() {
		const answersList = this.state.answers.map((answer, index) => {
			return (
				<div key={index}>
					<input
						type="text"
						value={this.state.answers[index]}
						onChange={(e) => this.handleAnswerChange(e.target.value, index)}
					/>
					<button onClick={() => this.deleteAnswer(index)}> X</button>
				</div>
			);
		});
		return (
			<div>
				<input
					type="text"
					placeholder="Type Your Question Here"
					value={this.state.question}
					onChange={(e) => this.handleQuestionChange(e.target.value)}
				/>
				<div>
					<h3>Add Your Answers Here</h3>
					{answersList}
					<button onClick={() => this.addAnswer()}>Add Response</button>
		
						<button onClick={() => this.saveQuestionToDb()}>Done</button>
					
				</div>
			</div>
		);
	}
}
export default connect((state) => state)(MultipleChoice);
