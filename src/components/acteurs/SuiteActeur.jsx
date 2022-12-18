import React, { useEffect } from "react";
import "magnific-popup";
import $ from "jquery";

const SuiteActeur = () => {
  useEffect(() => {
    $(".popup-video").magnificPopup({
      type: "iframe",
    });
  }, []);
  return (
    <section
      className="episode-area episode-bg"
      style={{ backgroundImage: 'url("../img/bg/episode_bg.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-12">
                <div className="movie-history-wrap">
                  <h3 className="title">
                    Informations <span>personnelles</span>
                  </h3>
                  <div className="row">
                    <div className="col-4">
                      <p>Célèbre pour</p>
                      <p>Interprétation</p>
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="col-4">
                      <p>Apparitions connues</p>
                      <p>213</p>
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="col-4">
                      <p>Lieu de naissance</p>
                      <p>Chicago, Illinois, USA</p>
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="col-4">
                      <p>Genre</p>
                      <p>Homme</p>
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="col-4">
                      <p>Date de naissance</p>
                      <p>1951-07-21</p>
                      <br />
                      <br />
                      <br />
                    </div>
                    <div className="col-4">
                      <p>Date de décès</p>
                      <p>2014-08-11 (63 ans)</p>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movie-episode-wrap">
              <div className="episode-top-wrap">
                <div className="section-title">
                  <span className="sub-title">DIFFUSION EN LIGNE</span>
                  <h2 className="title">Interprétation</h2>
                </div>
                <div className="total-views-count">
                  <p>
                    2.7 million <i className="far fa-eye" />
                  </p>
                </div>
              </div>
              <div className="episode-watch-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <button
                        className="btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      ></button>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul>
                          <li>
                            <a
                              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                              className="popup-video"
                            >
                              <i className="fas fa-play" /> Jim Carrey,
                              l'Amérique démasquée incarnant Self (archive
                              footage)
                            </a>{" "}
                            <span className="duration">
                              <i className="far fa-calendar-alt" /> 2021
                            </span>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                              className="popup-video"
                            >
                              <i className="fas fa-play" /> Portraits de Stars
                              (1 épisode) incarnant Self (archive footage)
                            </a>{" "}
                            <span className="duration">
                              <i className="far fa-calendar-alt" /> 2021
                            </span>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                              className="popup-video"
                            >
                              <i className="fas fa-play" /> Le souhait de Robin
                              incarnant Himself (archive footage)
                            </a>{" "}
                            <span className="duration">
                              <i className="far fa-calendar-alt" /> 2020
                            </span>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                              className="popup-video"
                            >
                              <i className="fas fa-play" /> The Paley Center
                              Salutes Law & Order: SVU incarnant (archive
                              footage)
                            </a>{" "}
                            <span className="duration">
                              <i className="far fa-calendar-alt" /> 2020
                            </span>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                              className="popup-video"
                            >
                              <i className="fas fa-play" /> Robin Williams:
                              Voice of an Era incarnant Himself (archival
                              footage)
                            </a>{" "}
                            <span className="duration">
                              <i className="far fa-calendar-alt" /> 2019
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteActeur;
