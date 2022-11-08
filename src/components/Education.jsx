import React from 'react'



const cv = [
  {
    date: [{
      start: "10.2017",
      end: "09.2021"
    }],
    title: 'Bachelor of Engineering in Medieninformatik',
    description: 'Im Rahmen des durch die EU geförderten Projektes sollen innovative Health basierte Schulungsangebote entwickelt und in Form der Konzeption, Organisation, Umsetzung und Planung verschiedener konkreter Projektvorhaben umgesetzt werden.',
    company: "BA Dresden | Staatliche Studienakademie Dresden",
  },
  {
    date: [{
      start: "06.2017",
      end: "09.2017"
    }],
    title: 'Praktikum',
    description: 'Im Geschäftsfeld Genierieren und Drucken, Arbeitsgruppe Bildbearbeitung und Datenmangement.',
    company: "Fraunhofer-Institut für Werkstoff- und Strahltechnik IWS",
  },
  {
    date: [{
      start: "05.2016",
      end: "06.2017"
    }],
    title: 'Deutsch Sprachkurse',
    description: '',
    company: "Fremdsprachenschule for everyone",
  }, {
    date: [{
      start: "10.2014",
      end: "09.2015"
    }],
    title: 'Studium der Informatik',
    description: '',
    company: "Technische Fachhochschule für Industrie in Sweida",
  }, {
    date: [{
      start: "10.2011",
      end: "09.2014"
    }],
    title: 'Fachgymnasium',
    description: 'Fachabitur Fachrichtung Computertechnik',
    company: "Sweida | Nawras Abed Albakie Computertechnik school",
  },
]

const Education = () => {
  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-1 p-1" />
        <div className="col-md-10 p-1">
          <div>
            <div className="d-flex mb-2">
              <div className="subTitleBox">
                <span className="pl-1 pr-1">Lebenslauf</span>
              </div>
            </div>
            <h1 className="font-weight-bold ">
              Lebenslauf
            </h1>
          </div>
          <article>

            <div className='timeLineContainer'>
              <div className='timeLine'>
                <div>
                  {cv.map(item => {
                    return <section class="year">
                      <div className='leftSide'>
                        <h6>{item.date[0].end}</h6>
                        <h6>{item.date[0].start}</h6>
                      </div>
                      <section>
                        <h4 className='text-info'>{item.title}</h4>
                        <h5>{item.company}</h5>
                        <p>{item.description}</p>
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

export default Education