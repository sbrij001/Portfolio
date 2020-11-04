import React from 'react';
import '../style/styles.about.css';

class About extends React.Component{
  render(){
    return(
      <div className='container'>
        <h1 className='govt-name'>SHIVANI BRIJMOHAN</h1>
        <div className="headshot">
            <img src="shivanibitmoji.png" alt="Shivani Headshot"/>
        </div>
        <div className='intro'>
          <p>
            In dinner party conversation, I dabble in many things from choosing a career in software engineering after spending two years traveling the world, to playing in a Brazilian Samba band, to teaching underprivileged teenagers how to code. In LinkedIn language, I'm a fullstack engineer with a passion for action. Or you can call me Shivani.
          </p><br></br>
          <p>
            I like to tell stories that complicate things but also excite and connect people.
          </p><br></br>
          <p>
            I’ve coded for nonprofit organizations, Bose Sound Company, The Company, JP Morgan, The StartupBus, Essense Partners, among others.
          </p><br></br>
          <p>
            I know my way around HTML, CSS, Ruby on Rails, Javascript, PHP, Wordpress and frameworks like React and Redux.
          </p><br></br>
          <p>
            I'm based out of Brooklyn, NY and available for frontend engineering, fullstack engineering and great conversation.
          </p><br></br>
          <p>
            <a class="email" href = "mailto: shivani.brijmohan@gmail.com">Email me at shivani.brijmohan@gmail.com</a>
          </p>
      </div>
    </div>
    )
  }
}
export default About;
