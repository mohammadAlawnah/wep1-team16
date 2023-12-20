import React from 'react'
import './Header.css'
import EventTypesContainer from "../../components/eventTypesContainer/EventTypesContainer"
export default function Header() {
  return (


 <div className='Header'>
<div className='paragra'>
        <h1>Find events near you</h1>
        <p>Lets uncover the best pleace to eat,drink and shop nearset to you.</p>
       </div>
       <br></br>
       
<div className="card finds">
  <div className="card-body">
    <h4 className="card-title">We wiil help you to find all</h4>
    <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="What" id="search-name" />
    <input type="text" className="form-control" placeholder="Where" id="search-name" />
    <a href="#" className="btn btn-primary">Search</a>
</div>
   
 </div>
</div>
<div className='changeEvant'>
<EventTypesContainer/>
</div>
 
  </div>
  )
}

