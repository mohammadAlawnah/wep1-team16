import React from "react";
import NavbsrLanding from '../../components/navbarLanding/NavbsrLanding'
import AboutLanding from '../../components/aboutLanding/AboutLanding'
import ScreenCompatibility from '../../components/screenCompatibilitySection/ScreenCompatibility'
import MassegesSections from '../../components/massegesSections/MassegesSections'
import CardsContainer from "../../components/cardsContainer/CardsContainer";
export default function Landing() {
  return (
        <>
            <NavbsrLanding />
            <AboutLanding />
            <ScreenCompatibility />
            <MassegesSections/>
            <CardsContainer />;
         </>
    )
}


