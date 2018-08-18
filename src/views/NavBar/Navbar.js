import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import './Navbar.css'
import SampsysLogo from '../Login/SampsysLogo.png'
import User from '../../User.png';
import UserMenuOpen from '../../UserMenuOpen.png'


class NavBar extends Component {
	constructor(props){
		super(props)
		this.state = {
			displayList: false
		}
	}
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
			axios.get('/api/auth/me')
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
	showHideMenu(){
		if(this.state.displayList === true){
			this.setState( { displayList: false } )
		}else{
			this.setState( { displayList: true } )
		}
	}
	render() {
		const menuList= this.state.displayList? (
			<div className='logout-menu'>
				<u>{this.props.userInfo.firstName + ' ' + this.props.userInfo.lastName} </u>
				<Link className= 'menu-links' to= '/account-info'>
				<p className='menu-items'>Account Info</p>
				</Link>
				<Link className= 'menu-links' to="/">
				<p onClick={()=> this.logOut()} className='menu-items'>Log Out</p>
				</Link>
			</div>
		) : null
		const imageSource = this.state.displayList? UserMenuOpen : User
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
					
					<div className='menu-container'>
					<img src={imageSource} alt="logout" className = 'logout-button' onClick={()=>this.showHideMenu()}/>
					{menuList}
					</div>
					
					
				</div>
			);
		}
	}
}
export default connect((state) => state, Actions)(NavBar);
