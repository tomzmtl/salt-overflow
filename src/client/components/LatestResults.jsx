import React, { PropTypes } from 'react';
import ResultRow from './ResultRow';


const renderResults = games => games.slice(0, 8).map((game, i) => (
  <ResultRow {...game} winner={game.score[0] > game.score[1] ? 0 : 1} key={i} />
));


const LatestResults = props => (
  <section className="block component__LatestResults">
    <header>
      <h1>Latest Results</h1>
    </header>
    <div className="content">
      <ul>
        {renderResults(props.games)}
      </ul>
    </div>
  </section>
);

LatestResults.propTypes = {
  games: PropTypes.array.isRequired,
};

export default LatestResults;
