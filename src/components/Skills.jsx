import React from 'react'

const Skills = () => {
  return (
    <div className="container mb-mt-20" id="skills">
        <article className="text-center">
          <header>
            <h1 className="font-weight-bold p-2">Meine Kenntnisse</h1>
            <p className="fw-lighter">
              Folgende Programmier-, Auszeichnungs- und Skript- sprachen, die ich durch mein Studium
              und Arbeit erworben habe.
            </p>
            <hr/>
          </header>
        </article>
        <div className="d-grid grid-templete-columns grid-Gap text-dark">
          <div className=" d-flex align-items-stretch">
            <div className="card m-2 p-2">
              <div className="card-body text-center">
                <h5 className="card-title">HTML | CSS</h5>
                <p className="fw-light">
                  Die Umsetzung von Webseiten mit der Verwendung von verschiedenen Frameworks wie z.b.: 
                </p>
                <p><strong>bootstrap</strong>, <strong>StyledComponent</strong></p>
              </div>
              <div className="card-footer bg-transparent border-0 text-center">
                <span className="fs-2 text-info">
                  <i className="fab fa-css3"></i>
                  <i className="fab fa-html5"></i>
                </span>
              </div>
            </div>
          </div>
          <div className=" d-flex align-items-stretch">
            <div className="card m-2 p-2">
              <div className="card-body text-center">
                <h5 className="card-title">JavaScript</h5>
                <p className="fw-light">Verschiedene Projekte aus Studium und Arbeit mit der Verwendung von:</p>
                <p><strong>React</strong>, <strong>Redux</strong>, <strong>JQuery</strong></p>
              </div>
              <div className="card-footer bg-transparent border-0 text-center">
                <span className="fs-2 text-info"><i className="fab fa-js"></i></span>                
              </div>
            </div>
          </div>
          <div className=" d-flex align-items-stretch">
            <div className="card m-2 p-2 text-center">
              <div className="card-body">
                <h5 className="card-title">Wordpress</h5>
                <p className="fw-light">Erstellung von verschiedenen Designvorlagen für Wordpress-Websites
                  und die Designs-Umsetzung in Wordpress-Websites</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <span className="fs-2 text-info"><i className="fab fa-wordpress"></i></span>                
              </div>
            </div>
          </div>
          <div className=" d-flex align-items-stretch">
            <div className="card m-2 p-2 text-center">
              <div className="card-body">
                <h5 className="card-title">Adobe XD</h5>
                <p className="fw-light">Uni-Projkten, Erstellung von UI/UX einer mobile application 
                  und von Nutzerszenarien. 
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <span className="fs-2 text-info"><i className="fas fa-brush"></i></span>                
              </div>
            </div>
          </div>
          <div className="d-flex align-items-stretch">
            <div className="card m-2 p-2 text-center">
              <div className="card-body">
                <h5 className="card-title">Affinity Designer | Affinity Photo</h5>
                <p className="fw-light">
                  Im Rahmen der Arbeit wurden verschiedenen Grafiken sowohl für Websites
                  als auch für Viedeos erstellt. 
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <span className="fs-2 text-info"><i className="fas fa-pen-fancy"></i></span>
                <span className="fs-2 text-info"><i className="fas fa-paint-brush"></i></span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-stretch">
            <div className="card m-2 p-2 text-center">
              <div className="card-body">
                <h5 className="card-title">MS Office</h5>
                <p className="fw-light">
                  Datenanalyse, Datenvisualisierung, Daten validieren, Dokumente erstellen,
                  Tabellenkalkulation erstellen
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <span className="fs-2 text-info"><i className="fab fa-microsoft"></i></span>                
              </div>
            </div>
          </div>
          
          <div className="d-flex align-items-stretch">
            <div className="card m-2 p-2 text-center">
              <div className="card-body">
                <h5 className="card-title">Adobe InDesign</h5>
                <p className="fw-light">Konzeption von Broschüren und Design-Vorlagen, Design Umsetzung</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <span className="fs-2 text-info"><i className="fas fa-vector-square"></i></span>
              </div>
            </div>
          </div>
          
          <div className="d-flex align-items-stretch justify-content-center">
            <div className="card m-2 p-2 text-center">
              <div className="card-body">
                <h5 className="card-title">Unity</h5>
                <p className="fw-light">Gamedesign, Leveldesign und -planung </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <span className="fs-2 text-info"><i className="fab fa-unity"></i></span>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
  )
}

export default Skills