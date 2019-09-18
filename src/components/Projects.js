import React from "react";
import { Card, Image } from 'semantic-ui-react';

import { withRouter } from "react-router-dom";

import projects from '../style/projects.css';

const Projects = props => {
  return (
    <div class="row">
      <Card>
        <Card.Content extra> <h1>Bounce</h1> </Card.Content>
        <a href="https://youtu.be/Zzv5JLOOyXQ">
        <Image
          className="inline-photo show-on-scroll"
          alt="bounceGif"
          src="bounceGif.gif"
        />
        </a>
      </Card>

      <Card> <Card.Content extra> <h1>Boom</h1>
        </Card.Content>
        <a href="https://bo0m.herokuapp.com">
        <Image
          className="inline-photo show-on-scroll"
          alt="boomGif"
          src="boomGifRevised.gif"
         />
        </a>
      </Card>

      <Card>
        <Card.Content extra><h1>Resume</h1></Card.Content>
        <a href="https://bo0m.herokuapp.com">
        <Image
          className="inline-photo show-on-scroll"
          alt="boomGif"
          src="resumeJPG.jpg"
         />
        </a>
      </Card>
      </div>
  );
};

export default withRouter(Projects);
