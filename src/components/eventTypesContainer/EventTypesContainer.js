import React from "react";
import Type from "../eventTypes/Type";
import classes from "./EventTypesContainer.module.css";
const EventTypesContainer = () => {
  return (
    <div className={`px-1 py-4 ${classes.eventsContainer}`}>
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-sm-6 col-md-3 col-lg-2 mb-2  d-flex justify-content-center">
            <Type image={"medal"} title={"Arts & Entertainment"} />
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2 mb-2  d-flex justify-content-center">
            <Type image={"paper"} title={"Business & Conferences"} />
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2 mb-2  d-flex justify-content-center">
            <Type image={"house"} title={"PNY E-Gaming Fest"} />
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2 mb-2  d-flex justify-content-center">
            <Type image={"clock"} title={"Events & Parties"} />
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2 mb-2  d-flex justify-content-center">
            <Type image={"tv"} title={"Sports & Wellness"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTypesContainer;
