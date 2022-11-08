/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="py-5 mt-5">
            <div className='container'>
                <div className="row my-5">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-custom subTitleBox">
                            <ul className="navbar-nav ms-auto text-right flex-row">
                                <li className="nav-item m-2">
                                    <Link className="nav-link" to="/">
                                        fadiazzam.de
                                    </Link>
                                </li>
                                <li className="nav-item m-2">
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>

                                <li className="nav-item m-2">
                                    <Link className="nav-link" to="/impressum">
                                        Impressum
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer