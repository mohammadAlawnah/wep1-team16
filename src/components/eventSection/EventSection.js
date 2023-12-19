import React, { useEffect, useState } from 'react'
import EventCard from '../eventCard/EventCard'
import './EventSection.css'
import {getData} from '../../readData'
import { Link } from 'react-router-dom';

export default function EventSection() {
    const [Events,setEvents] = useState([]);


    useEffect(()=>{
      getEvents();
    },[])

    
    const getEvents = async ()=>{
     const  response = await getData('events') 
     setEvents(response);

    }
  

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
           <Link>View all events</Link>
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
