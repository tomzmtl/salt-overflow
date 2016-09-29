import React from 'react';
import { Link } from 'react-router';
import SaltyMeter from './SaltyMeter';
import LatestResults from './LatestResults';


export default ({ players, games }) => (
  <div>
    <SaltyMeter players={players} />
    <LatestResults games={games} />
    <Link to="/add">Add</Link>
  </div>
);
