import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Routes from './route' 
import NavBar from './views/NavBar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route component = {NavBar}/>
      <Routes/>
      </div>
    );
  }
}

export default App;
