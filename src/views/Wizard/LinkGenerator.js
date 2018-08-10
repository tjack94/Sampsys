import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class LinkGenerator extends Component{
    constructor(props){
        super(props)
        this.state = {
            surveyId: null
        }
    }
    componentWillMount(){
        axios.get('/api/get-surveyid').then(response =>{
            console.log(response)
            this.setState( { surveyId: response.data.survey_id } )
        }
        )
    }
    render(){
        const surveyLink = `http://localhost:3000/start-survey/${this.state.surveyId}`
        return(
            <div>
            <p>Below is a link to your survey this link may be distributed via email or posted directly on your site to allow users to take your survey.</p>
            <div>
                <a href={surveyLink}>{surveyLink}</a>
            </div>
            </div>
        )
    }
}
export default connect(state => state)(LinkGenerator)