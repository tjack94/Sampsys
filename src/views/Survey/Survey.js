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
         
         
		};
	}
	componentWillMount() {

      const promises = []; 

      promises.push(axios.get(`/api/get-survey-questions/${this.props.match.params.surveyid}`).then(({data}) => data))
      promises.push(axios.get('/api/get-consumerid').then(({data}) => data));

      return Promise.all(promises)
         .then(([ questions, { consumer_id } ]) => {
            const responses = questions.map(({ question_id }) => ({ question_id, response: '', consumer_id  }))
            
            this.setState({ responses, questions })
         })
         .catch(console.error)
   }
   
	handleChange= (id, response) => {
      const responses = this.state.responses.map(obj => obj.question_id === id ? { ...obj, response } : obj)
      this.setState( { responses } )
   }
   handleSubmit(){
      axios.post('/api/add-responses/'+ this.props.match.params.surveyid, this.state.responses)
      .then(()=> this.props.history.push(`/thankyou`))
   }
	
	render() {
      const { questions, responses } = this.state;
      if (questions.length < 1 || responses.length < 1) return <div>loading...</div>;
      
      const surveyQuestions = this.state.questions.map((question, index)=> {
         switch(question.question_type){
            case 'open':
            return (
               <div key={index} className='survey-display-question'>
                  <div>
                     <b>{question.question}</b>
                  </div>
            <Open currentQuestion= {question} handleChange={this.handleChange.bind(this)} />
            </div>
            ) 
            break;
            
            case 'multiple_choice':
            return (
               <div key={index} className='survey-display-question'>
                  <div>
                     <b>{question.question}</b>
                  </div>
            <MultipleChoice currentQuestion= {question} handleChange={this.handleChange.bind(this)} />
            </div>
            )
            break;

            case "yes_no":
            return (
               <div key={index} className='survey-display-question'>
                  <div >
                     <b>{question.question}</b>
                  </div>
            <YesNo currentQuestion= {question} handleChange={this.handleChange.bind(this)} />
            </div>
            )
            break;

            case 'true_false':
            return (
               <div key={index} className='survey-display-question'>
                  <div>
                     <b>{question.question}</b>
                  </div>
            <TrueFalse currentQuestion= {question} handleChange={this.handleChange.bind(this)} />
            </div>
            )
            break;

            case 'rating':
            return  (
               <div key={index} className='survey-display-question'>
                  <div> 
                     <b>{question.question}</b>
                  </div>
            <Rating currentQuestion= {question} handleChange={this.handleChange.bind(this)} />
            </div>
            )
            break;

            case "likert":
            return (
               <div key={index} className='survey-display-question'>
                  <div>
                     <b>{question.question}</b>
                  </div>
            <Likert currentQuestion= {question} handleChange={this.handleChange.bind(this)} />
            </div>
            )
            
         }
      })
		return (
			<div className="survey-display">
				<div>
					{surveyQuestions}
				</div>
				<button onClick= {()=>this.handleSubmit()}>submit</button>
			</div>
		);
	}
}
export default connect((state) => state, Actions)(Survey);
