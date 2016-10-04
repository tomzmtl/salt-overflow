import React, { PropTypes } from 'react';


const Option = ({ label, value }) => {
  const prps = {
    value: value || '',
  };

  return (
    <option {...prps}>{label}</option>
  );
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};


export default Option;


/*
data: PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
})),
*/
