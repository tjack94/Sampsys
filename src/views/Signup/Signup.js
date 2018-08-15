import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'

class Signup extends Component {
	constructor(props) {
		super();
		this.state = {
			username: '',
			password: '',
			email: '',
			firstName: '',
			lastName: ''
		};
	}
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	createUser() {
		const newUser = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName
		};
		axios.post('/api/create-user', newUser).then(() => this.login());
	}
	render() {
		return (
			<div className='signup'>
				<h1>Create A New Account</h1>
				<div className='input-container'>
				First Name:
				<input className='sign-up-inputs' type="text" value={this.state.firstName} onChange={(e) => this.handleChange(e, 'firstName')} />
				
				Last Name:
				<input className='sign-up-inputs' type="text" value={this.state.lastName} onChange={(e) => this.handleChange(e, 'lastName')} />
				</div>
				<div className='input-container'>
				Username:
				<input className='sign-up-inputs' type="text" value={this.state.username} onChange={(e) => this.handleChange(e, 'username')} />
				
				Password:
				<input className='sign-up-inputs' type="password" value={this.state.password} onChange={(e) => this.handleChange(e, 'password')} />
				</div>
				<div className='input-container'>
				Email:
				<input className='sign-up-email' type="text" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} />
				</div>
				<div>
					<button className='login-button'  onClick={()=>this.createUser()}>Sign-up</button>
					<Link to="/">
						<button className='login-button' >Cancel</button>
					</Link>
				</div>
			</div>
		);
	}
	login() {
		const user = {
			username: this.state.username,
			password: this.state.password
		};

		axios.post('/api/login', user).then((results) => {
			console.log(results);
			this.props.history.push('./dashboard');
		});
	}
}

export default Signup;
