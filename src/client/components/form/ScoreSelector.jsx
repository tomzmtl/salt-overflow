import React from 'react';


export default ({ index, numbers, score, onUpdate }) => {
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
