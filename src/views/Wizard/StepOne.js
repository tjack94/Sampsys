import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import * as Actions from '../../Redux/actions'
import axios from 'axios'

class StepOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			surveyName: ''
		};
	}
	handleChange(string) {
		this.setState({ surveyName: string });
    }
    createSurvey(){
        const newSurvey= {
            name: this.state.surveyName
        }
        axios.post('/api/create-survey', newSurvey).then()
    }
	render() {
		return (
			<div>
				<h3> Survey Name: </h3>
				<input type="text" value={this.state.surveyName} onChange={(e) => this.handleChange(e.target.value)}/>
                <Link to= '/create-survey/step2'><button onClick = {()=> this.createSurvey()} >Next</button> </Link>
			</div>
		);
	}
}
export default connect(state=> state, Actions)(StepOne);
