import React from "react";
import EnteteContact from "../components/contacts/EnteteContact";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Bande from "../components/accueil/Bande";

const Contact = () => {
  return (
    <>
      <Navigation />
      <main>
        <EnteteContact />
        <Contacts />
        <Bande />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
