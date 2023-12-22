import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { readDataDocument } from '../../readDataDocument';
import Input from '../../components/shared/Input';
import { UpdateData } from '../../updateData';
export default function EditEvent() {
    let [event,setEvent] = useState({});
    let {id} = useParams('id')
    const getDataFromDoc =async ()=>{
      let result = await readDataDocument('events',id);
      setEvent(result);
    }
    let da = {
      title : '',
      location: '',
      date : '',
      eventDisplay : '',
      attending : null,
    }
   
    useEffect(()=>{
      getDataFromDoc()
 },[])


 const sendData = async(e)=>{
  e.preventDefault();
  Update();
}

const Update= ()=>{


  if(da.title != ''){
    UpdateData('events',id,'title',da.title)
  }

  if(da.location != ''){
    UpdateData('events',id,'location',da.location)
  }

  if(da.date != ''){
    UpdateData('events',id,'date',da.date)
  }

  if(da.eventDisplay != ''){
    UpdateData('events',id,'eventDisplay',da.eventDisplay)
  }

  if(da.attending  != null && da.attending != '' ){
    console.log('No Null')
    UpdateData('events',id,'attending',da.attending)
  }
  

}


const changeData = (e)=>{
  const{name,value} = e.target
  da[name] = value
}

 
  return (
    <>
      <div className='mt-3 mb-3'>EditEvent</div>
      <form onSubmit={sendData}>

      <Input name={"title"} type={"text"} id={"title"} title={"title"} value={event.title} changeData={changeData} />
      <Input name={"location"} type={"text"} id={"location"} title={"location"} value={event.location} changeData={changeData}/>
      <Input name={"date"} type={"text"} id={"date"} title={"date"} value={event.date} changeData={changeData} />
      <Input name={"eventDisplay"} type={"text"} id={"eventDisplay"} title={"eventDisplay"} value={event.eventDisplay} changeData={changeData} />
      <Input name={"attending"} type={"number"} id={"attending"} title={"attending"} value={event.attending} changeData={changeData} />
      <div className='mb-3'>
        <input type='submit' className='form-control' value={'Update Event'} />
      </div>

      </form>    
    </>

  )
}