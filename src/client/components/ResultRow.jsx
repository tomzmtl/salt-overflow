import React, { PropTypes } from 'react';


const ResultRow = ({ players, score, characters, winner }) => {
  const p = players.map(({ name }, index) => (
    <div className={`player p${index + 1} ${index === winner ? 'winner' : 'loser'}`} key={index}>
      <div className="name">{name}</div>
      <div className="icon">
        <img src={`public/images/characters/small/${characters[index].code}.png`} />
      </div>
      <div className="score">{score[index]}</div>
    </div>
  ));

  return (<li>{p}</li>);
};


ResultRow.propTypes = {
  players: PropTypes.array.isRequired,
  characters: PropTypes.array.isRequired,
  score: PropTypes.array.isRequired,
  winner: PropTypes.number.isRequired,
};

export default ResultRow;
