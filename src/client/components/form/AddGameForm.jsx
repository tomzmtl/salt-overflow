import React, { PropTypes } from 'react';
import Player from '../../containers/Player';


const renderSubmitButton = (isValid) => {
  if (!isValid) {
    return <div className="btn btn-disabled">Submit</div>;
  }

  return <button className="btn btn-enabled">Submit</button>;
};


const AddGameForm = ({ players, characters, score }) => {
  const isValid = () => {
    if ([
      players[0],
      players[1],
      characters[0],
      characters[1],
      score[0],
      score[1],
    ].includes(null)) {
      return false;
    }
    return players[0].id !== players[1].id &&
          score[0] !== score[1];
  };

  return (
    <div className="component__AddGameForm block">
      <div className="fields">
        <Player index={0} />
        <Player index={1} />
      </div>
      <div className="form-actions">
        {renderSubmitButton(isValid())}
      </div>
    </div>
 );
};


AddGameForm.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  score: PropTypes.arrayOf(PropTypes.number).isRequired,
};


export default AddGameForm;
