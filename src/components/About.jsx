import React from 'react'

const About = () => {
    return (
        <div className="container mb-mt-20" id="about">

            <div className="row">

                <div className="col-md-1 p-1"></div>

                <div className="col-md-10 p-1">

                    <article className="text-center">
                        <header>
                            <h1 className="font-weight-bold p-2">About me</h1>
                            <p className="fw-lighter">Hey, hier möchte ich mich gerne vorstellen!</p>
                            <hr />
                        </header>
                    </article>

                    <article >
                        <section className="p-3 d-inline-block">
                            <div className="row h-100 align-items-center">
                                <div className="col-md-6">
                                    <img className=" pb-3" src="Images/me.jpeg" alt="Fadi Azzam" width="100%" height="" />
                                </div>
                                <div className="col-md-6">
                                    <p className="fw-light">Fadi Azzam ist mein Name, komme aus Sweida in Syrien, lebe in Dresden
                                        und bin 25 Jahre alt, bin kreativ, ein Teamplayer,
                                        schnell, belastbar und offen
                                        und auch interkulturell flexibel.</p>
                                    <p className="text-wrap fw-light">
                                        Grafische Gestaltung, Aufbau von Websites, das ist weit mehr als ein Beruf für mich.
                                        Seit 2016 lebe ich in Deutschland und habe am 09.2021 mein Medieninformatik Bachelor an der
                                        Berufsakademie in Dresden absolviert. Aktuell arbeite ich als Wissenschaftlicher Mitarbeiter bei Universitätsklinikum Carl Gustav Carus Dresden.
                                        Ich bin offen, unvoreingenommen und neugierig. Gerne erarbeite ich im Team mit anderen gemeinsam neue Ideen, auch über die reine Gestaltung hinaus.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </article>
                    <hr />
                </div>

                <div className="col-md-1 p-1"></div>
            </div>
        </div>
    )
}

export default About