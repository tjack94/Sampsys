import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import LinkGenerator from './LinkGenerator'

class Wizard extends Component {
	render() {
		return (
			<div>
				<div>
					<h2>Create New Survey</h2>
				</div>
				<Route path = '/create-survey/step1' component ={StepOne} />
				<Route path = '/create-survey/step2' component ={StepTwo} />
				<Route path = '/create-survey/step3' component ={StepThree} />
				<Route path = '/create-survey/step4/:questiontype' component ={StepFour} />
				<Route path = '/create-survey/link-generator' component ={LinkGenerator}/>
			</div>
		);
	}
}
export default Wizard;
