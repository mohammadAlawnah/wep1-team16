import React from "react";
import classes from "./Features.module.css";
const features = ({ title, details }) => {
  return (
    <div className={classes.card}>
      <h1>
        <b>{title}</b>
      </h1>
      <p>{details}</p>
      <button className={`btn btn-dark ${classes.btn}`}>Download now</button>
    </div>
  );
};

export default features;
