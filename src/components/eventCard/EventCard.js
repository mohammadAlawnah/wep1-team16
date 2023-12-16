import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'
import './EvntCart.css'

export default function EventCard(props) {
    let [like,setLike] = useState(props.atend);
    let [btnStyle,setBtnStyle] = useState('btn-outline-success')
    let [activeBtn,setActiveBtn] = useState(false)
  
    const changeData= ()=>{
        if(activeBtn){
          setLike(like-1)
          setBtnStyle('btn-outline-success')
          setActiveBtn(false)
        }else{
        setLike(like+1)
        setBtnStyle('btn-success');
        setActiveBtn(true)
        }
      }


  return (

    <div className='col-3'>
    <div className="card" style={{width: '16rem'}}>
   <img src="../../img/eventpageImg/event1.jpg" className="card-img-top" alt="..." />
   <div className='bg-danger text-white mt-2 me-2 position-absolute top-0 end-0  custum'>Online</div>
   <div className="card-body position-relative">
   <div className='bg-primary text-white  position-absolute top-0 start-1 custum2'>Spa training </div>
 
     <h5 className="card-title w-100"> {props.title} </h5>
     <div className='date-and-location'>
       <div className='date'>
       <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.5" viewBox="0 0 448 512">
       <path fill="#676a79" d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        <span className='small ms-1'>{props.date}</span>
       </div>
 
       <div className='loc'>
       <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.5" viewBox="0 0 384 512">
       <path fill="#676a79" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
       <span className='small ms-1'>{props.loc}</span>
 
         </div>
 
     </div>
 
 
 
     <div className='attending mt-3 d-flex'>
       <div className='smallImg'>
       <img src='../../img/eventpageImg/person1.jpg' alt="Eng.Samer"/>
       </div>
       <div className='smallImg se'>
       <img src='../../img/eventpageImg/person3.png' alt="Eng.Samer"/>

       </div>
 
       <div className='smallImg se'>
       <img src='../../img/eventpageImg/person2.jpg' alt="Eng.Samer"/>

       </div>
 
       <div className='smallImg se '>
         <p className='xx d-flex align-items-center justify-content-center bg-primary text-white '><span>+</span>{like}</p>
       </div>
       <div>
         <span className='ms-1 text-secondary attending mt-5'>are attending</span>
       </div>
 
     </div>
 
     <div className='d-flex justify-content-between'>    
     
     <button  className={`btn btn-sm  ${btnStyle}  d-block interested`} onClick={changeData}>
 
       <div className='d-flex w-100 justify-content-center'>
         
         <span className='me-2'><FontAwesomeIcon icon={faThumbsUp} /></span>
         <div className=''>Interested</div>
 
       </div>
 
     </button>
 
     <div className='share d-flex justify-content-center align-items-center'>
     <FontAwesomeIcon icon={faShareNodes} />
 
 
     </div>
   
 
 
     </div>
 
   </div>
     </div>
     </div>
       )
}

