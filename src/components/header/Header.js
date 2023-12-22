import React, { useState } from 'react'
import './Header.css'
import EventTypesContainer from "../../components/eventTypesContainer/EventTypesContainer"
import { Link } from 'react-router-dom'
export default function Header() {
  const [nameEvent,setNameEvent] = useState('');

  const search = (event)=>{
    setNameEvent(event.target.value)
  }

  return (


 <div className='Header w-100 mb-5'>
  <div className='container mb-5'>
      
  <div className='paragra'>
        <h1 className='paragraOfH pt-5'>Find events near you</h1>
        <p className='paragraOfP' >Lets uncover the best pleace to eat,drink and shop nearset to you.</p>
        </div>
       <br></br>
       
<div className="card finds">
  <div className="card-body">
    <h4 className="card-title">We wiil help you to find all</h4>
    <div className="input-group mb-3">
    <input type="text" className="form-control me-3" placeholder="What" id="search-name" onKeyUp={search} />
    <input type="text" className="form-control" placeholder="Where" id="search-name" />
    <Link to={`/events/${nameEvent}`}  className="btn btn-primary">Search</Link>
</div>
   
 </div>
</div>
<div className='changeEvant h-100vh'>
<EventTypesContainer/>
</div>
 

  </div>

  </div>
  )
}

