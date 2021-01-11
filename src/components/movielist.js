import React from 'react';
import { array } from 'prop-types';

import Movie from './movie';

const MovieList = props => {
 
  return (
    <ul className="row">
      {
        // Created .map function here
        props.movies.map(movie => (
          <Movie
          key={movie.title}
          // Passed correct props below
          title={movie.title}
          release_date={movie.release_date}
          episode_id={movie.episode_id}
          />
        ))
      }
    </ul>
  )
}


MovieList.propTypes = {
  movies: array
}



export default MovieList