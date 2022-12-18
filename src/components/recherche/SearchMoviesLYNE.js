import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from "react-router-dom";

const SearchMovie = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${query}`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.results);
    });
  }, [query]);

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div
      className="searchMovie"
      style={{ backgroundImage: 'url("../../img/banner/s_slider_bg.jpg")' }}
    >
      <div className="searchMovie">
        <div className="input-container">
          <input
            className="input"
            placeholder="Recherche film, serie, acteur"
            onChange={onSearch}
          ></input>
        </div>
        {query ? (
          <ul className="searchMovie-list">
            {data.map((movie) => (
              <Movie
                movie={movie}
                key={movie.id}
                onClickMovie={() =>
                  history.push("/movieDetails", { id: movie.id })
                }
              />
            ))}
          </ul>
        ) : (
          <div className="placeholder-container">
            <h4>Veuillez entrer votre recherche</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
