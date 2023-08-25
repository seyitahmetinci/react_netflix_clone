import React from 'react';

import Movie from './Movie';
import classes from '../components/card-css/card-css.css';

const MovieList = (props) => {
  return (
    <ul className={classes.column}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          movieImage={movie.movieImage}
        />
      ))}
    </ul>
  );
};

export default MovieList;
