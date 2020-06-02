import React, { useState } from 'react';

import CharacterList from './components/characterlist';
import { characterData } from './data'


/**
 *
 * > Only changed code regarding `CharacterList` by passing in the proper variables into the props
 * > Move on to /components/characterlist.js afterwards for the next part of the problem
 * > Look at what props are required in /components/characterlist.js to get sense of what you need to pass as props
 * > Use `console.log` on 'this.state.characters' or reference /data/index.js to see what data is being used
 *
 */
const App = () => {
  const [characters, sortCharacters] = useState(characterData) ;
  // <-- Characters are from '/data/index.js'
  const [sortUp, setSortUp] = useState(0);



// DO NOT EDIT; BUILT FUNCTION
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
        // Entered Props Here!
        characters={characters}
      />
    </div>
  );
}

export default App;
