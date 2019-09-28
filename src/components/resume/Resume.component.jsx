import React from 'react';
import resume from './brijmohan_frontend.pdf';

import './styles.resume.css'

const Resume = () => {
  return (
    <div className="resume wrapper">
      <object
        type="application/pdf"
        data={resume}
        title="resume"
      >
        This browser does not support PDFs.
        <a href={resume}> Please download the PDF to view it: </a>
      </object>
      <div>
        <a
          className="resume-btn"
          href={resume}
        >
          Download PDF.
        </a>
      </div>
    </div>
  );
};

export default Resume;
