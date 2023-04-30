import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGetMoviesByQuery } from "../../store/services/Movies";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import classes from "./MoviePage.module.scss";
import Rating from "../../components/Rating";
const MoviePage = () => {
  let params = useParams();
  const { data: movies, isSuccess, isLoading } = useGetMoviesByQuery();

  const movie = useMemo(() => {
    if (isSuccess) {
      return movies.find(m => m.id === params.id);
    }
    return {};
  }, [isSuccess, movies, params.id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <main className={classes.container}>
        <img src={movie.poster} alt="Poster" />
        <div className={classes.details}>
          <div className={classes.titleContainer}>
            <h2>{`${movie.title} (${movie.imdb_rating})`}</h2>
            <Rating rating={movie.imdb_rating} />
          </div>
          <p>{`${new Date(movie.released_on).getFullYear()} | ${
            movie.length
          } | ${
            Array.isArray(movie.director)
              ? movie.director.join(", ")
              : movie.director
          }`}</p>
          <p className={classes.cast}>{`Cast: ${movie.cast.join(", ")}`}</p>
          <p className={classes.cast}>{movie.overview}</p>
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
