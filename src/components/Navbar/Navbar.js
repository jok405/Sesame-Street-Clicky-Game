import React from "react";
import "./Navbar.css";

const Navbar = props => (

<div >
    <nav className="navbar fixed-top">
        <ul>
            <li className="title game">
                The Clicky Game
            </li>

            <li className="title">
                SESAME STREET
            </li>

            <li className="title score">
                Score: {props.score} | High Score: {props.highscore}
            </li>
        </ul>
    </nav>
</div>

);

export default Navbar;