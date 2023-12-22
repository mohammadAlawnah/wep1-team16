import React from "react";
import EventSection from '../../components/eventSection/EventSection'
import Header from "../../components/header/Header";
import ExploreGroups from "../../components/exploreGroups/ExploreGroups";
import DestinationsContainer from "../../components/topDestinationsContainer/DestinationsContainer";
export default function Events() {
  return (
    <>
    <Header/>
    <EventSection />
    <DestinationsContainer />
    <ExploreGroups/>


    </>
  );
}

