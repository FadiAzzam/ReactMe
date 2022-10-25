/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="py-5 bg-primary mt-5">
            <div className='container'>
                <div className="row my-5">
                    <div className="col-3">
                        <small className="d-block mb-3 text-secondary">master© 2022</small>
                    </div>
                    <div className="col-12 col-md">
                        <h5 className='text-info'>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/contact">Contact</Link></li>
                            <li><Link className='dropdown-item text-secondary secondaryHover' to="/impressum">Impressum</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer