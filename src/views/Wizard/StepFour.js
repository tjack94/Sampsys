import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import MultipleChoice from './QuestionTypes/MultipleChoice'
import SimpleQuestions from './QuestionTypes/SimpleQuestions'
import Rating from './QuestionTypes/Rating'

class StepFour extends Component{
    render(){
        const simpleQuestionTypes = ["open", "true_false", "yes_no", 'likert', 'rating']
        const displayComponent = () => {
            if(this.props.questionInfo.questionType === "multiple_choice"){
                return (<Route component = {MultipleChoice}/> )
            }
            else if(simpleQuestionTypes.includes(this.props.questionInfo.questionType)){
                return ( <Route component = {SimpleQuestions}/> )
            }else{
                this.props.history.push('/create-survey/step3')
            }
        }
        return(
            <div className='wizard slide-in-right'>
            {displayComponent()}
        
            </div>
        )
    }
}
export default connect(state => state)(StepFour)