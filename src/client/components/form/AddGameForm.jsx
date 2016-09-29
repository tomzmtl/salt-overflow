import React from 'react';
import Player from './Player';


export default () => (
  <div>
    <div className="component__AddGameForm block">
      <Player index={0} />
      <Player index={1} />
    </div>
  </div>
);
