/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Header = () => {
    return (
        <header className="header-image" id="header">
          <div className="container h-100">
            <nav className="m-2 navbar navbar-expand-lg navbar-custom">
              <a className="navbar-brand ps-1 pe-1 hoverBox" href="/"><h2>fadiazzam.de</h2></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse me-auto" id="navbarNav">
                <ul className="navbar-nav ms-auto text-right">
  
                  {/* <a className="nav-link " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="/Images/germany.png" width="30px" alt="">
                  </a>
                  <div className="collapse" id="collapseExample">
                    <div className="">
                      <a className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <img src="/Images/syria.png" width="30px" alt="">
                      </a>
                      <a className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <img src="/Images/english.png" width="30px" alt="">
                      </a>
                    </div>
                  </div> */}
  
                
  
                  {/* <li className="nav-item m-2">
                      <a className="nav-link" href="/">Home</a>
                  </li>
                  
                  <li className="nav-item m-2">
                      <a className="nav-link" href="about">About</a>
                  </li>
                  
                  <li className="nav-item m-2">
                      <a className="nav-link" href="#skills">Kenntnisse</a>
                  </li>
  
                  <li className="nav-item m-2">
                    <a className="nav-link" href="#proje">Projekte</a>
                  </li>
                  
                  <li className="nav-item m-2">
                    <a className="nav-link" href="#leben">Lebenslauf</a>
                  </li> */}
  
                  <li className="nav-item m-2">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>  
              </div>
            </nav>
            <div className="row h-100 align-items-center">
              <div className="col-1 text-left">
                <nav className="navbar navbar-dark pt-0 navbar-custom">
                  <ul className="navbar-nav text-left">
                    {/*
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.facebook.com/fadiazzam746"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.youtube.com/channel/UC2qL4K0aYgypzDGlaDyHmQw"><i className="fab fa-youtube"></i></a>
                    </li>
                    */}
                    <li className="nav-item">
                      <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/FadiAzzam">
                        <FaGithub />
                      </a>  
                    </li>
  
                    <li className="nav-item">
                      <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/fadiology_/">
                        <FaInstagram />
                      </a>
                    </li>
  
                    <li className="nav-item">
                      <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fadi-azzam-274902196/">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              
              <div className="col-11">
                <div className='d-flex'>
                  <h3 className="lead text-center typingEffect">This is Fadi</h3>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}

export default Header