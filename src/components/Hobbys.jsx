import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

const myHobbys = [
  {
    date: [
      {
        start: "09.2020",
        end: "heute",
      },
    ],
    title: "Ehrenamt als Koordinator eines Bildungsprogramms",
    description:
      "Ich beteilige mich maßgeblich am Bildungsinlandsprojekt „In- terkultureller Austausch für Menschen im besten Alter“. In dem Projekt werden ältere Menschen aus unterschiedlichen Kulturkreisen zusam- mengeführt, um sich miteinander auszutauschen und gemeinsame Projekte anzugehen.",
    company: "Ingenieure ohne Grenzen e. V.",
    location: "Dresden / Deutschland",
  },
];

const Hobbys = (props) => {
  const [number, setNumber] = useState(0);

  const addOne = () => {
    props.dispatch({ type: "ADD_ONE" });
  };

  const minusOne = () => {
    props.dispatch({ type: "MINUS_ONE" });
  };
  return (
    <div>
      <div className="col-md-12">
        <div>
          <h1>{props.number}</h1>
          <button type="button" onClick={minusOne}>
            -
          </button>
          <button type="button" onClick={addOne}>
            +
          </button>
          <div className="d-flex mb-2">
            <div className="subTitleBox">
              <span className="pl-1 pr-1">Interessen</span>
            </div>
          </div>
          <h1 className="font-weight-bold ">Interessen und Hobbys</h1>
        </div>
        <article>
          <div className="timeLineContainer">
            <div className="timeLine">
              <div>
                {myHobbys.map((item) => {
                  return (
                    <section key={item.title} className="year">
                      <div className="leftSide">
                        <h6>{item.date[0].end}</h6>
                        <h6>{item.date[0].start}</h6>
                      </div>
                      <section>
                        <h4 className="text-info">{item.title}</h4>
                        <h5>{item.company}</h5>
                        <p>{item.description}</p>
                        <p className="text-success">{item.location}</p>
                      </section>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default connect(mapStateToProps)(Hobbys);
