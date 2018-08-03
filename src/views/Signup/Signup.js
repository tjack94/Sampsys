import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
			<div>
				Username:
				<input type="text" value={this.state.username} onChange={(e) => this.handleChange(e, 'username')} />
				Password:
				<input type="password" value={this.state.password} onChange={(e) => this.handleChange(e, 'password')} />
				Email:
				<input type="text" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} />
				First Name:
				<input type="text" value={this.state.firstName} onChange={(e) => this.handleChange(e, 'firstName')} />
				Last Name:
				<input type="text" value={this.state.lastName} onChange={(e) => this.handleChange(e, 'lastName')} />
				<div>
					<button onClick={()=>this.createUser()}>Sign-up</button>
					<Link to="/">
						<button>Cancel</button>
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
