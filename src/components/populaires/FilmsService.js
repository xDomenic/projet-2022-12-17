import axios from "axios";

const API_KEY = "b9590de348b1de72934da4fdd68b6f97"; // ajouter votre clé API
const URL_GET_POP = "https://api.themoviedb.org/3/movie/popular?api_key=";

const getPopMovies = async () => {
  const result = await axios.get(`${URL_GET_POP}${API_KEY}`);
  // console.log ("result:",result.data.results);
  return result?.data?.results || [];
};

export default getPopMovies;