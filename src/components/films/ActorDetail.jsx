import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmSection from "../accueil/FilmSection";
import { getMoviesByPerson } from "../accueil/FilmsService";
import Navigation from "../Navigation";

import style from "./style.module.scss";

const ActorDetails = () => {
  const { idActor } = useParams();

  const [detail, setDetail] = useState({});
  const [cast, setcast] = useState([]);

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/person/${idActor}?api_key=a67b57849deb687f2cd49d7a8298b366&language=fr-FR`;
    axios.get(URL).then((res) => {
      setDetail(res.data);
    });
  }, [idActor]);

  useEffect(() => {
    getMoviesByPerson(idActor).then((castList) => {
      setcast(castList);

      console.log({ castList });
    });
  }, [idActor]);

  return (
    <React.Fragment>
      <Navigation />
      <div className={`details-container ${style.details_container}`}>
        <div
          className={`movie_card ${style.movie_card}`}
          id={`bright ${style.bright}`}
        >
          <div className={`info_section ${style.info_section}`}>
            <div className={`movie_header ${style.movie_header}`}>
              <img
                height={500}
                className={`locandina ${style.locandina}`}
                src={
                  detail.profile_path
                    ? `https://image.tmdb.org/t/p/original${detail.profile_path}`
                    : "https://films.lynetp.com/wp-content/uploads/2022/12/not-found-215-320.jpg"
                }
                alt="poster"
              />
              <h1>{detail.name}</h1>
              <h4>{detail.birthday}</h4>
              <span className={`minutes ${style.minutes}`}>
                Place of birth : {detail.place_of_birth}
              </span>
            </div>
            <div className={`movie_desc ${style.movie_desc}`}>
              <p className={`text ${style.text}`}>{detail.biography}</p>
            </div>
          </div>
          <FilmSection actorName={detail?.name} movies={cast} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ActorDetails;
