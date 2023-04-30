import React, { memo, useMemo } from "react";
import NoItemsFound from "../NoItemsFound";
import { useSelector } from "react-redux";
import { searchSelector } from "../../store/services/Movies/selectors";
import { useGetMoviesByQuery } from "../../store/services/Movies";
import Loader from "../Loader";
import MovieItem from "./components/MovieItem";

const MoviesList = () => {
  const searchValue = useSelector(searchSelector);

  const { data: movies, isLoading } = useGetMoviesByQuery(searchValue);

  const genres = useMemo(() => {
    if (!isLoading && movies?.length) {
      const set = new Set();

      movies.forEach(movie => {
        movie.genres.forEach(genre => {
          set.add(genre);
        });
      });
      return [...set];
    }
    return [];
  }, [isLoading, movies]);

  return isLoading ? (
    <Loader />
  ) : genres.length > 0 ? (
    genres.map(genre => (
      <div key={genre} className={classes.genreContainer}>
        <p className={classes.genreName}>{genre}</p>
        <div className={classes.moviesContainer}>
          {movies
            .filter(m => m.genres.includes(genre))
            .map(movie => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    ))
  ) : (
    <NoItemsFound />
  );
};

export default memo(MoviesList);
