import React, { PropTypes } from 'react';
import ResultRow from './ResultRow';


const renderResults = results => results.map((result, i) => (
  <ResultRow {...result} key={i} />
));


const LatestResults = props => (
  <section className="block component__LatestResults">
    <header>
      <h1>Latest Results</h1>
    </header>
    <div className="content">
      <ul>
        {renderResults(props.results)}
      </ul>
    </div>
  </section>
);

LatestResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default LatestResults;
