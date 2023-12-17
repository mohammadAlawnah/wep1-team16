import React from "react";
import classes from "./Type.module.css";

const type = ({ title, image }) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <img className={classes.img} src={`./img/eventsPageImg/${image}.png`} />
      </div>
      <p>
        <b>{title}</b>
      </p>
    </div>
  );
};

export default type;
