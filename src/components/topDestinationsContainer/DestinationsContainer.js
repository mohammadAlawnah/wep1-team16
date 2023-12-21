import React, { useState, useEffect } from "react";
import classes from "./DestinationsContainer.module.css";
import Destinations from "../topDestinations/Destinations";
import { getData } from "../../readData";

const DestinationsContainer = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations();
  }, []);

  const getDestinations = async () => {
    const response = await getData("Destinations");
    setDestinations(response);
    console.log(response);
  };

  return (
    <div className="container mt-5">
      <div className={classes.title}>
        <h2>Top Destinations</h2>
      </div>
      <div className={`row ${classes.destContainer}`}>
        {destinations.map((item) => (
          <Destinations
            image={item.image}
            title={item.title}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsContainer;
