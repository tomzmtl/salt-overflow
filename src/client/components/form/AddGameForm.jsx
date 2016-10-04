import React from 'react';
import Player from '../../containers/Player';


export default () => (
  <div className="component__AddGameForm block">
    <div className="fields">
      <Player index={0} />
      <Player index={1} />
    </div>
    <button className="btn">Submit</button>
  </div>
);
