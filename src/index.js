import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));
