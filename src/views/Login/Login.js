import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
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
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Username"
					value={this.state.username}
					onChange={(e) => this.handleChange(e, 'username')}
				/>
				<input
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={(e) => this.handleChange(e, 'password')}
				/>
				<div>
					<button onClick= {()=> this.login()}>Login</button>
					<button>Sign up</button>
				</div>
			</div>
		);
	}
}
export default Login;
