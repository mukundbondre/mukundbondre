import React from 'react';
import "./home.css";
import img from '../../images/mukund.png';

function Home() {
  return (
    <div className='home'>
      <div className='detail'>
        <table>
          <p>WEB DEVELOPER</p>
          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <th>NAME</th>
            <td>MUKUND BONDRE</td>
          </tr>
          <tr>
            <th>D.O.B</th>
            <td>12 OCT 2001</td>
          </tr>
          <tr>
            <th>PHONE</th>
            <td>+91 96654 88242</td>
          </tr>
          <tr>
            <th>ADDRESS</th>
            <td>PUNE, MAHARASHTRA</td>
          </tr>
          <tr>
            <th>E-MAIL</th>
            <td>mukundbondre41@gmail.com</td>
          </tr>
          <tr>
            <th>WEBSITE</th>
            <td>www.mukundbondre.com</td>
          </tr>
        </table>
      </div>
      <div className='photo'>
        <img src={img}/>
      </div>
    </div>
  )
}

export default Home