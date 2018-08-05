import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import * as Actions from '../../Redux/actions'

class StepTwo extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        axios.get('/api/get-survey-info').then(response => {
            this.props.getSurveyName(response.data[0])
        })
    }
    render(){
        return(
            <div>
                <h1>{this.props.saveSurveyToState.surveyName}</h1>
                
            </div>
        )
    }
}
export default connect(state => state, Actions)(StepTwo)