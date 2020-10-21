import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../style/styles.navbar.css';

const Navbar = props => {
  return (
    <div class="navbar">
    <ul class="list">
      <Link to="/banner">
        <span className="gray">Shivani Brijmohan </span>
      </Link>
      <Link to="/projects">
         Projects
      </Link>
      <Link to="/about">
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
