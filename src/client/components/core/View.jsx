import React from 'react';
import Dashboard from '../../containers/Dashboard';
import Header from './Header';


export default ({ content }) => (
  <div>
    <Header />
    <div className="app-content">
      {content || <Dashboard />}
    </div>
  </div>
);
