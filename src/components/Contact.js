import React from "react";
import {  Link, withRouter } from "react-router-dom";
import contact from '../style/contact.css';

const Contact = props => {
  return (
    <div>
      <div className="first">
        <label className='label'>Email:</label>
        <h1 className="email">Shivani<span className="period">[dot]</span>brijmohan<span className="period">[at]</span>gmail<span className="period">[dot]</span>com</h1>
      </div>
      <div className='second'>
        <label className='label'>Phone:</label>
        <h1 className="num">352<span className="period">.</span>573<span className="period">.</span>9399</h1>
      </div>
    </div>
  );
};

export default withRouter(Contact);
