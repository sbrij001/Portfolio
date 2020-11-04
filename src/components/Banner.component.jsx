import React from 'react';
import '../style/styles.banner.css';

class Banner extends React.Component{
  render(){
    return(
      <div className="banner">

        <div className="name">
          <h2>
            Shivani Br<span className="ij">ij</span>mohan
          </h2>
        </div>

        <div className="profession">
          <h2>
            Fullstack Engineer
          </h2>
        </div>

        <div className="life">
          <h2>
            Avid Learner
          </h2>
        </div>

      </div>
    )
  }
}
export default Banner;
