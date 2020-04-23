import React from "react";
import Profile from "./Profile";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Profile img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.dept} />
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
