import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

//import Pics

const LandingPage = () => {
	return (
		<div className="container">
	
			<div className="row ">
				<div className="col-lg-4 text-center">
					<span>
						<FontAwesomeIcon icon={faHome} size="2x" />
					</span>
					<h3>Heading</h3>
					<p>
						Some representative placeholder content for the three columns of text below the carousel. This
						is the first column.
					</p>
					<p>
						<a className="btn btn-secondary" href="#">
							View details »
						</a>
					</p>
				</div>
				<div className="col-lg-4 text-center">
					<span>
						<FontAwesomeIcon icon={faHome} size="2x" />
					</span>
					<h3>Heading</h3>
					<p>
						Another exciting bit of representative placeholder content. This time, we've moved on to the
						second column.
					</p>
					<p>
						<a className="btn btn-secondary" href="#">
							View details »
						</a>
					</p>
				</div>
				<div className="col-lg-4 text-center">
					<span>
						<FontAwesomeIcon icon={faHome} size="2x" />
					</span>
					<h3>Heading</h3>
					<p>And lastly this, the third column of representative placeholder content.</p>
					<p>
						<a className="btn btn-secondary" href="#">
							View details »
						</a>
					</p>
				</div>
			</div>

			<hr className="mt-5 mb-5" />

			{/* Video */}
			<div className="row ">
				<div className="col-lg-12">
					<p className="lh-lg text-align-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis dolorem quibusdam
						sit excepturi ad quidem aliquid cupiditate quisquam sequi laborum, quae voluptate et
						voluptatibus beatae voluptatem veritatis commodi autem.
					</p>
				</div>
			</div>

			<hr className="mt-5 mb-5" />

			<div className="row">
				<div className="col-md-7 d-flex flex-column justify-content-center">
					<h3 className="">
						Lorem, ipsum. <span className="text-muted">Lorem, ipsum.</span>
					</h3>
					<p className="lh-lg text-align-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni quo quis, maiores atque
						laudantium perferendis quibusdam rerum odio veritatis voluptatum perspiciatis saepe facere
						deserunt eum dignissimos nam. Dignissimos, nam.
					</p>
				</div>
				<div className="col-md-5 d-flex flex-column justify-content-center" />
			</div>

			<hr className="mt-5 mb-5" />

			<div className="row">
				<div className="col-md-5" />
				<div className="col-md-7 d-flex flex-column justify-content-center">
					<h3 className="">
						Lorem, ipsum.<span className="text-muted">Lorem, ipsum.</span>
					</h3>
					<p className="lh-lg text-align-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, maiores. Eos consequuntur
						blanditiis hic minus veritatis quisquam eum, maiores eligendi.
					</p>
				</div>
			</div>

			<hr className="mt-5 mb-5" />

			<div className="row">
				<div className="col-md-7 d-flex flex-column justify-content-center">
					<h3 className="">
						lorem <span className="text-muted">Lorem, ipsum dolor.</span>
					</h3>
					<p className="lh-lg text-align-justify">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos incidunt qui quia,
						quis dicta aperiam perferendis dolorem velit corrupti!
					</p>
				</div>
				<div className="col-md-5" />
			</div>

		</div>
	);
};

export default LandingPage;
