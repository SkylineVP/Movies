import React from "react";
import classes from "./Movie.module.scss";
import { Link } from "react-router-dom";
const MovieItem = ({ movie }) => {
  return (
    <Link className={classes.container} to={`/movie/${movie.id}`}>
      <img height={"400px"} src={movie.poster} alt="poster" />
    </Link>
  );
};

export default MovieItem;
