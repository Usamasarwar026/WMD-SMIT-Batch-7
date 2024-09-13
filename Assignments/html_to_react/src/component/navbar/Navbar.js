import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <img src={require("../../assets/images/logo-light.png")} alt="SimpleBlog logo" width="150" className="logo-light" />
          </a>

          <div className="flex-wrapper">

            <ul className="desktop-nav">

              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li>
                <Link to="/about" className="nav-link">About Me</Link>
              </li>

              <li>
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>

            </ul>

            <button className="theme-btn theme-btn-desktop light">
              <FontAwesomeIcon icon={faMoon} className="moon" />
              <FontAwesomeIcon icon={faSun} className="sun" />
            </button>

          </div>

          <div className="mobile-nav">
            <button className="nav-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="wrapper">
              <p className="h3 nav-title">Main Menu</p>
              <ul>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About Me</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="h3 nav-title">Topics</p>
              <ul>
                <li className="nav-item">
                  <a href="#" className="nav-link">Database</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Accessibility</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Web Performance</a>
                </li>
              </ul>
            </div>

          </div>

        </nav>

      </div>

    </header>
  )
}
