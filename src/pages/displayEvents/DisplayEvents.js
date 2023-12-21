import React, { useEffect, useState } from 'react'
import { getData } from '../../readData';
import { Link } from 'react-router-dom';
import Input from '../../components/shared/Input';
import { addData } from '../../AddData';

export default function DisplayEvents() {
    const [Events,setEvents] = useState([]);


    useEffect(()=>{
      getEvents();
    },[])

    
    const getEvents = async ()=>{
     const  response = await getData('events') 
     setEvents(response);

    }

    const edit = (id) =>{
        alert(id)

    }
    const da = {
      title : '',
      location: '',
      date : '',
      eventDisplay : '',
      attending : null,
    }

    const newData = (event)=>{
      const{name,value} = event.target
      da[name] = value;
      
    }
    const dis = (event)=>{
      event.preventDefault();
      addData('events',da)
    }


    










  return (
    <>
 <div>
  <div className="modal fade" id="modal-adicionar" tabIndex={-1}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Add Event</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className='mt-3 mb-3'>EditEvent</div>

      <form onSubmit={dis}>

      <Input name={"title"} type={"text"} id={"title"} title={"title"} value={''} changeData={newData}  />
      <Input name={"location"} type={"text"} id={"location"} title={"location"} value={''} changeData={newData}/>
      <Input name={"date"} type={"text"} id={"date"} title={"date"} value={''} changeData={newData} />
      <Input name={"eventDisplay"} type={"text"} id={"eventDisplay"} title={"eventDisplay"} value={''} changeData={newData} />
      <Input name={"attending"} type={"number"} id={"attending"} title={"attending"} value={null} changeData={newData} />
      <div className='mb-3'>
        <input type='submit' className='form-control text-white bg-success w-50 ms-auto me-auto ' value={'Add Event'} />
      </div>

      </form>   
        
        

 
      </div>
    </div>
  </div>
  <header className="sticky-top">
    <nav className="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#"><i className="bi-infinity" /> Infinity Contatos</a>
        <button className="navbar-toggler border-white border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i className="bi-list fs-1 text-white" />
        </button>
        <div className="collapse navbar-collapse fs-5 justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contatos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div className="container-fluid">
      <div className="row mt-4 text-nowrap">
        <div className="col mb-3 d-flex justify-content-center">
          <h1 className="fs-3 m-0">events container</h1>
        </div>
        <div className="col mb-3 d-flex justify-content-center">
          <button type="button" className="btn btn-primary btn-lg fs-5" data-bs-toggle="modal" data-bs-target="#modal-adicionar"><i className="bi-plus-lg" /> Add Event</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col table-responsive px-3">
          <table className="table table-striped text-nowrap fs-5">
            <thead>
              <tr className="table-success">
                <th>index</th>
                <th>title</th>
                <th>location</th>
                <th>Attending</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
                {Events.length>0? Events.map((event,index)=>{
                    return(
                        <React.Fragment key={event.id}>
                            <tr>
                                <td>{index}</td>
                                <td>{event.title}</td>
                                <td>{event.location}</td>
                                <td>{event.attending}</td>
                                <td>
                                    <Link to ={`/event/${event.id}`}  className="btn btn-secondary btn-sm fs-6 fw-bold" onClick={()=>edit(event.id)}><i className="bi-pencil-square"  /> Editar</Link>
                                     <button type="button" className="btn btn-danger btn-sm fs-6 fw-bold"><i className="bi-x-lg" /> Remover</button>
                                 </td>

                                
                            </tr>
                        </React.Fragment>
                        
                    )
                }) : <h2>No event data</h2>
            }
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</div>

    
    
    </>
      


  )
}
