import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import './Navbar.css'
import SampsysLogo from '../Login/SampsysLogo.png'
import LogOut from '../../LogOut.png';


class NavBar extends Component {
	componentDidMount() {
		const location = this.props.location.pathname;
		if (
			location === '/' ||
			location === '/register' ||
			this.props.location.pathname.includes('/take-survey/') ||
            this.props.location.pathname.includes('/start-survey/') ||
            this.props.location.pathname.includes('/thankyou')
		) {
		} else {
			axios
				.get('/api/auth/me')
				.then((response) => {
					this.props.getUser(response.data[0]);
				})
				.catch((error) => this.props.history.push('/'));
		}
	}
	logOut() {
		axios.post('/api/auth/logout').then(() => {
			this.props.logUserOut();
		});
	}
	render() {
		if (
			this.props.location.pathname === '/' ||
			this.props.location.pathname === '/register' ||
			this.props.location.pathname.includes('/take-survey/') ||
            this.props.location.pathname.includes('/start-survey/') ||
            this.props.location.pathname.includes('/thankyou')
		) {
			return null;
		} else {
			return (
				<div className='navbar'>
					<div>
						<Link to="/dashboard">
							<img src={SampsysLogo} alt="logo" className='logo'/>
						</Link>
					</div>
					
					<Link to="/">
					<img src={LogOut} alt="logout" className = 'logout-button' onClick={() => this.logOut()}/>
					</Link>
					
				</div>
			);
		}
	}
}
export default connect((state) => state, Actions)(NavBar);
