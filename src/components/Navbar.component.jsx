import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../style/styles.navbar.css';

const Navbar = props => {
  return (
    <div id="navbar">
      <Link to="/banner">
        <span className="gray">Shivani Brijmohan </span>
      </Link>
    <ul class="list">
      <Link class="projects" to="/projects">
         Projects
      </Link>
      <Link class="about" to="/about">
         About
      </Link>
      <Link to="/contact">
         Contact
      </Link>
    </ul>
    </div>
  );
};

export default withRouter(Navbar);
