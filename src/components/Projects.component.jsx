import React from "react";

import { withRouter } from "react-router-dom";

import '../style/styles.projects.css';

const Projects = props => {
  return (
    <div className="container">

      <h2 className="section-header">MY RESUME</h2>
      <div className="resume">
        <iframe src="shivani-brijmohan-fullstack.pdf" title="shivani resume"></iframe>
        </div>
        <a className="download" href="shivani-brijmohan-fullstack.pdf" download>Download PDF</a>

      <h2 className="section-header">MY PROJECTS</h2>
      <div className="project-wrapper">
        <div class="image-with-text-box">
          <a href="https://powersecure.com/" target="_blank"><img src="powersecure.png" alt="PowerSecure Home Screen"/></a>
          <div className="text-box">
            <h3 className="project-title">POWERSECURE</h3>
            <p>DESCRIPTION</p>       
            <p>BUILT WITH: Wordpress, Custom Wordpress theme, PHP, SCSS, Jquery, Javascript</p>  
          </div>
        </div>
      </div>

      <div className="project-wrapper">
        <div class="image-with-text-box">
          <div className="text-box">
          <h3 className="project-title">ILLUMINATION HAWAII</h3>
            <p> Built custom sections for a landing page guided by UX designs, Used Javascript to ensure the website scrolled to a new section after a certain period of time, implemented cross-browser testing and made sure it was responsive across all platforms</p>
            <p>BUILT WITH: HTML, SCSS & Javascript</p>   
          </div>
          <a href="https://invitation.illuminationhawaii.com/" target="_blank"><img src="Hnet-image.gif" alt="Illumination Hawaii Walk through"/></a>
        </div>
      </div>

      <div className="project-wrapper">
        <div class="image-with-text-box">
          <a href="https://bo0m.herokuapp.com" target="_blank"><img src="boomGifRevised.gif" alt="Boom Gif"/></a>
          <div className="text-box">
            <h3 className="project-title">BOOM</h3>
            <p>A Javascript toy where a user can press any letter a-z and create an animation and sound that correlates with that letter. Built with a Ruby on Rails backend to save users clips. Two libraries were used for the front- end Howler JS for the sound clips and Paper JS for the animations.</p>
          </div>
        </div>
      </div>

      <div className="project-wrapper">
        <div class="image-with-text-box">
          <div className="text-box">
            <h3 className="project-title">NYSERDA</h3>
            <p>DESCRIPTION</p>       
            <p>BUILT WITH: Wordpress, Custom Wordpress theme, PHP, SCSS, Jquery, Javascript</p>  
          </div>
          <a href="https://www.nyserda.ny.gov/" target="_blank"><img src="nyserda.png" alt="PowerSecure Home Screen"/></a>
        </div>
      </div>

      </div>
  );
};

export default withRouter(Projects);
