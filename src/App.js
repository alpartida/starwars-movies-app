import React, { useState } from 'react';

import CharacterList from './components/characterlist';
import { characterData } from './data'


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
