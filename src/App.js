import React, { useState } from 'react';

import CharacterList from './components/characterlist';
import { characterData } from './data'


/**
 * Instructions:
 *
 * > Only change code regarding `CharacterList` by passing in the proper variables into the props (line 64)
 * > Move on to /components/characterlist.js afterwards for the next part of the problem
 * > Look at what props are required in /components/characterlist.js to get sense of what you need to pass as props
 * > Use `console.log` on 'this.state.characters' or reference /data/index.js to see what data is being used
 *
 */
const App = () => {
  const [characters, sortCharacters] = useState(characterData) ;
  // <-- DO NOT CHANGE; characters are from '/data/index.js'
  const [sortUp, setSortUp] = useState(0);



// DO NOT EDIT; BUILT ALREADY
const sortFunction = () => {
  if (sortUp === 0) {
    sortCharacters([...characters].sort((a, b) => a.name > b.name ? 1 : -1));
    setSortUp(1);
  } else if (sortUp === 1) {
    sortCharacters([...characters].sort((a, b) => a.name < b.name ? 1 : -1));
    setSortUp(2);
  } else {
    sortCharacters(characterData);
    setSortUp(0);
  }
}

  // !IMPORTANT: EDIT LINE 46 ONLY
  return (
    <div className="container">
      <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={sortFunction}
        >
          Sort!
          </button>
      </div>
      <CharacterList
        // Enter Props Here!
        characters={characters}
      />
    </div>
  );
}

export default App;
