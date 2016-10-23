import React from 'react';
import Dashboard from '../../containers/Dashboard';
import Header from './Header';
import Footer from './Footer';


export default ({ content }) => (
  <div>
    <Header />
    <div className="app-content">
      {content || <Dashboard />}
    </div>
    <Footer />
  </div>
);
