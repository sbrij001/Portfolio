import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../style/styles.navbar.css';

const Navbar = props => {
  return (
    <div id="navbar" class="top-nav">
      <ul class="list">
        <Link to="/banner">
          <span className="gray">Shivani Brijmohan </span>
        </Link>
        <div className="top-nav-right">
          <Link class="projects" to="/projects">
            Projects
          </Link>
          <Link class="about" to="/about">
            About
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div> {/* end .top-nav-right  */}
      </ul> {/* end .list  */}
    </div> /* end #navbar  */
  );
};


export default withRouter(Navbar);
