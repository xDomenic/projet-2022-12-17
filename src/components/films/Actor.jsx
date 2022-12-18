import React from "react";

const Actor = (props) => {
  const { actor, onClickActor } = props;

  return (
    <div className="actor" onClick={onClickActor}>
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
            : "https://films.lynetp.com/wp-content/uploads/2022/12/not-found-215-320.jpg"
        }
        alt="profile"
      />
      <div className="actorContainer">
        <ul>
          <li className="actorName">{actor.original_name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Actor;
