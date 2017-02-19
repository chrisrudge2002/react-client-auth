import axios from 'axios';
import { browserHistory } from 'react-router';

import * as types from './types';

const ROOT_URL = 'http://localhost:3000';

export function authError(error) {
	return {
		type: types.AUTH_ERROR,
		error
	};
}

export function fetchMessage() {
	return dispatch => {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({
				type: types.FETCH_MESSAGE,
				message: response.data.message
			});
		});
	};
}

export function signInUser({ email, password }) {
	return dispatch => {
		// Submit email/password to the server
		axios.post(`${ROOT_URL}/signin`, { email, password })
		.then(response => {
			// The request was good...
			userAuthenticatedInternal(dispatch, response.data.token);
		})
		.catch(() => {
			// The request was bad... show an error to the user
			dispatch(authError('Bad Login Info'));
		});
	};
}

export function signOutUser() {
	// - Remove the stored JWT token
	localStorage.removeItem('token');

	// - Update state to indicate user is authenticated
	return { type: types.UNAUTH_USER };
}

export function signUpUser({ email, password }) {
	return dispatch => {
		// Submit email/password to the server
		axios.post(`${ROOT_URL}/signup`, { email, password })
		.then(response => {
			console.log('response:', response);
			// The request was good...
			userAuthenticatedInternal(dispatch, response.data.token);
		})
		.catch(err => {
			// The request was bad... show an error to the user
			dispatch(authError(err.response.data.error));
		});
	};
}

function userAuthenticatedInternal(dispatch, token) {
	// - Update state to indicate user is authenticated
	dispatch({ type: types.AUTH_USER });
	// - Save the JWT token
	localStorage.setItem('token', token);
	// - Redirect to the protected route (/feature)
	browserHistory.push('/feature');
}
