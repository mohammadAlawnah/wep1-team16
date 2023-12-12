import React from "react";
import Card from "../card/Card";
import classes from "./CardsContainer.module.css";
import Features from "../featuresWithButton/Features";
const CardsContainer = () => {
  return (
    <section className={"features mt-5"}>
      <div className={"container"}>
        <div className={`${classes.containerOfCards} px-sm-2 px-md-3 px-lg-5`}>
          <div className="row py-2 ">
            <div className="col-sm-12 col-md-4">
              <Features
                title={"Take a look at our big set of features"}
                details={"Express besides it present if at an opinion visitor."}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <Card
                image
                icon={"bubble"}
                title="Built-in digital wallet"
                details={
                  "Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls."
                }
              ></Card>
            </div>
          </div>

          <div className="row py-3 ">
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Card
                icon={"emoji"}
                title="Built-in digital wallet"
                details={
                  "Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls."
                }
              ></Card>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Card
                icon={"bell"}
                title="Built-in digital wallet"
                details={
                  "Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls."
                }
              ></Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Card
                icon={"like"}
                title="Built-in digital wallet"
                details={
                  "Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls."
                }
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsContainer;
