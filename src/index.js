import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/app';
import Feature from './components/feature';
import Landing from './components/landing';
import reducers from './reducers';
import RequireAuth from './components/auth/require_auth';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import * as types from './actions/types';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

// If we have a token consider the user to be signed in
if (token) {
	store.dispatch({ type: types.AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Landing} />
				<Route path="/feature" component={RequireAuth(Feature)} />
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signout" component={SignOut} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));
