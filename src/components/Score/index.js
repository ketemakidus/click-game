import React from 'react';
import "./style.css"

const Score = props => (
    <div className ="Gamescore">
    <h3 className ="score">Your score : {props.total}</h3>
    <h3 className ="correctIncorrect">{props.correctIncorrect}</h3>
    </div>
);

export default Score;