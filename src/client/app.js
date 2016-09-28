/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import 'isomorphic-fetch';
import reducer from './reducers/app';
import initialStore from './store';

import App from './containers/App';
import { fetchDashboardData } from './actions/actions';

import '../scss/app.scss';


es6Promise.polyfill();

const store = createStore(
  reducer, initialStore, applyMiddleware(thunkMiddleware)
);

document.addEventListener('DOMContentLoaded', () => {
  store.dispatch(fetchDashboardData()).then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
});
