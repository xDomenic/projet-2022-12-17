import "magnific-popup";
import React, { useEffect, useState } from "react";
import { getMoviesBySearch } from "../accueil/FilmsService";

const imgPath = "https://image.tmdb.org/t/p/original";
const ListeRecherche = ({ search }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const getMoviesSearch = await getMoviesBySearch(search);

      console.log("search2", getMoviesSearch);

      const MoviesBySearchFormated = getMoviesSearch.map((e) => {
        return {
          id: e.id,
          genre_ids: e.genre_ids,
          genres_name: Genres.filter((g) => e.genre_ids.includes(g.id))
            .map((gn) => gn.name)
            .join(" - "),
          image: imgPath + e.poster_path,
          title: e.title,
          date: e.release_date,
          quality: e.popularity,
          duration: e.vote_count,
          ratings: e.vote_average,
        };
      });
      console.log("mov by cat", getMoviesSearch);
      setItems(MoviesBySearchFormated);
    };

    getData();
  }, [search]);

  return (
    <section
      className="top-rated-movie tr-movie-bg"
      style={{ backgroundImage: 'url("../../img/bg/tr_movies_bg.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-three text-center mb-70">
              <span className="sub-title">FILMS LES MIEUX NOTÉS</span>
              <h2 className="title">Top des films en ligne</h2>
            </div>
          </div>
        </div>

        <div className="row movie-item-row">
          {items.map((m) => {
            return (
              <div className="custom-col-">
                <div className="movie-item movie-item-two">
                  <div className="movie-poster">
                    <img src={m.image} alt="image du film" />
                    <ul className="overlay-btn">
                      <li></li>
                      <li>
                        <a href={`/film/${m?.id}`} className="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="movie-content">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5 className="title">
                      <a href="/movie-details">{m.title}</a>
                    </h5>
                    <span className="rel">{m.genres_name}</span>
                    <div className="movie-content-bottom">
                      <ul>
                        <li className="tag">
                          <a href="/#">HD</a>
                          <a href="/#">English</a>
                        </li>
                        <li>
                          <span className="like">
                            <i className="fas fa-thumbs-up" /> {m.ratings}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8"></div>
        </div>
        <div className="row movie-item-row">
          <div className="custom-col-"></div>

          {/* <div className="pagination-wrap  mt-60">
            <nav>
              <ul>
                <li className="active">
                  <a href="/#">1</a>
                </li>
                <li>
                  <a href="/#">2</a>
                </li>
                <li>
                  <a href="/#">3</a>
                </li>
                <li>
                  <a href="/#">4</a>
                </li>
                <li>
                  <a href="/#">Suivant</a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default ListeRecherche;
