import React from "react";
const Contacts = () => {
  return (
    <section
      className="contact-area contact-bg"
      style={{ backgroundImage: 'url("img/bg/contact_bg.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="avatar-post mt-40 mb-80">
              <div className="post-avatar-img">
                <img src="img/blog/post_avatar_img-m.png" alt="img" />
              </div>
              <div className="post-avatar-content">
                <h5>Mhamed Khtib</h5>
                <p>
                  L'intégration des maquettes du projet synthèse est sous la
                  responsabilité de Mhamed .
                </p>
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
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="avatar-post mt-40 mb-80">
              <div className="post-avatar-img">
                <img src="img/blog/post_avatar_img-b.png" alt="img" />
              </div>
              <div className="post-avatar-content">
                <h5>Benjamin Bressy</h5>
                <p>
                  La conception visuelle des maquettes du projet synthèse est
                  sous la responsabilité de Benjamin .
                </p>
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
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="avatar-post mt-40 mb-80">
              <div className="post-avatar-img">
                <img src="img/blog/post_avatar_img-d.png" alt="img" />
              </div>
              <div className="post-avatar-content">
                <h5>Domenico Pasquarelli</h5>
                <p>
                  La programmation du projet synthèse est sous la responsabilité
                  de Domenico .
                </p>
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
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="avatar-post mt-40 mb-80">
              <div className="post-avatar-img">
                <img src="img/blog/post_avatar_img-l.png" alt="img" />
              </div>
              <div className="post-avatar-content">
                <h5>Lyne Chauvette</h5>
                <p>
                  L'intégration des maquettes du projet synthèse est sous la
                  responsabilité de Lyne .
                </p>
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
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-form-wrap">
              <div className="widget-title mb-50">
                <h5 className="title">Formulaire de contact</h5>
              </div>
              <div className="contact-form">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Nom *" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Adresse courriel *" />
                    </div>
                  </div>
                  <input type="text" placeholder="Suject *" />
                  <textarea
                    name="message"
                    placeholder="Écrire votre Message..."
                    defaultValue={""}
                  />
                  <button className="btn">Envoyer le Message</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="widget-title mb-50">
              <h5 className="title">Information</h5>
            </div>
            <div className="contact-info-wrap">
              <p>
                <span>Déloppement Web :</span> nous créons des expériences
                numériques immersives. Design recherché et animations
                sophistiquées qui font rayonner votre marque .
              </p>
              <div className="contact-info-list">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <p>
                      <span>Mhamed Khtib :</span> programmeur@mbdl.com
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <p>
                      <span>Benjamin Bressy :</span> programmeur@mbdl.com
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <p>
                      <span>Domenico Pasquarelli:</span> programmeur@mbdl.com
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <p>
                      <span>Lyne Chauvette :</span> programmeur@mbdl.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
