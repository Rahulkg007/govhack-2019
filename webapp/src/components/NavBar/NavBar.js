import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <header>
        <div id="logo"><Link to="/govhack-2019">Deep Fried Brains</Link></div>
        <ul id="headerButtons">
          <li className="navButton">
            <Link to="/govhack-2019">Home</Link>
          </li>
          
          <li className="navButton">
            <Link to="/demographic">Demographic</Link>
          </li>

          <li className="navButton">
            <Link to="/statistics">Statistics</Link>
          </li>

          <li className="navButton">
            <Link to="/social-media">Social Media</Link>
          </li>


        </ul>
      </header>
    );
  }
}
export default NavBar;
