import React, { useEffect, useState } from 'react'
import {getData} from '../../readData'
import "./Conference.css"
export default function Conference() {

    const [conference,setConference] = useState([]);


    useEffect(()=>{
      getConference();
    },[])

    
    const getConference = async ()=>{
     const  response = await getData('globalConferece') 
     setConference(response);

    }

    const [ticket,setTicket] = useState([]);


    useEffect(()=>{
      getTicket();
    },[])

    
    const getTicket = async ()=>{
     const  response = await getData('ticket') 
     setTicket(response);

    }
   
  return (
 <div>
    <div className="container">
    <div className="row  row-cols-md-3 g-1">
<div style={{width: '28rem'}}>
    <br></br>
  <img style={{height:"250px",borderRadius:"5px"}} src={conference[0]?.photo} className="card-img-top" alt="..." />
  
  <div>
  <br></br>
    <h5 className="col-md-5">{conference[0]?.title}</h5>
    <p style={{textAlign:'left'}} className="align-items-left">{conference[0]?.descrbtion}</p> 
  </div>

  <div className="attending mt-3 d-flex">
  <div className="smallImage1">
    <img src="../../img/eventpageImg/person3.png" alt="Eng.Samer" />
  </div>
  <div className="smallImage1">
    <img src="../../img/eventpageImg/person2.jpg" alt="D.abd" />
  </div>
  <div className="smallNum">
    <p clasesname="numAttend d-flex align-items-center justify-content-center bg-primary text-white ">{conference[0]?.numberOffollowers}</p>
  </div>
  <div>
    <span className="ms-1 text-secondary attending mt-5">are attending</span>
  </div>
</div>
</div>
{/*align-self-end */}
 <div className="col-lg-6 offset-lg-1">
  <h4 className="mb-4 titleOfBook">Book a conference</h4>
  <div className="bg-light dashed p-4 rounded">
    <div className="row g-4 justify-content-between">
      <div className="col-sm-6">
        <div className="row g-4">
        
          <div className="col-6">
            <small>Date</small>
            <h6>{ticket[0]?.Date}</h6>
          </div>
        
          <div className="col-6">
            <small>Time</small>
            <h6>{ticket[0]?.Time}</h6>
          </div>
         
          <div className="col-12">
            <small>Address</small>
            <h6>{ticket[0]?.Address}</h6>
          </div>
          <div className="col-12">
          <button type="button" className="btn btn-primary">Share</button>
          </div>
        </div>
      </div>
      <div className="col-sm-5 text-center">
          <img style={{width:'170px'}} src="../../img/eventpageImg/QR.png"/>
          <button type="button" className="btn btn-primary  btn-lg mt-3">Book now</button>
        </div>
      </div>
    </div> 
</div>
</div>
</div>

</div>

   
  )
}
