import React, { PropTypes } from 'react';


const Option = ({ label, value, disabled }) => {
  const prps = {
    value: value || '',
    disabled: disabled || false,
  };

  return (
    <option {...prps}>{label}</option>
  );
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};


export default Option;
