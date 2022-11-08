/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <header className="header-image" id="header">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className="container">
        <nav className="m-2 navbar navbar-expand-lg navbar-custom">
          <Link className="nav-link" to="/">
            fadiazzam.de
          </Link>
          <nav className="navbar-nav ms-auto text-right">
            <li className="nav-item m-2">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </nav>
        </nav>
      </div>

    </header>
  )
}

export default Header