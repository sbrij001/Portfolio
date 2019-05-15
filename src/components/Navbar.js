import React from "react";
import { Link, withRouter } from "react-router-dom";
import navbar from '../style/navbar.css';

const Navbar = props => {
  return (
    <div>
    <ul>
      <Link to="/banner">
        <a><span className="gray">Shivani Brijmohan </span></a>
      </Link>
      <Link to="/projects">
      <a> Projects </a>
      </Link>
      <Link to="/about">
        <a> About</a>
      </Link>
    </ul>
    </div>
  );
};

export default withRouter(Navbar);
