import React from "react";
import $ from "jquery";
import "magnific-popup";
import Axios from "axios";
import Navigation from "../Navigation";

const imgPath = "https://image.tmdb.org/t/p/original";

const FilmsDetails = ({ MovieData }) => {
  console.log("tessst", MovieData);

  return (
    <section
      className="movie-details-area"
      style={{
        backgroundImage: `url("${imgPath}${MovieData?.backdrop_path}")`
          ? `url("${imgPath}${MovieData?.backdrop_path}")`
          : URL(
              "https://films.lynetp.com/wp-content/uploads/2022/12/not-found-1920-1080.jpg"
            ),
      }}
    >
      <div className="container">
        <div className="row align-items-center position-relative ml-5">
          <div className="col-xl-4 col-lg-8">
            <div className="movie-details-img">
              <img src="${imgPath}${MovieData?.poster_path}" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 ml-0 bg-overview pb-4 pt-4 mt-0">
            <div className="movie-details-content">
              <h5>MBDL vous souhaite Bon cinéma</h5>
              <h2>{MovieData?.title}</h2>
              <div className="banner-meta ">
                <ul>
                  {MovieData?.genres.map((g) => {
                    return (
                      <li
                        key={g.id}
                        className="type"
                        onClick={() =>
                          history.push("/categories", { id: g.id })
                        }
                      >
                        {g.name}
                      </li>
                    );
                  })}

                  <li className="release-time">
                    <span>
                      <i className="far fa-calendar-alt" />{" "}
                      {MovieData?.release_date}
                    </span>
                    <span>
                      <i className="far fa-clock" /> {MovieData?.runtime}{" "}
                      minutes
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-shadow bg-overview ">{MovieData?.overview}</p>
              <div className="movie-details-prime mt-3 ">
                <ul>
                  <li className="streaming mt-3 pt-0">
                    <h6>MBDL</h6>
                    <span>Chaînes de diffusion en continu</span>
                  </li>
                  <li className="watch">
                    <iframe
                      allowFullScreen
                      src={`https://www.themoviedb.org/video/play?key=${MovieData?.trailers[0]?.key}`}
                      width="350px"
                      height="150px"
                    ></iframe>

                    {/* <a
                      target=""
                      href={`https://www.themoviedb.org/video/play?key=${MovieData?.trailers[0]?.key}`}
                      className="btn popup-video" rel="noreferrer"
                    >
                      <i className="fas fa-play" /> Voir Maintenant
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FilmsDetails;
