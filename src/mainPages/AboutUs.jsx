import React from 'react';
import { Link } from 'react-router-dom';
import './AU.css';

function AboutUs() {
  return (
    <>
      <header className='about-header'>
        <div className="nav-container">
          <h1 className='business-name'>Samgyeop Grill Box - Cebu</h1>
          <nav>
            <ul className='nav-list'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
        <hr />
        <h1 className='about-now-title'>About Us</h1>
        <h2>Learn more about our mission, values, and the work we do.</h2>
      </header>

      <div className="about-container-1">
      </div>
    </>
  );
}

export default AboutUs;
