import React from 'react';
import "./navbar.css";
function Navbar() {
  return (
    <div className='navbar'>
      <p>MUKUND</p>
      <ul>
        <a href='#home'>HOME</a>
        <a href='#about'>ABOUT ME</a>
        <a href='#skills'>SKILLS</a>
        <a href='#resume'>RESUME</a>
        <a href='#contact'>CONTACT</a>
      </ul>
    </div>
  )
}

export default Navbar