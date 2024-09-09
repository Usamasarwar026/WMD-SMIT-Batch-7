import React from 'react';
import './footer.css'; // Import the CSS file for styling
import Icon from '../about/Icon';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Usama Sarwar. All rights reserved.
        </p>
        <div className="footer-social-icons">
          <Icon/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
