import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbsrLanding() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <div className='img '>
    <img src="img/landingPageImg/logo-w.png" alt='logo'  />
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Security</Link>
        </li>

      </ul>
  <div className="ms-3 ms-lg-auto">
    <Link className="btn btn-dark" href="#"> Download app </Link>
  </div>


    </div>
  </div>
</nav>
  )
}
