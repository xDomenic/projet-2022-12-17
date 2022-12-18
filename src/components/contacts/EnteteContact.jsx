import React from "react";
export const EnteteContact = () => {
  return (
    <section
      className="breadcrumb-area breadcrumb-bg"
      style={{ backgroundImage: 'url("../img/bg/breadcrumb1_bg.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title">
                ÉQUIPE <span>MBDL</span>
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/homeone">Groupe</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    B
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EnteteContact;
