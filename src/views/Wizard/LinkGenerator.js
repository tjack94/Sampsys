import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import MailForm from './MailForm';

class LinkGenerator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			surveyId: 0,
			showMailForm: false
		};
	}
	componentWillMount() {
		axios.get('/api/get-survey-number').then((response) => {
			console.log(response);
			this.setState({ surveyId: response.data[0] });
		});
	}
	showHideMailForm() {
        if(this.state.showMailForm === false){
        	this.setState({ showMailForm: true })
        } else{
            this.setState( { showMailForm: false } )
        }
	}
	render() {
		const surveyLink = `http://www.sampsys.com/start-survey/${this.state.surveyId}`;
		const showMailForm = this.state.showMailForm ? (
			<MailForm surveyLink={surveyLink} showHideMailForm = {this.showHideMailForm.bind(this)}/>
		) : (
			<button className='login-button' onClick={() => this.showHideMailForm()}>Distribute Survey</button>
		);
		return (
			<div className="wizard slide-in-right">
				<h1>Survey Link</h1>
				<p>
					Below is a link to your survey this link may be distributed via email or posted directly on your
					site to allow users to take your survey.
				</p>
				<div className='link-container'>
					<a href={surveyLink}>{surveyLink}</a>
				</div>
				{showMailForm}
			</div>
		);
	}
}
export default connect((state) => state)(LinkGenerator);
