import React from 'react';

const About = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-1 p-1" />
				<div className="col-md-10 p-1">
					<div>
						<div className="d-flex mb-2">
							<div className="subTitleBox">
								<span className="pl-1 pr-1">ABOUT ME</span>
							</div>
						</div>
						<h1 className="font-weight-bold ">Hey, hier möchte ich mich gerne vorstellen!</h1>
					</div>

					<article>
						<section className="p-3 d-inline-block">
							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="avatar" />
								</div>
								<div className="col-md-6">
									<p className="fw-light">
										Fadi Azzam ist mein Name, komme aus Sweida in Syrien, lebe in Dresden und bin 25
										Jahre alt, bin kreativ, ein Teamplayer, schnell, belastbar und offen und auch
										interkulturell flexibel.
									</p>
									<p className="text-wrap fw-light">
										React js, Aufbau von Webseiten sowie Grafische Gestaltung, das ist weit mehr als
										ein Beruf für mich. Seit 2016 lebe ich in Deutschland und habe am 09.2021 mein
										Medieninformatik Bachelor an der
										<a
											className="link-primary"
											target="_blank"
											rel="noreferrer"
											href="https://www.ba-dresden.de/"
										>
											{' '}
											Berufsakademie Dresden
										</a>{' '}
										absolviert. Aktuell arbeite ich als Wissenschaftlicher Mitarbeiter bei{' '}
										<a
											className="link-primary"
											target="_blank"
											rel="noreferrer"
											href="https://www.uniklinikum-dresden.de/de"
										>
											Universitätsklinikum Carl Gustav Carus Dresden
										</a>. Ich bin offen, unvoreingenommen und neugierig.
									</p>
								</div>
							</div>
						</section>
					</article>
				</div>
				<div className="col-md-1 p-1" />
			</div>
		</div>
	);
};

export default About;
