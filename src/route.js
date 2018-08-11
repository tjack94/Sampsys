import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import Login from './views/Login/Login';
import Collective from './views/Results/Collective';
import Individual from './views/Results/Individual';
import Signup from './views/Signup/Signup';
import Survey from './views/Survey/Survey';
import Wizard from './views/Wizard/Wizard';
import StartSurvey from './views/Survey/StartSurvey'

export default function Routes() {
	return (
		<Switch>
			<Route path = '/dashboard' component = {Dashboard} />
			<Route path = '/results/:surveyid/:userid' component = {Individual} />
            <Route path = '/results/:surveyid' component = {Collective} />
			<Route path = '/register' component = {Signup} />
			<Route path = '/take-survey/:surveyid/' component = {Survey} />
			<Route path = '/start-survey/:surveyid' component = {StartSurvey}/>
			<Route path = '/create-survey' component = {Wizard} />
			<Route path = '/' component = {Login} />
		</Switch>
	);
}
