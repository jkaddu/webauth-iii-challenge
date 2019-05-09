import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';

function App() {
	return (
		<div className="App">
			<Navbar>
				<NavbarBrand>Top Nine</NavbarBrand>
				<Nav>
					<NavItem>
						<NavLink href="/">Login</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/home">Home</NavLink>
					</NavItem>
				</Nav>
			</Navbar>

			<Route exact path="/" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/home" component={Users} />
		</div>
	);
}

export default App;
