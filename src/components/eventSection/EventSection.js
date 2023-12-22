import React, { useEffect, useState } from 'react'
import EventCard from '../eventCard/EventCard'
import './EventSection.css'
import {getData} from '../../readData'
import { Link, useParams } from 'react-router-dom';

export default function EventSection() {
    const [Events,setEvents] = useState([]);

    const {nam} = useParams('nam')
   

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

  let foundEvent = nam != null ? Events.find((Event) => Event.title == nam) : null;

  let index ;
  return (
    <>
    {console.log(nam)}
    <div className='event container  mt-5'>
        <div className='d-flex justify-content-between mb-3'>
           <h3>Discover Events</h3>
           <Link>View all events</Link>
         </div>
        
    <div className='row '>
    {
 foundEvent ? <EventCard {...foundEvent} key={foundEvent.id} EventImg={eventImg[0].src}/> :
 nam == null ? Events.map((Event, index) => <EventCard {...Event} key={Event.id} EventImg={eventImg[index].src}/>) :
 "not found"
}


   
    </div>

    </div>


    </>
  )
}


// {Events.map((Event,index)=>{
//   return <EventCard {...Event} key={Event.id} EventImg={eventImg[index].src}/>
// })}