import React from 'react';
import '../Styles/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="header">
      <div className="contact-info">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <span>9-999-999-99</span>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>easystays@gmail.com</span>
      </div>
      <nav className="nav-links">
        <a href="#">HOME</a>
        <a href="#">YOUR BOOKINGS</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT</a>
      </nav>
      
      <div className="user-actions">
        <a href="#">Login</a>
        <a href="#">Sign Up</a>


      <button className="book-now">BOOK NOW</button>

        <div className='profile'>
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
        </div>

      </div>
    </header>
  );
};

export default Navbar;
