import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <Link to="/">
                    <img className="logo-50" src="img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-menu">
                  <nav>
                    <ul className="navigation">
                      <li>
                        <a href="/">Accueil</a>
                      </li>
                      <li>
                        <a href="/Categories">Catégories</a>
                      </li>
                      <li>
                        <a href="/Recherche">Recherche</a>
                      </li>
                      <li>
                        <a href="/contact">À propos</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-quick-link-wrap">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100088602318159">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100088602318159">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100088602318159">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright © 2022. Projet synthèse groupe B{" "}
                  <a href="/#">MBDL</a> - Sources : des donnés
                  descriptions/photos/bande-annonce obtenues par API TMDB -{" "}
                  Theme de :
                  <a href="https://themeforest.net/">
                    <img height={"30px"} className="pl-1" src="img/theme.jpg" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
