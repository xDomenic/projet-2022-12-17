import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/original";

const FilmSection = ({ movies, actorName }) => {
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const popMoviesListFormated = movies.map((e) => {
      return {
        id: e.id,
        genre_ids: e.genre_ids,
        image: e.poster_path
          ? `https://image.tmdb.org/t/p/original/${e.poster_path}`
          : "https://films.lynetp.com/wp-content/uploads/2022/12/not-found-215-320.jpg",
        title: e.title,
        date: e.release_date,
        quality: e.popularity,
        duration: e.vote_count,
        ratings: e.vote_average,
      };
    });
    setItems(popMoviesListFormated);
  }, [movies]);

  return (
    <section
      className="top-rated-movie tr-movie-bg"
      style={{ backgroundImage: 'url("../../img/bg/tr_movies_bg.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">{actorName}</span>
              <h2 className="title">Autres Films </h2>
            </div>
          </div>
        </div>
        <div className="row tr-movie-active">
          {" "}
          {items.map((elem) => {
            const { id, image, title, date, quality, duration, ratings } = elem;

            return (
              <div
                onClick={() => {
                  history.push(`/film/${id}`);
                }}
                className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
                key={id}
              >
                <div className="movie-item mb-60">
                  <div className="movie-poster">
                    <Link to={`/film/${id}`}>
                      <img src={image} alt="" />
                    </Link>
                  </div>
                  <div className="movie-content">
                    <div className="top">
                      <h5 className="title">
                        <Link to={`/film/${id}`}>{title}</Link>
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
export default FilmSection;
