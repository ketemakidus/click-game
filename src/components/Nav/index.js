import React from "react";
import "./style.css";

const Nav = props => (
  <nav id="nav">
    <h1>
      Click on an image to earn points, but don't click on any more than once !
    </h1>

    <ul>
      <li className="clicky" />
      <li className="alignRight">
        Score - Current: {props.topScore} | TOP: {props.score}
      </li>
    </ul>
  </nav>
);

export default Nav;
