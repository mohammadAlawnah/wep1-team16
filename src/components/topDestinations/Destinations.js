import React from "react";
import classes from "./Destinations.module.css";
import { getData } from "../../readData";

const Destinations = ({ title, type, image }) => {
  return (
    <div className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
      <div className={classes.card}>
        <img src={`./img/eventPageImg/${image}`} />
        <div className={classes.greyBlur}></div>
        <div className={classes.info}>
          <h3>{title}</h3>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
