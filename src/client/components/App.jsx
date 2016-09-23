import React from 'react';
import SaltyMeter from './SaltyMeter';
import LatestResults from './LatestResults';


export default ({ players, results }) => (
  <div className="app-content">
    <SaltyMeter players={players} />
    <LatestResults results={results} />
  </div>
);
