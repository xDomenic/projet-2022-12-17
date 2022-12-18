import React, { useState } from "react";
import { useEffect } from "react";
import getPopMovies from "./FilmsService";

const imgPath = "https://image.tmdb.org/t/p/original";

const CatListeFilms = ({ selected }) => {
  const [items, setItems] = useState([]);
  const [ogItems, setOgItems] = useState([]);

  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updateItems);
  };
  console.log({ otherSelected: selected });
  useEffect(() => {
    const getData = async () => {
      const popMoviesList = await getPopMovies();

      console.log("Pop movies completed", popMoviesList);

      const popMoviesListFormated = popMoviesList
        .filter((e) => {
          console.log({ x: e.genre_ids, y: selected });
          return true;
        })
        .map((e) => {
          return {
            id: e.id,
            genre_ids: e.genre_ids,
            image: imgPath + e.poster_path,
            title: e.title,
            date: e.release_date,
            quality: e.popularity,
            duration: e.vote_count,
            ratings: e.vote_average,
          };
        });
      setItems(popMoviesListFormated);
      setOgItems(popMoviesListFormated);
    };

    getData();
  }, []);

  useEffect(() => {
    if (selected.length) {
      setItems(
        ogItems.filter((e) => e.genre_ids.some((g) => selected.includes(g)))
      );
    } else {
      setItems(ogItems);
    }
  }, [selected]);

  return (
    <section
      className="top-rated-movie tr-movie-bg"
      style={{ backgroundImage: 'url("../../img/bg/tr_movies_bg.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">DIFFUSION EN LIGNE</span>
              <h2 className="title">Films les mieux notés </h2>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {" "}
          {items.map((elem) => {
            const { id, image, title, date, quality, duration, ratings } = elem;

            return (
              <div
                className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
                key={id}
              >
                <div className="movie-item mb-60">
                  <div className="movie-poster">
                    <a href="/movie-details">
                      <img src={image} alt="" />
                    </a>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <a href="/movie-details">{title}</a>
                      </h5>
                      <span className="date">{date}</span>
                    </div>
                    <div className="bottom">
                      <ul>
                        <li>
                          <span className="quality">{quality}</span>
                        </li>
                        <li>
                          <span className="duration">
                            <i className="far fa-clock" />
                            {duration}
                          </span>
                          <span className="rating">
                            <i className="fas fa-thumbs-up" />
                            {ratings}
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
    </section>
  );
};
export default CatListeFilms;
