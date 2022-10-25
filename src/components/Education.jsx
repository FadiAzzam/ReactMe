import React from 'react'

const Education = () => {
  return (
    <div className="container mb-mt-20" id="leben">
        <article className="text-center">
          <header>
            <h1 className="font-weight-bold p-2">Lebenslauf</h1>
            <p className="fw-lighter">
              Qualifikationen
            </p>
            <hr/>
          </header>
        </article>
        <div className="row text-center">
          <div className="col-md-12">
            {/* <!-- Deutschland begin --> */}
            <div className="card m-4 bg-myGrey shadow-lg">
              <div className="card-header fw-bold h3 p-5 "><strong>Deutschland</strong></div>
              
              <div className="accordion pt-4" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <div>
                        <span className="fw-light">10.2018 - 09.2021</span> -
                        <strong >Bachelor of Engineering in Medieninformatik</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="card-body text-dark">
                        <h2 className="card-title font-weight-bold">Bachelor of Engineering in Medieninformatik</h2>
                        <p className="card-body text-center fw-light">10.2018 - 03.09.2021</p>
                        <p className="card-text">
                          <a className="btn" role="button" href="https://www.ba-dresden.de/" ><strong> BA Dresden | Staatliche Studienakademie Dresden</strong></a>
                        </p>
                        <div>
                          <img className="m-2" src="https://www.ba-dresden.de/tmpl/daten/berufsakademie_sachsen/img/logo/ba_dresden_logo.svg" alt="Berufsakademie Dresden" width="200px"/>
                          <img className="mt-3" src="https://www.iws.fraunhofer.de/content/dam/iws/de/images/fraunhofer-iws.svg" alt="Fraunhofer IWS" width="200px"/>
                        </div>
                        <hr className="bg-light"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div>
                        <span className="fw-light">10.2017 - 09.2018</span> -
                        <strong>Studium der Informationstechnik</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="card-body text-dark">
                        <h2 className="card-title font-weight-bold">Studium der Informationstechnik</h2>
                        <p className="card-text text-center fw-light">10.2017 - 09.2018</p>
                        <p className="card-text"><a className="btn" role="button" href="https://www.ba-dresden.de/" >BA Dresden | Staatliche Studienakademie Dresden </a></p>
                        <div>
                          <img className="m-2" src="https://www.ba-dresden.de/tmpl/daten/berufsakademie_sachsen/img/logo/ba_dresden_logo.svg" alt="Berufsakademie Dresden" width="200px"/>
                          <img className="mt-3" src="https://www.iws.fraunhofer.de/content/dam/iws/de/images/fraunhofer-iws.svg" alt="Fraunhofer IWS" width="200px"/>
                        </div>
                        <hr className="bg-light"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <div>
                        <span className="fw-light">06.2017 - 09.2017</span> -
                        <strong>Praktikum bei Fraunhofer IWS</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="card-body text-dark">
                      <h2 className="card-title font-weight-bold">Praktikum bei Fraunhofer IWS</h2>
                      <p className="card-text text-center fw-light">06.2017 - 09.2017</p>
                      <p className="card-text text-center">Im Geschäftsfeld Genierieren und Drucken, Arbeitsgruppe Bildbearbeitung und Datenmangement.</p>
                      <p className="card-text"><a className="btn" role="button" href="https://www.iws.fraunhofer.de/" >Fraunhofer-Institut für Werkstoff- und Strahltechnik IWS </a></p>
                      <div>
                        <img className="mt-3" src="https://www.iws.fraunhofer.de/content/dam/iws/de/images/fraunhofer-iws.svg" alt="Fraunhofer IWS" width="200px"/>
                        <embed width="100%" height="100%" className="shadow mt-2" src="pdf-file.pdf" type="application/pdf"/>
                      </div>
                      {/* <!-- Button trigger modal --> */}
                      <button type="button" className="btn border bg-myGrey text-grey"  data-bs-toggle="modal" data-bs-target="#praktikumModal">Vorschau</button>

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="praktikumModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Medieninforamtik - Broschüre</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <iframe title='iframe' frameBorder="0" scrolling="no"
                                width="100%" height="1000vh"
                                src="pdf-file.pdf#toolbar=0">
                              </iframe>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <hr className="bg-light"/>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <div>
                        <span className="fw-light">2017</span> -
                        <strong>ZERTIFIKAT - C1</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="card-body text-dark">
                      <h2 className="card-title font-weight-bold">ZERTIFIKAT - C1</h2>
                      <p className="card-text text-center fw-light">2017</p>
                      <p className="card-text text-center">Hören/Lesen: 100/166 | Sprechen: 44/48</p>
                      <p className="card-text"><a className="btn" role="button" href="https://www.eso.de/dresden/" >Telc - Euro-Schulen Dresden</a></p>
                      <hr className="bg-light"/>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <div>
                        <span className="fw-light">2017</span> -
                        <strong>ZERTIFIKAT - B2</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="card-body text-dark">
                      <h2 className="card-title font-weight-bold">ZERTIFIKAT - B2</h2>
                      <p className="card-text text-center fw-light">2017</p>
                      <p className="card-text text-center">Hören/Lesen: 158/225 | Sprechen: 71/75</p>
                      <p className="card-text"><a className="btn" role="button" href="https://www.fremdsprachenschule-foreveryone.de/" >Telc - FremdSprachenSchule for everyone GmbH</a></p>
                      <hr className="bg-light"/>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_07">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_07" aria-expanded="false" aria-controls="collapse_07">
                      <div>
                        <span className="fw-light">2016</span> -
                        <strong>ZERTIFIKAT - B1</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse_07" className="accordion-collapse collapse" aria-labelledby="heading_07" data-bs-parent="#accordionExample">
                    <div className="card-body text-dark">
                      <h2 className="card-title font-weight-bold">ZERTIFIKAT - B1</h2>
                      <p className="card-text text-center fw-light">2016</p>
                      <p className="card-text text-center">Hören/Lesen: 41/45 | Schreiben: 19/30 | Sprechen: 100/100</p>
                      <p className="card-text"><a className="btn" role="button" href="https://www.fremdsprachenschule-foreveryone.de/" >Telc - FremdSprachenSchule for everyone GmbH</a></p>
                      <hr className="bg-light"/>
                    </div>
                  </div>
                </div>

                {/* <!-- <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      <div>
                        <span className="fw-light">10.2016</span> -
                        <strong>Integrationskurs</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="card-body text-dark">
                      <h2 className="card-title font-weight-bold">Integrationskurs</h2>
                      <p className="card-text text-center fw-light">10.2016</p>
                      <p className="card-text text-center">Bestanden: 27/33</p>
                      <p className="card-text"><a className="btn" role="button" href="https://www.bamf.de/DE/Startseite/startseite_node.html">BAMF</a></p>
                      <hr className="bg-light">
                    </div>
                  </div>
                </div> --> */}
              </div>
            
            </div>
            {/* <!-- Deutschland end --> */}

            {/* <!-- Syrien begin --> */}
            <div className="card m-4 bg-myGrey shadow-lg">
              <div className="card-header fw-bold h3 p-5 "><strong>Syrien</strong></div>
              
              <div className="accordion pt-4" id="accordionSyrien">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_01">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_01" aria-expanded="false" aria-controls="collapse_01">
                      <div>
                        <span className="fw-light">10.2014 - 09.2015</span> -
                        <strong>Studium der Informatik</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse_01" className="accordion-collapse collapse" aria-labelledby="heading_01" data-bs-parent="#accordionSyrien">
                    <div className="accordion-body">
                      <div className="card-body text-dark">
                        <h2 className="card-title font-weight-bold">Studium der Informatik</h2>
                        <p className="card-text text-center fw-light">10.2014 - 09.2015</p>
                        <p className="card-text">
                          <a className="btn" role="button" href="https://www.ba-dresden.de/" ><strong>Technische Fachhochschule für Industrie in Sweida</strong></a>
                        </p>
                        <hr className="bg-light"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading_02">
                    <button className="accordion-button collapsed bg-myGrey text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_02" aria-expanded="false" aria-controls="collapse_02">
                      <div>
                        <span className="fw-light">10.2011 - 09.2014</span> -
                        <strong>Fachgymnasium</strong>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse_02" className="accordion-collapse collapse" aria-labelledby="heading_02" data-bs-parent="#accordionSyrien">
                    <div className="accordion-body">
                      <div className="card-body text-dark">
                        <h2 className="card-title font-weight-bold">Fachgymnasium</h2>
                        <p className="card-text text-center fw-light">10.2011 - 09.2014</p>
                        <p className="card-text"><strong>Fachabitur Fachrichtung Computertechnik</strong></p>
                        <p className="card-text"><a className="btn" role="button" href="https://www.facebook.com/SwaidaComputerTechnology" >Sweida | Nawras Abed Albakie Computertechnik school</a></p>
                        <div>
                          <img className="m-2" src="Images/Schule.jpeg" alt="Computertechnik school" width="200px"/>
                        </div>
                        <hr className="bg-light"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- Syrein end --> */}
            
          </div>
        </div>
      </div>
  )
}

export default Education