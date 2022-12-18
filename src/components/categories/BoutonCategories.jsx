import React, { useEffect } from "react";
// import "magnific-popup";
// import $ from "jquery";
import GENRES from "../../data/genre.json";

const BoutonCategories = ({ selected, setSelected }) => {
  // useEffect(() => {
  //   $(".popup-video").magnificPopup({
  //     type: "iframe",
  //   });
  // }, []);
  console.log({ selected });
  return (
    <div
      className="row justify-content-center bande-area bande-bg pt-3"
      style={{ backgroundImage: 'url("../../img/bg/newsletter_bg.jpg")' }}
    >
      <div className="col-lg-8">
        <div className="tr-movie-menu-active text-center mt-45">
          {GENRES.map((g) => {
            return (
              <button
                className={`header-btnCat btn ${
                  selected?.includes(g.id) ? "selected-btnCat" : ""
                } `}
                data-filter=".cat-one"
                onClick={() =>
                  selected?.includes(g.id)
                    ? setSelected(selected.filter((e) => e != g.id))
                    : setSelected([...selected, g.id])
                }
              >
                {g.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoutonCategories;
