import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import './login.css';
import SampsysLogo from './SampsysLogo.png'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	componentWillMount(){
		axios.get('/api/user-login-check').then(response =>{
			if(response.data === 'no'){
			}else{
				this.props.history.push('/dashboard')
			}
		})
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
			this.props.getUser(results.data[0]);
			this.props.history.push('./dashboard');
		});
	}
	render() {
		return (
			<div className="login">
				<div className="login-container">
					<img src={SampsysLogo} alt="Logo" className='logo'/>
					<input
						className="login-field"
						type="text"
						placeholder="Username"
						value={this.state.username}
						onChange={(e) => this.handleChange(e, 'username')}
					/>
					<input
						className="login-field"
						type="password"
						placeholder="Password"
						value={this.state.password}
						onChange={(e) => this.handleChange(e, 'password')}
					/>
					<div>
						<button className="login-button" onClick={() => this.login()}>
							Login
						</button>
						<Link to="/register">
							<button className="login-button">Sign up</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default connect((state) => state, Actions)(Login);
