import React from 'react';
import '../style/styles.about.css';

class About extends React.Component{
  render(){
    return(
      <div className='container'>
        <h1 id='title'>SHIVANI BRIJMOHAN</h1>
        <div className='intro'>
        <strong>
          <p>
            In dinner party conversation, I dabble in many things from frontend engineering, to hospitality, to cofounding my own company. In LinkedIn language, I'm a freelance frontend engineer with a passion for action. Or you can call me Shivani.
          </p>
          <p>
            I like to tell stories that complicate things but also excite and connect people.
          </p>
          <p>
            I’ve coded for nonprofit organizations, Bose Sound Company, The Company, JP Morgan, The StartupBus, among others.
          </p>
          <p>
            I know my way around HTML, CSS, Ruby on Rails, Javascript, and frameworks like React and Redux
          </p>
          <p>
            I'm based out of New York City and am available for frontend engineering, fullstack engineering, and great conversation.
          </p>
          <p>
            Email me at shivani.brijmohan@gmail.com
          </p>
        </strong>
      </div>
    </div>
    )
  }
}
export default About;
