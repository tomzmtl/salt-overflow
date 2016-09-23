/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

import App from './components/App';

import '../scss/app.scss';

es6Promise.polyfill();

document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/all')
    .then(response => response.json())
    .then((data) => {
      ReactDOM.render(
        <App {...data} />,
        document.getElementById('root')
      );
    });
});
