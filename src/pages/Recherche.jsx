import React from "react";
import BanniereRecherche from "../components/recherche/BanniereRecherche";
import SearchMovie from "../components/SearchMovie";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Bande from "../components/accueil/Bande";

const Recherche = () => {
  return (
    <>
      <div>
        <Navigation />
        <main>
          <BanniereRecherche />
          <SearchMovie />
          <Bande />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Recherche;
