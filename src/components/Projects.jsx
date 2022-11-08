import React from 'react'

const Projects = () => {
  return (
    <React.Fragment>
      {/* {/* <div className="container mb-mt-20" id="proje">
        <article className="text-center">
          <header>
            <h1 className="font-weight-bold p-2">Meine Projekte</h1>
            <p className="fw-lighter">
              Folgende Projekte, die ich durch mein Studium und Arbeit gemacht habe.
            </p>
            <hr/>
          </header>
        </article>
        <div className="row text-dark grid-Gap">
          
          {/* <!-- IMAGO Projekt -->
      <div className="col-md-12">
        <div className="card m-2 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">IMAGO - Images search engine</h5>
            <p className="fw-light">
              <p><strong>Images search engine</strong></p>
              Eine kleine Anwendung, um nach Bildern im Internet zu suchen. Alle Daten werden aus API (Application Programming Interface) geladen und angezeigt.
            </p>
            <div>
              <div id="carouselExampleIndicators" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="Images/imago/IMAGO.png" className="d-block w-100" alt="IMAGO" />
                  </div>
                  <div className="carousel-item">
                    <img src="Images/imago/IMAGO_02.png" className="d-block w-100" alt="IMAGO" />
                  </div>
                  <div className="carousel-item">
                    <img src="Images/imago/IMAGO_03.png" className="d-block w-100" alt="IMAGO" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <p><strong>Web Anwendung</strong></p>
              <a className="btn border bg-myGrey text-grey" target="_blank" href="https://fadiazzam.github.io/IMAGO/">Projekt öffnen</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card m-2 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">Bachelorarbeit - Process 4.0</h5>
            <p className="fw-light">
              <p><strong>Herausforderungen und Herangehensweisen für die Frontend-Entwicklung einer internen Web-Anwendung für die Datenauswertung</strong></p>
              Die Konzeption, das Layout und die Umsetzung dieser App sind das Ergebnis meiner Bachelorarbeit.
            </p>
            <div>
              <div id="carouselExampleIndicators" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="Images/process4.0/Umfrage-Temp.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="Images/process4.0/moodboard-temp.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="Images/process4.0/Code-Temp.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item align-content">
                    <img src="Images/process4.0/BA-App-Design.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="Images/process4.0/Ergebnisse.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="Images/process4.0/Poster.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <p><strong>Mobile/Desktop App</strong></p>
              <a className="btn border bg-myGrey text-grey" target="_blank" href="https://fadiazzam.github.io/Process_4.0/">Projekt öffnen</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card m-2 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">Medieninforamtik - Broschüre</h5>
            <p className="fw-light">
              Fogende Broschüre aus dem fünften Semester. Die Konzeption und das Layout wurden mit Hilfe von
              Adobe InDesign estellt.
            </p>
            <p><strong>Adobe InDesign</strong></p>
            <a href="./Brochuere_2020.pdf" target="_blank" className="btn">Projekt öffnen</a>
            {/* <!-- Button trigger modal --> 
            <button type="button" className="btn border bg-myGrey text-grey" data-bs-toggle="modal" data-bs-target="#exampleModal">Vorschau</button>

            {/* <!-- Modal --> 
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Medieninforamtik - Broschüre</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <iframe title="iframe" frameBorder="0" scrolling="no"
                      width="100%" height="1000vh"
                      src="Brochuere_2020.pdf#toolbar=0">
                    </iframe>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-transparent text-center">
            <p className="fw-lighter">
              Diese Projekt wurde von: <a className="text-dark" rel="noreferrer" target="_blank" href="https://sebastian-walter-media.de/">Sebasitan Walter</a> und von mir umgesetzt.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card m-2 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">Item management</h5>
            <p className="fw-light">
              Folgende Projekt aus dem vierten Semester. Die Erstellung von UI/UX dieser Applikation.
            </p>
            <div id="carouselExampleIndicators" className="carousel slide carousel-dark" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="Images/itemManagement/App-Design.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Images/itemManagement/App-Temp.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Images/itemManagement/AppDesc.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item align-content">
                  <img src="Images/itemManagement/Bild01.png" className="d-block w-50" style={{ marginLeft: "28%" }} alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Images/itemManagement/Bild02.png" className="d-block w-50" style={{ marginLeft: "28%" }} alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Images/itemManagement/Bild03.png" className="d-block w-50" style={{ marginLeft: "28%" }} alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="Images/itemManagement/Bild40.png" className="d-block w-50" style={{ marginLeft: "28%" }} alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <p><strong>Adobe XD</strong>, <strong>Affinity Designer</strong></p>
            <a className="btn border bg-myGrey text-grey" target="_blank" href="http://itemmanagement.de/start">Projekt öffnen</a>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card m-2 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">Web Projekt</h5>
            <p className="fw-light">
              Folgende Projekt aus dem zweiten Semester.
            </p>
            <p><strong>HTML</strong>, <strong>CSS</strong></p>
            <a className="btn border bg-myGrey text-grey" target="_blank" href="https://fadiazzam.github.io/WebProject/">Projekt öffnen</a>
          </div>
        </div>
      </div>

    </div>
      </div > * /} */}
    </React.Fragment >
  )
}

export default Projects