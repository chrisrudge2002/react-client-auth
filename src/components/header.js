import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						Sign in
					</li>
					<li className="nav-item">
						Sign up
					</li>
				</ul>
			</nav>
		);
	}
}
