import React from 'react'

export default function CardsOfSection(props) {
  return (
<div className="row justify-content-center"> 

<div className="col-md-12 text-center">
<img style={{width:"100px", height:"100px"}} className="mb-4" src={props.img} alt />
<h3 className="col-md-18">{props.title}</h3>
<p className="col-md-20">{props.description}</p>
</div>
</div>
  )
}
