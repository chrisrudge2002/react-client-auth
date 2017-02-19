import * as types from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case types.AUTH_ERROR:
			return { ...state, error: action.error };
		case types.AUTH_USER:
			return { ...state, authenticated: true, error: '' };
		case types.FETCH_MESSAGE:
			return { ...state, message: action.message };
		case types.UNAUTH_USER:
			return { ...state, authenticated: false };
		default:
			return state;
	}
}
