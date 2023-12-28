import React from 'react'

function LinkComponents(props) {
return (
<div className="col-sm-6 col-lg-3">
    <h3 className='h3-footer mb-4'>{props.title}</h3>
    <ul className='flex-column list-unstyled'>
        {props.Data.map((link)=>{
            return <li key={link.id} className='li-footer'>{props.icone}{link.link}</li>
        })}
    </ul>
</div> 
)
}

export default LinkComponents
