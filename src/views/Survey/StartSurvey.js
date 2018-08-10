import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import * as Actions from '../../Redux/actions'

class StartSurvey extends Component{
    constructor(props){
        super(props)
            this.state = {
                survey: {}
            }
        }
      componentWillMount(){
          axios.get(`/api/start-survey/${this.props.match.params.surveyid}`).then(response => {
              this.setState( { survey: response.data[0] } )
          })
          axios.get(`/api/get-survey-questions/${this.props.match.params.surveyid}`).then(response => {
            console.log(response)  
            const questionIds = []

              response.data.map(question => questionIds.push(question.question_id))
            this.props.getSurveyQuestions(questionIds)
          })
      }  
    beginSurvey(){
        axios.post('/api/create-consumerid').then(()=>{
            this.props.history.push(`/take-survey/${this.state.survey.survey_id}/${this.props.surveyQuestions.questions[0]}`)
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.survey.survey_name}</h1>
            <button onClick={()=> this.beginSurvey()}>Start</button>
            </div>
        )
    }
}
export default connect(state=> state, Actions)(StartSurvey)