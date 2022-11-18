import React from "react";

const MovieList = (props) => {
  return (
    <div className="d-flex flex-row mb-1">
      {props.movies.map((movie, index) => (
        <div key={index} className="p-3">
          <img src={movie.Poster} className='img-thumbnail' alt="movie"></img>
          <br/>
          <br/>
          <h3>#{index+1} - {movie.Title}</h3>
          <br />
          <ul>
            <li>Year: {movie.Year}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieList;