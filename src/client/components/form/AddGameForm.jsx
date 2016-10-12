import React, { PropTypes } from 'react';
import Player from '../../containers/Player';
import { isFormValid } from '../../../shared/helpers';


const AddGameForm = ({ players, characters, score }) => {
  const playerIds = players.map(p => (p ? p.id : null));
  const valid = isFormValid(playerIds, characters, score);

  const renderSubmitButton = () => {
    if (!valid) {
      return <div className="btn btn-disabled">Submit</div>;
    }

    return <button className="btn btn-enabled">Submit</button>;
  };

  return (
    <div className="component__AddGameForm block">
      <div className="fields">
        <Player index={0} />
        <Player index={1} />
      </div>
      <div className="form-actions">
        {renderSubmitButton()}
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
