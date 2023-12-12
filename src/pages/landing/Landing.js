import React from 'react'
import NavbsrLanding from '../../components/navbarLanding/NavbsrLanding'
import AboutLanding from '../../components/aboutLanding/AboutLanding'
import ScreenCompatibility from '../../components/screenCompatibilitySection/ScreenCompatibility'
import DownloadApp from '../../components/downloadApp/DownloadApp'
export default function Landing() {
  return (
    <>
    <NavbsrLanding />
    <AboutLanding />
      <ScreenCompatibility />
      <DownloadApp/>
   </>

          
    )

}

