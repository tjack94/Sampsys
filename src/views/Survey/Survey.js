import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Likert from './QuestionTypes/Likert'
import MultipleChoice from './QuestionTypes/MultipleChoice'
import Open from './QuestionTypes/Open'
import Rating from './QuestionTypes/Rating'
import TrueFalse from './QuestionTypes/TrueFalse'
import YesNo from './QuestionTypes/YesNo'




class Survey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			responses: [],
         // consumer_id: '',
         
		};
	}
	componentWillMount() {

      const promises = []; 

      promises.push(axios.get(`/api/get-survey-questions/${this.props.match.params.surveyid}`).then(({data}) => data))
      promises.push(axios.get('/api/get-consumerid').then(({data}) => data));

      return Promise.all(promises)
         .then(([ questions, { consumer_id } ]) => {
            const responses = questions.map(({ question_id }) => ({ questionId: question_id, response: '', consumerId: consumer_id  }))
            
            this.setState({ responses, questions })
         })
         .catch(console.error)
   }
   
	handleChange= (id, string) => {
      const responses = this.state.responses.map(obj => obj.questionId === id ? { ...obj, response: string } : obj)
      this.setState( { responses } )
	}
	
	render() {
      const { questions, responses } = this.state;
      if (questions.length < 1 || responses.length < 1) return <div>loading...</div>;
      
      console.log(responses[0].response || 'not yet set');
      console.log(responses[1].response || 'not yet set');
      
      const surveyQuestions = this.state.questions.map((question)=> {
         switch(question.question_type){
            case 'open':
            return <Open currentQuestion= {question} handleChange={this.handleChange.bind(this)}/> 
            
            break;
            
            case 'multiple_choice':
            return <MultipleChoice currentQuestion= {question} handleChange={this.handleChange.bind(this)} />

            break;

            case "yes_no":
            return <YesNo currentQuestion= {question} handleChange= {()=> this.handleChange()}/>
            
            break;

            case 'true_false':
            return <TrueFalse currentQuestion= {question} handleChange= {()=> this.handleChange()}/>
            
            break;

            case 'rating':
            return <Rating currentQuestion= {question} handleChange= {()=> this.handleChange()}/>

            break;

            case "likert":
            return <Likert currentQuestion= {question} handleChange= {()=> this.handleChange()}/>
         }
      })
		return (
			<div>
				<div>
					{surveyQuestions}
				</div>
				<button>submit</button>
			</div>
		);
	}
	QuestionTypes() {
		switch (this.state.currentQuestion.question_type) {
			case 'open':
				return <textarea onChange={(e) => this.handleChange(e.target.value)} />;
				break;
			case 'multiple_choice':
				return this.state.currentQuestion.possible_responses.map((response, index) => {
					return (
						<div key={index} >
                     {response}
							<input
								type="radio"
								name={this.state.currentQuestion.questionid+"response"}
								value={response}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
               );
               
				});
				break;
			case 'yes_no':
				return (
					<div>
						<div>
							Yes<input
								type="radio"
								name="question_response"
								value={'yes'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
						<div>
							No<input
								type="radio"
								name="question_response"
								value={'no'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
					</div>
				);
				break;
			case 'true_false':
				return (
					<div>
						<div>
							True<input
								type="radio"
								name="question_response"
								value={'true'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
						<div>
							False<input
								type="radio"
								name={"question_response"}
								value={'false'}
								onChange={(e) => this.handleChange(e.target.value)}
							/>
						</div>
					</div>
				);
				break;
			case 'rating':
				return (
					<table name={this.state.currentQuestion.questionid+"rating"}>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
						</tr>
						<tr>
							<td>
								<input
									type="radio"
									name="question_response"
									value={1}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={2}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={3}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={4}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value={5}
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
						</tr>
					</table>
				);
				break;
			case 'likert':
				return (
					<table name={this.state.currentQuestion.questionid +"likert"}>
						<tr>
							<td>Strongly Disagree</td>
							<td>Disagree</td>
							<td>Neutral</td>
							<td>Agree</td>
							<td>Strongly Agree</td>
						</tr>
						<tr>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Strongly Disagree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Disagree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Neutral"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Agree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
							<td>
								<input
									type="radio"
									name="question_response"
									value="Strongly Agree"
									onChange={(e) => this.handleChange(e.target.value)}
								/>
							</td>
						</tr>
					</table>
				);
		}
	}
}
export default connect((state) => state, Actions)(Survey);
