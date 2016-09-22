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
    winner: 0,
  },
  {
    players: ['RY', 'ATo'],
    score: [0, 2],
    characters: ['zss', 'cor'],
    winner: 1,
  },
  {
    players: ['Neocid', 'Petate'],
    score: [2, 1],
    characters: ['bow', 'lui'],
    winner: 0,
  },
  {
    players: ['NAT', 'ATo'],
    score: [1, 2],
    characters: ['bay', 'cor'],
    winner: 1,
  },
  {
    players: ['Petate', 'NAT'],
    score: [1, 2],
    characters: ['shu', 'bay'],
    winner: 1,
  },
  {
    players: ['RY', 'ATo'],
    score: [2, 1],
    characters: ['mar', 'cor'],
    winner: 0,
  },
  {
    players: ['Neocid', 'ATo'],
    score: [2, 1],
    characters: ['bow', 'cor'],
    winner: 0,
  },
  {
    players: ['NAT', 'Neocid'],
    score: [1, 2],
    characters: ['bay', 'bow'],
    winner: 1,
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
