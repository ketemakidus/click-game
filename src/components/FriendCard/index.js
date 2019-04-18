import React from "react";
import "./style.css";

const FriendCard = props => (

    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.Score(props.id)}/>
      </div>
    </div>
  
);

export default FriendCard;
