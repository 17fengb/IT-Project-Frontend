import logo from './logo.svg';
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import './App.css';
import axios from "../src/services/backendApi.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homePage';
import EventPage from './components/eventPage';
import ContactPage from './components/contactPage';

class App extends Component {
	render() {
		return (
		<Router>
			<Switch>
				<Route exact path="/" component = {HomePage} />
				<Route exact path="/addEvent" component = {EventPage} />
				<Route exact path="/addContact" component = {ContactPage} />
			</Switch>
		</Router>
		
		);
	}
}

export default App;
