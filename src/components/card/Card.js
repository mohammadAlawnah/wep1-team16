import React from "react";
import classes from "./Card.module.css";

const Card = ({ icon, image, title, details }) => {
  return (
    <div className={classes.cardBox}>
      <div className={classes.card}>
        {icon && (
          <div>
            <img
              className={classes.icon}
              src={`./img/landingPageImg/${icon}.png`}
            />
          </div>
        )}
        <h4>
          <b>{title}</b>
        </h4>
        <p>{details}</p>
      </div>
      {image && (
        <div className={classes.imgContainer}>
          <img src={"./img/landingPageImg/phone2.png"} />
        </div>
      )}
    </div>
  );
};

export default Card;
