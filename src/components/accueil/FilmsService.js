import axios from "axios";

const API_KEY = "b9590de348b1de72934da4fdd68b6f97"; // ajouter votre clé API
const URL_GET_POP = "https://api.themoviedb.org/3/movie/popular?api_key=";

const URL_GET_CAT = `https://api.themoviedb.org/3/discover/movie?api_key=11c5603767c58ad4b5e0b33c3d09fc60&with_genres=`;

const URL_GET_MOVIE_ID = (idMovie) =>
  `https://api.themoviedb.org/3/movie/${idMovie}?api_key=11c5603767c58ad4b5e0b33c3d09fc60&language=fr-CAN`;

const URL_GET_TRAILER_MOVIE_ID = (idMovie) =>
  `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=11c5603767c58ad4b5e0b33c3d09fc60&language=en-US`;

const URL_GET_CAST_ID = (idMovie) =>
  `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=11c5603767c58ad4b5e0b33c3d09fc60&language=fr-CAN`;

const URL_GET_MOVIE_BY_PERSON = (idActor) =>
  `https://api.themoviedb.org/3/person/${idActor}/movie_credits?api_key=11c5603767c58ad4b5e0b33c3d09fc60`;

const getPopMovies = async () => {
  const result = await axios.get(`${URL_GET_POP}${API_KEY}`);
  console.log("result:", result.data.results);
  return result?.data?.results || [];
};

export const getMoviesByCat = async (with_genres, page = 1) => {
  if (with_genres.length == 0) return [];
  const {
    data: {
      results: data = [],
      total_pages = 0,
      total_results = 0,
      page: currentPage = 1,
    },
  } = await axios.get(`${URL_GET_CAT}${with_genres.join(",")}&page=${page}`);
  return { data, total_pages, total_results, currentPage };
};
export const getMoviesBySearch = async (with_search) => {
  const result = await axios.get(`${URL_GET_CAT}${with_search.join(",")}`);
  console.log("result:", result.data.results);
  return result?.data?.results || [];
};

export const getMovieById = async (idMovie) => {
  const result = await axios.get(`${URL_GET_MOVIE_ID(idMovie)}`);
  const resultTrailers = await axios.get(
    `${URL_GET_TRAILER_MOVIE_ID(idMovie)}`
  );
  const resultCast = await axios.get(`${URL_GET_CAST_ID(idMovie)}`);
  result.data.cast = resultCast?.data?.cast;
  result.data.trailers = resultTrailers?.data?.results;

  console.log("resultMovieId:", result?.data);
  return result?.data || [];
};

export const getMoviesByPerson = async (idActor) => {
  const result = await axios.get(`${URL_GET_MOVIE_BY_PERSON(idActor)}`);
  return result?.data?.cast || [];
};

export default getPopMovies;
