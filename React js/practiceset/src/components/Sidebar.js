// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Import your CSS for the sidebar

function Sidebar({ show, onClose }) {
  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      {/* Add your sidebar content here */}
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </div>
  );
}

export default Sidebar;
