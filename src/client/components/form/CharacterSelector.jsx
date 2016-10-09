import React, { PropTypes } from 'react';
import OptGroup from '../core/OptGroup';
import Option from '../core/Option';


const CharacterSelector = ({ index, characters, favorites, onUpdate, selected }) => {
  if (!characters.length) {
    return <input disabled="true" placeholder="Choose character..." />;
  }

  /* Events */

  const handleChange = (e) => {
    const value = characters.find(c => c.code === e.target.value);
    onUpdate(index, value);
  };

  /* Shortcuts */

  const renderFavorites = () => {
    if (!favorites.length) {
      return null;
    }
    const favs = favorites.map(fav => ({
      id: fav.id,
      label: fav.name,
      value: fav.code,
    }));
    return <OptGroup label="Favorites" data={favs} />;
  };

  /* All */

  const renderAll = () => {
    const all = characters.map(char => ({
      label: char.name,
      value: char.code,
    }));
    if (favorites.length) {
      return <OptGroup label="All" data={all} />;
    }
    return all.map((opt, i) => <Option {...opt} key={i} />);
  };

  /* render() */

  // set select props
  const selectProps = {
    onChange: handleChange,
  };

  if (selected) {
    selectProps.value = selected;
  }

  return (
    <div className="component__CharacterSelector">
      <select {...selectProps}>
        <Option label="Choose character..." />
        {renderFavorites(favorites)}
        {renderAll()}
      </select>
    </div>
  );
};


CharacterSelector.propTypes = {
  index: PropTypes.number,
  characters: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  onUpdate: PropTypes.func,
};


export default CharacterSelector;
