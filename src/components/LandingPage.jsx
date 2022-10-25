import React from 'react';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import WorkExperience from './WorkExperience'
import Education from './Education';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

//import Pics

const LandingPage = () => {
	return (
		<div className="container">
			<About/>
			<Skills/>
			<Projects/>
			<WorkExperience/>
			<Education/>
		</div>
	);
};

export default LandingPage;
