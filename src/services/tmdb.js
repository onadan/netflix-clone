// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    fetchTrending: builder.query({
      query: () =>
        `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    }),
    fetchNetflixOriginals: builder.query({
      query: () =>
        `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
    }),
    fetchTopRated: builder.query({
      query: () =>
        `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    }),
    fetchActionMovies: builder.query({
      query: () =>
        `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
    }),
    fetchComedyMovies: builder.query({
      query: () =>
        `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
    }),
    fetchHorrorMovies: builder.query({
      query: () =>
        `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
    }),
    fetchRomanceMovies: builder.query({
      query: () =>
        `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
    }),
    fetchDocumentaries: builder.query({
      query: () =>
        `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchTrendingQuery,
  useFetchNetflixOriginalsQuery,
  useFetchTopRatedQuery,
  useFetchActionMoviesQuery,
  useFetchComedyMoviesQuery,
  useFetchHorrorMoviesQuery,
  useFetchRomanceMoviesQuery,
  useFetchDocumentariesQuery,
} = tmdbApi;
