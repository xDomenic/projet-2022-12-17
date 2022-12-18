import $ from "jquery";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActorDetails from "./components/films/ActorDetail";
import Accueil from "./pages/Accueil";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Film from "./pages/Film";
import NotFound from "./pages/NotFound";
import Recherche from "./pages/Recherche";

function App() {
  useEffect(() => {
    function preloader() {
      $("#preloader").delay(0).fadeOut();
    }
    $(window).on("load", function () {
      preloader();
    });
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Accueil />
          </Route>
          <Route path="/Film/:idMovie">
            <Film />
          </Route>
          <Route path="/actorDetails/:idActor">
            <ActorDetails />
          </Route>
          <Route exact={true} path="/Categories">
            <Categories />
          </Route>
          <Route exact={true} path="/contact">
            <Contact />
          </Route>
          <Route exact={true} path="/Recherche">
            <Recherche />
          </Route>
          <Route exact={true} path="/NotFound">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
