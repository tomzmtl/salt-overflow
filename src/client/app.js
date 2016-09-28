/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import 'isomorphic-fetch';
import reducer from './reducers/app';
import initialStore from './store';
import { fetchDashboardData } from './actions/actions';

import App from './containers/App';
import AddGameForm from './containers/AddGameForm';

import '../scss/app.scss';


es6Promise.polyfill();

const store = createStore(
  reducer, initialStore, applyMiddleware(thunkMiddleware)
);

document.addEventListener('DOMContentLoaded', () => {
  store.dispatch(fetchDashboardData()).then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App} />
          <Route path="add" component={AddGameForm} />
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  });
});
