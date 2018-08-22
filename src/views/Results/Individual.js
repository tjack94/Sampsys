import React, {Component} from 'react'
import axios from 'axios'
import ResultsMap from './ResultsMap'
import { promises } from 'fs';

class Individual extends Component{
    constructor(props){
        super(props)
        this.state = {
            responses: [],
            survey: {}
            
        }
    }
    componentWillMount(){
       const promises = []

        promises.push(axios.get(`/api/individual-response/${this.props.match.params.surveyid}/${this.props.match.params.userid}`).then(({ data })=> data))
        promises.push(axios.get('/api/get-survey-info').then( ({ data }) => data ))

        return Promise.all(promises)
        .then(([responses, survey])=>{
            this.setState( { responses, survey } )       
    })
}
    
    render(){
        return(
            this.state.responses.length < 1 ?  null : (
            <div className='main-component scale-in-top'>
            <h1>{this.state.survey.surveyName} </h1>
                <ResultsMap questions={this.state.responses}/>
            </div>
            )
        )
    }
}
export default Individual