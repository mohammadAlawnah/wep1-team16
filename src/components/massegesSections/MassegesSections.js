import React from 'react'
import './MassegesSections.css'
import CardsOfSection from '../../components/massegesSections/CardsOfSection'
export default function MassegesSections() {

  const imge1="../../img/landingPageImg/like.png";
  const imge2="../../img/landingPageImg/love.png";
  const imge3="../../img/landingPageImg/star.png";

  const title1="Voice and video calls";
  const title2="Auto save contacts";
  const title3="End to end encryption";

  const description1="Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky.";
  const description2="Handsome met debating sir dwelling age material. As style lived he worse dried. visitors subjects distance.";
  const description3="Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had.";
  return (
   <div className="MassegesSections">
    <div className="container mt-5"> 
    <h1>More than masseges</h1>
    <p>Express besides it present if at an opinion visitor.</p>
    <br></br>
    <div className="row  row-cols-md-3 g-1">
    <CardsOfSection img={imge1} title={title1} description={description1}/>
   <CardsOfSection img={imge2} title={title2} description={description2}/>
   <CardsOfSection img={imge3} title={title3} description={description3}/>
   </div>
   </div>
   </div>
  )
}
