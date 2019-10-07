import React from "react";
import { Card, Image } from 'semantic-ui-react';

import { withRouter } from "react-router-dom";
import Resume from './resume/Resume.component';

import '../style/styles.projects.css';

const Projects = props => {
  return (
    <div className="row">
      <div className='card'>
        <Card>
          <Card.Content extra>
            <h1 className='title'>BOUNCE</h1>
          </Card.Content>
          <a href="https://youtu.be/Zzv5JLOOyXQ">
          <Image
            className="inline-photo show-on-scroll"
            alt="bounceGif"
            src="bounceGif.gif"
          />
          </a>
        <Card.Description className='description'>
          <strong>
            Bounce is a music streaming application that allows a user to browse and save playlists. Built with a Ruby on Rails backend to authorize user. Built frontend using React to responsively update components. Bounce fetches data from the Napster API. Custom styling with CSS and integrated Semantic UI.
          </strong>
        </Card.Description>
      </Card>
      </div>

      <Card>
        <Card.Content extra>
          <h1 className='title'>BOOM</h1>
        </Card.Content>
        <a href="https://bo0m.herokuapp.com">
        <Image
          id='boom'
          className="inline-photo show-on-scroll"
          alt="boomGif"
          src="boomGifRevised.gif"
         />
        </a>
        <Card.Description className='description'>
          <strong>
            A Javascript toy where a user can press any letter a-z and create an animation and sound that correlates with that letter. Built with a Ruby on Rails backend to save users clips. Two libraries were used for the front- end Howler JS for the sound clips and Paper JS for the animations.
          </strong>
        </Card.Description>
      </Card>

      <Card>
        <Card.Content extra>
          <h1 className='title'>RESUME</h1>
        </Card.Content>
        <Resume/>
        <Card.Description className='description'>
          <strong>
            <p>
              Bose AR and The Company Challenge Grand Prize Winner
            </p>
          </strong>
          <strong>
            <p>
              The StartupBus & JP Morgan, Advancing Black Entrepreneurs where l created & launched a startup on a bus from NYC to NOLA in 72 hours.
            </p>
          </strong>
        </Card.Description>
      </Card>
    </div>
  );
};

export default withRouter(Projects);
