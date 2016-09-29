import React from 'react';


const renderOption = index => <div key={index}>{index}</div>;


export default ({ numbers }) => <div>{numbers.map(renderOption)}</div>;
