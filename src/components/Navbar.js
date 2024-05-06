import React from 'react'
import { FaRunning } from "react-icons/fa";
import {Link} from "react-router-dom"


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
          <Link className="nav-link active" id="home"aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" id="about" to ="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" id="about" to="/about">Contact Us</Link>
        </li>
        <li className="nav-item">
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}