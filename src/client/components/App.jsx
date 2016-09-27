import React from 'react';
import SaltyMeter from './SaltyMeter';
import LatestResults from './LatestResults';


export default ({ players, games }) => (
  <div className="app-content">
    <SaltyMeter players={players} />
    <LatestResults games={games} />
  </div>
);
