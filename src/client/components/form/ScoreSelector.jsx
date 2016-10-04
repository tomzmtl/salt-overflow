import React, { PropTypes } from 'react';


const ScoreSelector = ({ index, numbers, score, onUpdate }) => {
  const renderOption = (value, isActive) => {
    const optionProps = {
      key: value,
    };

    if (isActive) {
      optionProps.className = 'active';
    } else {
      optionProps.onClick = () => onUpdate(index, value);
    }

    return (
      <div {...optionProps}>
        <span>
          {value}
        </span>
      </div>
    );
  };

  return (
    <div className="component__NumberSelector">
      {numbers.map(i => renderOption(i, score === i))}
    </div>
  );
};


ScoreSelector.propTypes = {
  index: PropTypes.number,
  numbers: PropTypes.arrayOf(PropTypes.number),
  score: PropTypes.arrayOf(PropTypes.number),
  onUpdate: PropTypes.func,
};


export default ScoreSelector;
