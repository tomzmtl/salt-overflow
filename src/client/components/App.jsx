import React from 'react';
import SaltyMeter from './SaltyMeter';
import LatestResults from './LatestResults';
import { Link } from 'react-router';


export default ({ players, games }) => (
  <div className="app-content">
    <SaltyMeter players={players} />
    <LatestResults games={games} />
    <Link to="/add">Add</Link>
  </div>
);
