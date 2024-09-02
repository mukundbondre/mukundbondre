import React from 'react';
import './about.css';
import image from '../../images/mukund.png';
import resume from '../../mukund-bondre-resume.pdf';

function About() {
  return (
    <div className='about' id='about'>
      <div className='photo'>
        <img src={image} />
      </div>
      <div className='info'>
        <h2>About ME !</h2>
        <p>
          Recent engineering graduate from P. R. Pote College of Engineering, Amravati with a strong foundation
          in web development and software engineering. Proficient in HTML, CSS, JavaScript and React. And also
          solid knowledge of data structure and algorithms.
        </p>
        <button><a href={resume} download>Download CV</a></button>
      </div>
    </div>
  )
}

export default About