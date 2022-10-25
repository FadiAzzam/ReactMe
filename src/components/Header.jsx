/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="App-header">
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <span className="me-2">
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    <Link className='nav-link active' to="/">Home</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className='nav-link ' to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link ' to="/impressum">Impressum</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className='row'>
                    <div className="col-md-12 landingPageHeader">
                        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header