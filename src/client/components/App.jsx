import React from 'react';
import SaltyMeter from './SaltyMeter';
import LatestResults from './LatestResults';


const salt = [
  {
    name: 'Petate',
    score: 75,
  },
  {
    name: 'RY',
    score: 37,
  },
  {
    name: 'ATo',
    score: 32,
  },
  {
    name: 'Neocid',
    score: 23,
  },
  {
    name: 'NAT',
    score: 22,
  },
  {
    name: 'Sendo',
    score: 11,
  },
];


const results = [
  {
    players: ['Petate', 'ATo'],
    score: [2, 1],
    characters: ['cld', 'cor'],
  },
  {
    players: ['RY', 'ATo'],
    score: [0, 2],
    characters: ['zss', 'cor'],
  },
  {
    players: ['Neocid', 'Petate'],
    score: [2, 1],
    characters: ['bow', 'lui'],
  },
  {
    players: ['NAT', 'ATo'],
    score: [1, 2],
    characters: ['bay', 'cor'],
  },
  {
    players: ['Petate', 'NAT'],
    score: [1, 2],
    characters: ['shu', 'bay'],
  },
  {
    players: ['RY', 'ATo'],
    score: [2, 1],
    characters: ['mar', 'cor'],
  },
  {
    players: ['Neocid', 'ATo'],
    score: [2, 1],
    characters: ['bow', 'cor'],
  },
  {
    players: ['NAT', 'Neocid'],
    score: [1, 2],
    characters: ['bay', 'bow'],
  },
];


export default () => {
  return (
    <div className="app-content">
      <SaltyMeter data={salt} />
      <LatestResults results={results} />
    </div>
  );
};
