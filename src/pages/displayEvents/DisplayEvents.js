import React, { useEffect, useState } from 'react'
import { getData } from '../../readData';
import { Link } from 'react-router-dom';

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
        <div className="modal-body">
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi-person-circle fs-3 pe-3" />
                  <div className="form-floating flex-grow-1">
                    <input type="text" className="form-control" id="nome-contato" placeholder="Nome" />
                    <label htmlFor="nome-contato">Title</label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi-envelope-at fs-3 pe-3" />
                  <div className="form-floating flex-grow-1">
                    <input type="email" className="form-control" id="email-contato" placeholder="E-mail" />
                    <label htmlFor="email-contato">location</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi-telephone fs-3 pe-3" />
                  <div className="form-floating flex-grow-1">
                    <input type="tel" className="form-control" id="tel-contato" placeholder="Telefone" />
                    <label htmlFor="tel-contato">Attending</label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi-bookmark fs-3 pe-3" />
                  <div className="form-floating flex-grow-1">
                    <select className="form-select" id="tipo-contato">
                      <option selected>Selecionar</option>
                      <option value={1}>Trabalho</option>
                      <option value={2}>Família</option>
                      <option value={3}>Amigo</option>
                      <option value={3}>Sem Tipo</option>
                    </select>
                    <label htmlFor="tipo-contato">Tipo</label>
                  </div>
                </div>     
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-primary">Salvar Contato</button>
        </div>
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
