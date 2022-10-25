import React from 'react'

const WorkExperience = () => {
  return (
    <div className="container mb-mt-20">
    <article className="text-center">
      <header>
        <h1 className="font-weight-bold p-2">Berufserfahrung</h1>
        <p className="fw-lighter">
          Praxiserfahrung
        </p>
        <hr/>
      </header>
    </article>
    <div className="row text-center">
      <div className="col-md-12">
        {/* <!-- Deutschland begin --> */}
        <div className="card m-4 bg-myGrey shadow-lg">
          <div className="card-header fw-bold h3 p-5 "><strong>Deutschland</strong></div>
          <div className="accordion pt-4">
            {/* <!-- UNIKLINIK begin --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#Berufserfahrung" aria-expanded="false" aria-controls="collapseOne">
                  <div>
                    <span className="fw-light">10.2021 - Heute</span> -
                    <strong>Wissenschaftlicher Mitarbeiter</strong>
                  </div>
                </button>
              </h2>
              <div id="Berufserfahrung" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#Berufserfahrung">
                <div className="accordion-body">
                  <div className="card-body text-dark">
                    <h2 className="card-title font-weight-bold">Wissenschaftlicher Mitarbeiter</h2>
                    <p className="card-body text-center fw-light">10.2021 - Heute</p>
                    <div className="card-text">
                      <a className="btn" role="button" target="_blank" href="https://www.uniklinikum-dresden.de/" ><strong> Universitätsklinikum Carl Gustav Carus - DIE DRESDNER</strong></a>
                      <div className="text-start">
                        <strong>
                          <a href="https://heartbit40.com/" target="_blank" className="text-dark">EU-Projekt HEARTHBIT</a>
                        </strong>
                        Im Rahmen des durch die EU geförderten Projektes sollen innovative Health basierte Schulungsangebote entwickelt
                        und in Form der Konzeption, Organisation, Umsetzung und Planung verschiedener konkreter Projektvorhaben
                        umgesetzt werden. 
                        <br/>
                        <br/>
                        <div className="d-flex justify-content-around align-items-center">
                          <div className="text-start">
                            <strong>Aufgabenbereiche</strong>
                            <ul className="text-start">
                              <li>Herstellung von KI Workshops für Kardiologie</li>
                              <li>Innovations- und Konzeptbildung für KIS Schnittstellen</li>
                              <li>Aufbau von KI Schnittstellen für Datenbank</li>
                              <li>Projektkonzeption und -planung in Zusammenarbeit mit Anwendern</li>
                              <li>Koordination von Partnerkonsortien hinsichtlich Kommunikation, Organisation und Expertise</li>
                            </ul>
                          </div>
                          <div>
                            <img className="m-2" 
                            src="https://www.uniklinikum-dresden.de/++theme++ukd.websitetheme/static/css/images/ukd-carus-logo-right.png" alt="Universitätsklinikum Carl Gustav Carus - Logo" width=""/>
                          </div>
                        </div>        
                      </div>
                      </div>
                    <hr className="bg-light"/>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- UNIKLINIK end --> */}

            {/* <!-- FRAUNHOFER begin --> */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#Berufserfahrung_02" aria-expanded="false" aria-controls="collapseOne">
                  <div>
                    <span className="fw-light">10.2017 - 09.2021</span> -
                    <strong>Dualer Student bei Fraunhofer IWS</strong>
                  </div>
                </button>
              </h2>
              <div 
                id="Berufserfahrung_02" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#Berufserfahrung_02">
                <div className="accordion-body">
                  <div className="card-body text-dark">
                    <h2 className="card-title font-weight-bold">Dualer Student bei Fraunhofer IWS</h2>
                    <p className="card-body text-center fw-light">10.2017 - 03.09.2021</p>
                    <p className="card-text">
                      <a className="btn" role="button" href="https://www.iws.fraunhofer.de/" ><strong>Fraunhofer-Institut für Werkstoff- und Strahltechnik IWS</strong></a>
                    </p>
                    <div>
                      <img className="mt-3" src="https://www.iws.fraunhofer.de/content/dam/iws/de/images/fraunhofer-iws.svg" alt="Fraunhofer IWS" width="200px"/>
                    </div>
                    <hr className="bg-light"/>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- FRAUNHOFER end --> */}
          </div>
        </div>
        {/* <!-- Deutschland end --> */}
      </div>
    </div>
  </div>
  )
}

export default WorkExperience