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
            Soft<span className="w">w</span>are Engin<span className="ee">ee</span>r
          </h2>
        </div>

        <div className="life">
          <h2>
            Avid Learn<span className="e">e</span>r
          </h2>
        </div>

      </div>
    )
  }
}
export default Banner;
