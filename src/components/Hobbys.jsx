import React from 'react'


const myHobbys = [
    {
        date: [{
            start: "09.2020",
            end: "heute"
        }],
        title: 'Ehrenamt als Koordinator eines Bildungsprogramms',
        description: 'Ich beteilige mich maßgeblich am Bildungsinlandsprojekt „In- terkultureller Austausch für Menschen im besten Alter“. In dem Projekt werden ältere Menschen aus unterschiedlichen Kulturkreisen zusam- mengeführt, um sich miteinander auszutauschen und gemeinsame Projekte anzugehen.',
        company: "Ingenieure ohne Grenzen e. V.",
        location: "Dresden / Deutschland"
    }
]

const Hobbys = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-1 p-1" />
                <div className="col-md-10 p-1">
                    <div>
                        <div className="d-flex mb-2">
                            <div className="subTitleBox">
                                <span className="pl-1 pr-1">Interessen</span>
                            </div>
                        </div>
                        <h1 className="font-weight-bold ">
                            Interessen und Hobbys
                        </h1>
                    </div>
                    <article>

                        <div className='timeLineContainer'>
                            <div className='timeLine'>
                                <div>
                                    {myHobbys.map(item => {
                                        return <section className="year">
                                            <div className='leftSide'>
                                                <h6>{item.date[0].end}</h6>
                                                <h6>{item.date[0].start}</h6>
                                            </div>
                                            <section>
                                                <h4 className='text-info'>{item.title}</h4>
                                                <h5>{item.company}</h5>
                                                <p>{item.description}</p>
                                                <p className='text-success'>{item.location}</p>
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

export default Hobbys