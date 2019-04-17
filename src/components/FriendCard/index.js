import React from "react";
import "./style.css";

const FriendCard = props => (

    <div className="card">
      <div className="img-container">
        <img src={props.image} id={props.id}
        onClick={() => props.Clicked(props.id)} className = "score" />
      </div>
    </div>
  
);

export default FriendCard;
