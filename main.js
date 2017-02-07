import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import rootReducer from './reducers';

import App from './containers/App'

import HomePage from './pages/HomePage.js';
import GridPage from './pages/GridPage.js';
import ChartPage from './pages/ChartPage.js';

const loggerMiddleware = createLogger();

const store = createStore(
		rootReducer,
			applyMiddleware(
					thunkMiddleware, 
					loggerMiddleware
			)
		);

ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
		      <Route path="/" component={App} >
		      	 <IndexRoute component={HomePage}/>
		      	 <Route path="/home" component={HomePage} />
		      	 <Route path="/grid" component={GridPage} />
		      	 <Route path="/chart" component={ChartPage} />
		      </Route>
		    </Router>
		</Provider>,
		document.getElementById('app')
);