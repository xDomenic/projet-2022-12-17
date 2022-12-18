import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bande from "../components/accueil/Bande";
import { getMovieById } from "../components/accueil/FilmsService";
import FilmsDetails from "../components/films/FilmsDetails";
import Photos from "../components/films/Photos";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
// import { useParams } from "react-router-dom";

const Film = () => {
  const [MovieData, setMovieData] = useState();

  const { idMovie } = useParams();
  console.log("idMovie=", idMovie);
  useEffect(() => {
    getMovieById(idMovie).then((m) => {
      setMovieData(m);
    });
  }, []);
  return (
    <>
      <Navigation />
      <main>
        <FilmsDetails MovieData={MovieData} />
        <Photos Actors={MovieData?.cast || []} />
        <Bande />
      </main>
      <Footer />
    </>
  );
};

export default Film;
