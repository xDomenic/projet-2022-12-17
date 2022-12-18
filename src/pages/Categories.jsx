import React, { useState } from "react";
//import BanniereCateg from "../components/categories/BanniereCateg";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ToplisteFilms2 from "../components/categories/ToplisteFilms2";
import BoutonCategories from "../components/categories/BoutonCategories";
import Bande from "../components/accueil/Bande";
// import Gallerie from "../components/accueil/Gallerie";
// import BanniereRecherche from "../components/recherche/BanniereRecherche";
import BanniereCat from "../components/categories/BannierreCat";

const Categories = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Navigation />
      <main>
        <BanniereCat />
        <BoutonCategories selected={selected} setSelected={setSelected} />
        <ToplisteFilms2 selected={selected} />
        <Bande />
      </main>
      <Footer />
    </>
  );
};
export default Categories;
