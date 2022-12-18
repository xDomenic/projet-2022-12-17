/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import Actor from "./Actor";
// import { useParams } from "react-router-dom";

const Photos = ({ Actors }) => {
  const history = useHistory();

  return (
    <section
      className="movie-details-area"
      style={{ backgroundImage: 'url("../img/bg/movie_details_bg.jpg")' }}
    >
      <div className="py-5 team3 ">
        <div className="container"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-post-item">
              <div className="blog-post-content">
                <h2 className="title">
                  <a href="/blog-details">Acteurs</a>
                </h2>

                <div className="blog-post-thumb">
                  <a href="/blog-details">
                    <img src="img/blog/blog_thumb01.jpg" alt="" />
                  </a>
                  <div className="row justify-content-center mb-4"></div>
                  <div className="row">
                    <div className="col-lg-3 mb-4">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="textActor">
                            Acteurs ayant joué dans ce film
                          </p>
                          <ul className="actors_desc">
                            {Actors.slice(0, 6).map((actor) => {
                              console.log({ actor });
                              return (
                                <Actor
                                  actor={actor}
                                  key={actor.id}
                                  onClickActor={() => {
                                    history.push(`/actorDetails/${actor?.id}`);
                                  }}
                                />
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <ul>
                    <li>
                      <i className="far fa-user" /> par <a href="/#">MBDL</a>
                    </li>
                    <li>
                      <i className="far fa-thumbs-up" /> Best
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <a href="/#">Équipe</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="blog-sidebar">
              <div className="widget blog-widget">
                <div className="widget-title mb-30">
                  <h5 className="title">Détails</h5>
                </div>
                <div className="sidebar-cat">
                  <ul>
                    <li>
                      <a href="/#">Titre d'origine</a>{" "}
                      <span>What Dreams May Come</span>
                    </li>
                    <li>
                      <a href="/#">Statut</a> <span>Film sorti</span>
                    </li>
                    <li>
                      <a href="/#">Langue d'origine</a> <span>anglais</span>
                    </li>
                    <li>
                      <a href="/#">Budget</a> <span>$85,000,000.00</span>
                    </li>
                    <li>
                      <a href="/#">Recette</a> <span>$71,485,043.00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="widget blog-widget">
                <div className="widget-title mb-30">
                  <h5 className="title">Mots-clés</h5>
                </div>
                <div className="tag-list">
                  <ul>
                    <li>
                      <a href="/#">Paradis</a>
                    </li>
                    <li>
                      <a href="/#">Romance</a>
                    </li>
                    <li>
                      <a href="/#">La peinture</a>
                    </li>
                    <li>
                      <a href="/#">Enfer</a>
                    </li>
                    <li>
                      <a href="/#">Vie après la mort</a>
                    </li>
                    <li>
                      <a href="/#">Spiritualité</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Photos;
