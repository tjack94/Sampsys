import React, {Component} from 'react'
import axios from 'axios'

class Individual extends Component{
    constructor(props){
        super(props)
        this.state = {
            responses: []
        }
    }
    componentWillMount(){
        axios.get(`/api/individual-response/${this.props.match.params.surveyid}/${this.props.match.params.userid}`)
        .then(results => {
            this.setState( { responses: results.data } )
        })
    }
    render(){
        const responseList = this.state.responses.map((response, index)=>{
            return(
                <div key = {index}>
                    <b>
                        {response.question} 
                    </b> 
                    <br/>
                     {response.response}
                </div>
            )
        })
        return(
            <div className='main-component'>
                {responseList}
            </div>
        )
    }
}
export default Individual