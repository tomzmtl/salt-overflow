import React, { PropTypes } from 'react';


const CharacterIcon = ({ code }) => {
  if (code === null) {
    return null;
  }

  const imgProps = {
    className: `component__CharacterIcon ${code}`,
    src: `public/images/characters/small/${code}.png`,
  };

  return (
    <img {...imgProps} />
  );
};


CharacterIcon.propTypes = {
  code: PropTypes.string,
};


export default CharacterIcon;
