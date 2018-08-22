import React, {Component} from 'react'
import axios from 'axios';

class MailForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            to: '',
            subject: '',
            message: ''
        }
    }
    handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
    }
    sendEmail(){
        const email = {
            to: this.state.to,
            subject: this.state.subject,
            message: this.state.message
        }
        axios.post('/api/distribute-survey', email).then(()=>{
            this.props.showHideMailForm()
        })
    }
    render(){
        return(
            <div className='wizard-inputs-container' id='mail-form'>
            <b>To:</b>
            
            <input id='mail-inputs' className='sign-up-email' type="text" value={this.state.to} onChange={(e)=> this.handleChange(e, 'to') } />
           
           <b>Subject:</b>
           
           <input className='sign-up-email' id='mail-inputs' type="text" value={this.state.subject} onChange={(e)=> this.handleChange(e, 'subject') }/>
          
           <b>Message:</b>
           
           <textarea className='open-ended-response' id='mail-inputs' value={this.state.message} onChange={(e)=> this.handleChange(e, 'message') }></textarea>
          
           <button onClick= {()=> this.sendEmail()} className='next-button' id='send-button'>Send</button>
            </div>
        )
    }
}
export default MailForm