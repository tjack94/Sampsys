import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AccountInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.userInfo.username,
			password: '',
			email: this.props.userInfo.email,
			firstName: this.props.userInfo.firstName,
			lastName: this.props.userInfo.lastName,
			changePassword: false
		};
	}
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	updateInfo() {
		const updatedUser = {
			username: this.state.username,
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName
		};
		axios.patch('/api/update-user-info', updatedUser).then(() => {
			this.props.history.push('/dashboard');
		});
	}
	updatePassword() {
		const user = { password: this.state.password };
		axios.patch('api/update-password', user).then(() => {
			this.setState({ changePassword: false });
		});
	}
	displayPasswordChange() {
		this.setState({ changePassword: true });
	}
	render() {
		const changePassword = this.state.changePassword ? (
			<div>
				New Password:
				<input
					className="sign-up-inputs"
					type="password"
					value={this.state.password}
					onChange={(e) => this.handleChange(e, 'password')}
				/>
				<button onClick={() => this.updatePassword()}>Update password</button>
			</div>
		) : (
			<button onClick={() => this.displayPasswordChange()} className="login-button">
				Change Password
			</button>
		);
		return (
			<div className="main-component">
				<h1>Account Info</h1>
				<div className="input-container">
					First Name:
					<input
						className="sign-up-inputs"
						type="text"
						value={this.state.firstName}
						onChange={(e) => this.handleChange(e, 'firstName')}
					/>
					Last Name:
					<input
						className="sign-up-inputs"
						type="text"
						value={this.state.lastName}
						onChange={(e) => this.handleChange(e, 'lastName')}
					/>
				</div>
				<div className="input-container">
					Username:
					<input
						className="sign-up-inputs"
						type="text"
						value={this.state.username}
						onChange={(e) => this.handleChange(e, 'username')}
					/>
				</div>
				<div className="input-container">
					Email:
					<input
						className="sign-up-email"
						type="text"
						value={this.state.email}
						onChange={(e) => this.handleChange(e, 'email')}
					/>
				</div>
				{changePassword}
				<button onClick={() => this.updateInfo()} className="login-button">
					Update
				</button>
			</div>
		);
	}
}
export default connect((state) => state)(AccountInfo);
