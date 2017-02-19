import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			// Show a link to sign out
			return (
				<li className="nav-item">
					<Link className="nav-link" to="/signout">Sign Out</Link>
				</li>
			);
		} else {
			// Show links to sign in and sign up
			return [
				<li className="nav-item" key={1}>
					<Link className="nav-link" to="/signin">Sign In</Link>
				</li>,
				<li className="nav-item" key={2}>
					<Link className="nav-link" to="/signup">Sign Up</Link>
				</li>
			];
		}
	}
	render() {
		return (
			<nav className="navbar navbar-light">
				<Link to="/" className="navbar-brand">Redux Auth</Link>
				<ul className="nav navbar-nav">
					{this.renderLinks()}
				</ul>
			</nav>
		);
	}
}

function mapPropsToState(state) {
	return { authenticated: state.auth.authenticated };
}

export default connect(mapPropsToState)(Header);
