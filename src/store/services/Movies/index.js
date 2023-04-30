import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL, TOKEN } from "../../../constants";

export const MoviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      headers.set("Authorization", `Bearer ${TOKEN}`);
    },
  }),
  endpoints: builder => ({
    getMovies: builder.query({
      transformResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.movies;
      },
      query: () => ``,
    }),
    getMoviesBy: builder.query({
      query: q => (q ? `?q=${q}` : ""),
      transformResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.movies;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetMoviesByQuery } = MoviesApi;
