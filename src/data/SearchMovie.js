import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

const SearchMovie = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=b9590de348b1de72934da4fdd68b6f97&language=fr-FR&query=${query}`;
  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data.results));
  }, [query]);

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div
      className="searchMovie"
      style={{ backgroundImage: 'url("../../img/banner/s_slider_bg.jpg")' }}
    >
      <div className="input-container">
        <div className="div-margin">
          <div className="footer-search">
            <form action="/#">
              <input
                className="input"
                placeholder="Recherche film, acteur"
                onChange={onSearch}
              ></input>
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {query ? (
        <ul className="row tr-movie-active">
          {data.map((m) => (
            <Movie movie={m} key={m.id} />
          ))}
        </ul>
      ) : (
        <div className="placeholder-container">
          <h4>Rien à afficher, veuillez entrer un mot clé</h4>
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
