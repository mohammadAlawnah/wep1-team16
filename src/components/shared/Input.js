import React from 'react'

export default function Input(props) {
  return (
        <div className='mb-3'>
            <label htmlFor={props.id} className='form-label'>{props.title}</label>
            <div className='d-flex'>
            <input type={props.type} name={props.name} className='form-control' placeholder={props.value} onChange={props.changeData}/>
            </div>
         </div> 
    )
}