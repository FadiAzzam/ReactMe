import React from 'react'



const workExperience = [
  {
    date: [{
      start: "10.2021",
      end: "aktuell"
    }],
    title: 'Wissenschaftlicher Mitarbeiter',
    description: 'Im Rahmen des durch die EU geförderten Projektes sollen innovative Health basierte Schulungsangebote entwickelt und in Form der Konzeption, Organisation, Umsetzung und Planung verschiedener konkreter Projektvorhaben umgesetzt werden.',
    company: "Universitätsklinikum Carl Gustav Carus",
    tasks: [
      "Herstellung von KI Workshops für Kardiologie",
      "Innovations- und Konzeptbildung für KIS Schnittstellen",
      "Aufbau von KI Schnittstellen für Datenbank",
      "Projektkonzeption und -planung in Zusammenarbeit mit Anwendern Koordination von Partnerkonsortien hinsichtlich Kommunikation, Organisation und Expertise"
    ],
    links: ['<a href="https://heartbit40.com/" target="_blank" className="link-primary">EU-Projekt HEARTHBIT</a>']
  },
  {
    date: [{
      start: "10.2017",
      end: "09.2021"
    }],
    title: 'Dualer Student',
    description: '',
    company: "Fraunhofer-Institut für Werkstoff- und Strahltechnik IWS",
    tasks: [""],
    links: []

  },
]

const WorkExperience = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-1 p-1" />
        <div className="col-md-10 p-1">
          <div>
            <div className="d-flex mb-2">
              <div className="subTitleBox">
                <span className="pl-1 pr-1">Berufserfahrung</span>
              </div>
            </div>
            <h1 className="font-weight-bold ">
              Praxiserfahrung
            </h1>
          </div>
          <article>

            <div className='timeLineContainer'>
              <div className='timeLine'>
                <div>
                  {workExperience.map(item => {
                    return <section class="year">
                      <div className='leftSide'>
                        <h6>{item.date[0].end}</h6>
                        <h6>{item.date[0].start}</h6>
                      </div>
                      <section>
                        <h4 className='text-info'>{item.title}</h4>
                        <h5>{item.company}</h5>
                        <p>{item.description}</p>
                        <ul>
                          <li><strong>Aufgabenbereiche</strong></li>
                          {item.tasks.map(task => {
                            return <li>{task}</li>
                          })}
                        </ul>
                      </section>
                    </section>

                  })}
                </div>
              </div>
            </div>
          </article>
        </div>

      </div>
    </div>
  )
}

export default WorkExperience