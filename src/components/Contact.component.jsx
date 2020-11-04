import React from "react";
import { withRouter } from "react-router-dom";
import '../style/styles.contact.css';

const Contact = props => {
  return (
    <div>
      <div className="first">
        <label className='label'>Email:</label>
        <h1 className="content">
          Shivani
          <span className="period">.</span>
          brijmohan
          <span className="period">@</span>
          gmail
          <span className="period">.</span>
          com
        </h1>
      </div>

      <div className='second'>
        <label className='label'>Phone:</label>
        <h1 className="content">
          (908) 977 - 6419
        </h1>
      </div>
    </div>
  );
};

export default withRouter(Contact);
