import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firbase'
import EventCard from '../eventCard/EventCard'
import './EventSection.css'

export default function EventSection() {
    let index =0;
    const [Events, setEvents] = useState([]);

    const getEvents = async () => {
         
      await getDocs(collection(db, "events"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
                setEvents(newData);                
          })
     }
  
     useEffect(()=>{
        getEvents();
  }, [])

  const eventImg = [
    {id:1,src:'../../img/eventpageImg/event1.jpg'},
    {id:1,src:'../../img/eventpageImg/event2.jpg'},
    {id:1,src:'../../img/eventpageImg/event3.jpg'},
    {id:1,src:'../../img/eventpageImg/event5.png'},
  ]

  
  



  return (
    <>
    <div className='event container  mt-5'>
        <div className='d-flex justify-content-between mb-3'>
           <h3>Discover Events</h3>
           <a href='#' >View all events</a>
         </div>
        
    <div className='row '>
    {Events.map((Event,index)=>{
        // return <EventCard title={Event.title } date={Event.date} loc={Event.location} atend={Event.attending} eventDisplay={Event.eventDisplay} EventImg={'../../img/eventpageImg/event5.png'} />
        return <EventCard {...Event} key={Event.id} EventImg={eventImg[index].src}/>
    })}
    </div>

    </div>


    </>
  )
}
