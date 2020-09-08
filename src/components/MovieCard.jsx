import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`movie/${movie._id}`}>
          <img className="movie-image" src={movie.poster} alt="movie-poster" />
          <h4 className="title movie-title">{movie.title}</h4>
      </Link>
    </div>
  );
};
