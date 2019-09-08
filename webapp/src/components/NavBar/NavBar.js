import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <header>
        <div id="logo">Deep Fried Brains</div>
        <ul id="headerButtons">
          <li className="navButton">
            <Link to="">Home</Link>
          </li>
        </ul>
      </header>
    );
  }
}
export default NavBar;
