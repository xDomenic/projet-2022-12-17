import React, { useState, useEffect } from "react";
import "magnific-popup";
import axios from "axios";
import Movie from "./Movie";

const imgPath = "https://image.tmdb.org/t/p/original";
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
        <div className="row movie-item-row">
          <ul className="row tr-movie-active">
            {data.map((m) => (
              <div className="custom-col-">
                <div className="movie-item movie-item-two">
                  <div className="movie-poster">
                    <img
                      src={
                        m.poster_path
                          ? "https://image.tmdb.org/t/p/original" +
                            m.poster_path
                          : "https://films.lynetp.com/wp-content/uploads/2022/12/not-found-215-320.jpg"
                      }
                      alt="image du film"
                    />
                    <ul className="overlay-btn">
                      <li>
                        <a href={`/film/${m?.id}`} className="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="movie-content">
                    <h5 className="title">
                      <a href="/movie-details">{m.title}</a>
                    </h5>
                    <span className="rel">{m.name}</span>
                    <div className="movie-content-bottom">
                      <ul>
                        <li>
                          <span className="like">
                            <i className="fas fa-thumbs-up" /> {m.vote_average}{" "}
                            / 10 &nbsp;
                            <em>nombre de votes : {m.vote_count}</em>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className="placeholder-container">
          <h4>Rien à afficher, veuillez entrer un mot clé</h4>
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
