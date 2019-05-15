import React from "react";
import { Link, withRouter } from "react-router-dom";
import projects from '../style/projects.css';

const Projects = props => {
  return (
      <div class="row">

        <div class="column">
          <h2 className="bounce">Bounce</h2>
          <a href="https://youtu.be/Zzv5JLOOyXQ"><img src="bounceGif.gif" className="inline-photo show-on-scroll" alt="bounceGif"/></a>
        </div>

        <div class="column">
          <h2 className="boomFont">Resume</h2>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQ5oBLLuwZWrI7EHqhhOP1vQ0xRdSMxsXE3AgySRAg8ScLy1miWjkoenC5zkg2rUqzCC6z2qEBPiMtV/pub"><img src="resume.png" className="inline-photo show-on-scroll" alt="bounceGif"/></a>
        </div>

        <div class="column">
          <h2 className="boomFont">Boom</h2>
          <a href="https://bo0m.herokuapp.com/"><img src="boomGifRevised.gif" className="inline-photo show-on-scroll" alt="bounceGif"/></a>
        </div>


      </div>
  );
};

export default withRouter(Projects);
