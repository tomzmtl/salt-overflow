import React, { PropTypes } from 'react';
import Option from './Option';


const renderOptions = data => data.map((opt, i) => <Option {...opt} key={i} />);


const OptGroup = props => (
  <optgroup label={props.label}>
    {renderOptions(props.data)}
  </optgroup>
);


OptGroup.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
};


export default OptGroup;
