import React from "react";
import EventSection from '../../components/eventSection/EventSection'
import Conference from "../../components/conference/Conference";
import Header from "../../components/header/Header";
import ExploreGroups from "../../components/exploreGroups/ExploreGroups";
import DestinationsContainer from "../../components/topDestinationsContainer/DestinationsContainer";
export default function Events() {
  return (
    <>
    <Header/>
    <EventSection />
    <Conference/>
    <DestinationsContainer />
    <ExploreGroups/>
    
       </>
  );
}

