import React from 'react';
import { string, array } from 'prop-types';

import MovieList from './movielist';

const Character = props => {
  console.log(props)
  return (
    <div className="col-4 border border-primary" style={{}}>
      <h2>{props.name}</h2>
      <h4>year born: {props.birth_year}</h4>
      <h4>eye color: <span style={{ color: props.eye_color }}>{props.eye_color}</span></h4>

      <MovieList
        // Added props here!
      movies={props.films}
      />
    </div>
  )
}

Character.propTypes = {
  name: string,
  birth_year: string,
  eye_color: string,
  films: array
}

export default Character;