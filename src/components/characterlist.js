import React from 'react';
import { array } from 'prop-types';

import Character from './character.js'

const CharacterList = props => {
  
  return (
    <div className="row">
      {
        // Created  .map function here
        props.characters.map(person => (
          <Character
            key={person.name}
            // Entered the correct props here
            name={person.name}
            eye_color={person.eye_color}
            birth_year={person.birth_year}
            films={person.films}
            />
        ))
      }
    </div>
  )
}

CharacterList.propTypes = {
  characters: array
}


export default CharacterList;