import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Rating extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionType: '',
			question: ''
		};
	}
	changeQuestionType(type) {
		this.setState({ questionType: type });
	}
	handleQuestionChange(string) {
		this.setState({ question: string });
    }
    saveQuestion(){
        const newQuestion = {
            question: this.state.question,
            questionType: this.state.questionType,
        }
        axios.post('/api/add-question/simple-question').then(()=>{
            this.props.history.push('/create-survey/step2')
        })

    }
	render() {
		const inputBox =
			this.state.questionType === '' ? null : (
				<input
					type="text"
					placeholder="Type Your Question Here"
					value={this.state.question}
					onChange={(e) => this.handleQuestionChange(e.target.value)}
				/>
			);
		return (
			<div>
				<h2>Select Rating Type:</h2>
                {inputBox}
				<div onClick={() => this.changeQuestionType('likert')}>
					Strongly Disagree Disagree Neutral Agree Strongly Agree
				</div>
				<div onClick={() => this.changeQuestionType('rating')}>1 3 4 4 5</div>
                <button onClick= {()=> this.saveQuestion()}>Done</button>
			</div>
		);
	}
}
export default connect((state) => state)(Rating);
