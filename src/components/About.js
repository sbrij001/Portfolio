import React from 'react';
import about from '../style/about.css';

class About extends React.Component{
  render(){
    return(
      <div className="intro">
      <div className="top">
        <p>
          Hello, I am <span className="red"> Shivani Brijmohan</span>, passionate web developer. After graduating from <span className="red">Florida International University</span> in Miami, I realized I needed some more time to experiment on my own, that’s when I decided to pack my bags and move to <span className="red">Australia</span>. After a year and a half of traveling  I decided to end my travels to pursue a career. I decided to move to New York City where I attended the <span className="red">Flatiron School Software Engineering Immersive program</span>. At Flatiron I learned to code in Ruby on Rails, Javascript and frameworks such as React and Redux. Currently I am learning Swift.
        </p>
      </div>
      <div className="bottom">
        <p>
          I’m a firm believer that  work is a source of who you are and who you want to be. It provides a sense of purpose and self worth. I want to help <span className="red">create a world</span> that I want to see every day and I think I have the power to do that. To me it’s very important for everyone to have the ability to <span className="red">share their story </span> and show that it’s okay to be different, to take risks, and <span className="red">believe in yourself</span>. I want to use my journey to help people realize what their life can be.
        </p>
      </div>
      </div>
    )
  }
}
export default About;
