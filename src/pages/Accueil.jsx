import React from "react";
import Gallerie from "../components/accueil/Gallerie";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BandeAccueil from "../components/accueil/BandeAccueil";
import TopListeFilms from "../components/accueil/TopListeFilms";
import Bande from "../components/accueil/Bande";
// import BoutonCategories from "../components/categories/BoutonCategories";
import { useState } from "react";
// import { useEffect } from "react";
// import { getMovieById } from "../components/accueil/FilmsService";

const Accueil = () => {
  const [selected, setSelected] = useState([]);
  // useEffect(() => {
  //   getMovieById().then((m) => {
  //     console.log("getMovie", m);
  //   });
  // }, []);

  return (
    <>
      <Navigation />
      <main>
        <Gallerie />
        <TopListeFilms selected={selected} />
        <BandeAccueil />
        <Bande />
      </main>
      <Footer />
    </>
  );
};
export default Accueil;
