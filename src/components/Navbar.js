import React from 'react'
import { FaRunning } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbg'style={{backgroundColor:'grey'}}>
  <div className="container-fluid">
  <div className="fit">
  <FaRunning />
    <a className="navbar-brand"href="#">Fit Lounge A/C Gym</a>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" id="home"aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="about"href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="about"href="#">Contact Us</a>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}