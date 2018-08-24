import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import QuestionSwitch from './QuestionSwitch'

class SimpleQuestions extends Component{
    constructor(props){
        super(props)
        this.state= {
            question: ''
        }
    }
    handleQuestionChange(string) {
		this.setState({ question: string });
    }
    saveQuestion(){
        const newQuestion = {
            question: this.state.question,
            questionType: this.props.questionInfo.questionType,
        }
        axios.post('/api/add-question/simple-question', newQuestion).then(()=>{
            this.props.history.push('/create-survey/step2')
        })

    }
    render(){
        return(
            <div className ='wizard-inputs-container'>
                <input className='wizard-input' placeholder = "Type Your Question Here" type="text" value={this.state.question} onChange={e => this.handleQuestionChange(e.target.value)} />
                <QuestionSwitch questionType={this.props.questionInfo.questionType}/>
                <button className ='next-button' onClick= {()=> this.saveQuestion()}>Done</button>
            </div>
        )
    }
}
export default connect(state => state)(SimpleQuestions)