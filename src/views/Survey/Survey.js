import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Likert from './QuestionTypes/Likert';
import MultipleChoice from './QuestionTypes/MultipleChoice';
import Open from './QuestionTypes/Open';
import Rating from './QuestionTypes/Rating';
import TrueFalse from './QuestionTypes/TrueFalse';
import YesNo from './QuestionTypes/YesNo';
import SampsysLogo from '../Login/SampsysLogo.png';

class Survey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			responses: [],
			survey: {}
		};
	}
	componentWillMount() {
		const promises = [];

		promises.push(
			axios.get(`/api/get-survey-questions/${this.props.match.params.surveyid}`).then(({ data }) => data)
		);
		promises.push(axios.get('/api/get-consumerid').then(({ data }) => data));
		promises.push(axios.get(`/api/start-survey/${this.props.match.params.surveyid}`).then(({ data }) => data[0]));

		return Promise.all(promises)
			.then(([ questions, { consumer_id }, survey ]) => {
				const responses = questions.map(({ question_id }) => ({ question_id, response: '', consumer_id }));

				this.setState({ responses, questions, survey });
			})
			.catch(console.error);
	}

	handleChange = (id, response) => {
		const responses = this.state.responses.map((obj) => (obj.question_id === id ? { ...obj, response } : obj));
		this.setState({ responses });
	};
	handleSubmit() {
		axios
			.post('/api/add-responses/' + this.props.match.params.surveyid, this.state.responses)
			.then(() => this.props.history.push(`/thankyou`));
	}

	render() {
		const { questions, responses } = this.state;
		if (questions.length < 1 || responses.length < 1) return <div>loading...</div>;

		const surveyQuestions = this.state.questions.map((question, index) => {
			switch (question.question_type) {
				case 'open':
					return (
						<div key={index} className="survey-display-question">
							<div>
								<b>{index+1}.  {question.question}</b>
							</div>
							<Open currentQuestion={question} handleChange={this.handleChange.bind(this)} />
						</div>
					);
					break;

				case 'multiple_choice':
					return (
						<div key={index} className="survey-display-question">
							<div>
								<b>{index+1}.  {question.question}</b>
							</div>
                                          <div className='multiple-choice'>
						      <MultipleChoice currentQuestion={question} handleChange={this.handleChange.bind(this)} />
                                          </div>
                                    </div>
					);
					break;

				case 'yes_no':
					return (
						<div key={index} className="survey-display-question">
							<div>
								<b>{index+1}.  {question.question}</b>
							</div>
							<YesNo currentQuestion={question} handleChange={this.handleChange.bind(this)} />
                                    
						</div>
					);
					break;

				case 'true_false':
					return (
						<div key={index} className="survey-display-question">
							<div>
								<b>{index+1}.  {question.question}</b>
							</div>
                                          
							<TrueFalse currentQuestion={question} handleChange={this.handleChange.bind(this)} />
                                          
						</div>
					);
					break;

				case 'rating':
					return (
						<div key={index} className="survey-display-question">
							<div>
								<b>{index+1}.  {question.question}</b>
							</div>
							<Rating currentQuestion={question} handleChange={this.handleChange.bind(this)} />
						</div>
					);
					break;

				case 'likert':
					return (
						<div key={index} className="survey-display-question">
							<div>
								<b>{index+1}.  {question.question}</b>
							</div>
							<Likert currentQuestion={question} handleChange={this.handleChange.bind(this)} />
						</div>
					);
			}
		});
		return (
			<div>
				<header className="navbar">
					<img src={SampsysLogo} alt="logo" className="logo" />
				</header>
				<div className="main-component">
					<h1>{this.state.survey.survey_name}</h1>
					<div>{surveyQuestions}</div>
					<button className="next-button" onClick={() => this.handleSubmit()}>
						submit
					</button>
				</div>
			</div>
		);
	}
}
export default connect((state) => state, Actions)(Survey);
