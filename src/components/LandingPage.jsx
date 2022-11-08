import React from 'react';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import WorkExperience from './WorkExperience'
import Education from './Education';
import Hobbys from './Hobbys';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const LandingPage = () => {
	return (
		<div className="container">
			<div className="container h-100">
				<div className="row h-100 align-items-center">
					<div className="col-1 text-left">
						<nav className="navbar navbar-dark pt-0 navbar-custom">
							<ul className="navbar-nav text-left">
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
						<div className='d-flex flex-column'>
							<h1 className="coverText text-center socialMedia position-relative">Hello!</h1>
							<h3 className="lead text-center typingEffect">This is Fadi</h3>
						</div>
					</div>
				</div>
			</div>
			<About />
			<Skills />
			<Projects />
			<WorkExperience />
			<Education />
			<Hobbys />

		</div>
	);
};

export default LandingPage;
