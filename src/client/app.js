/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

import App from './components/App';

import '../scss/app.scss';

es6Promise.polyfill();

const render = (data) => {
  ReactDOM.render(
    <App players={data[0]} games={data[1]} />,
    document.getElementById('root')
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const calls = [
    fetch('/api/v1/players').then(r => r.json()),
    fetch('/api/v1/games').then(r => r.json()),
  ];

  Promise.all(calls).then(render);
});
