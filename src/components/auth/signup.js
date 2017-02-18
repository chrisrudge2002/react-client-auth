import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignUp extends Component {
	handleFormSubmit({ email, password, confirm }) {
		console.log(email, password, confirm);
	}
	render() {
		const { handleSubmit, fields: { email, password, confirm }} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control"/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control"/>
				</fieldset>
				<fieldset className="form-group">
					<label>Confirm Password:</label>
					<input {...confirm} className="form-control"/>
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign up</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'confirm']
})(SignUp);
