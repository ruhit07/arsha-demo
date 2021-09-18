import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar=()=>{
  return (
    <nav 
      className="navbar navbar-expand-lg p-2 navbar-dark"
      style={{backgroundColor : "#37517E"}}
    >
      <div className="container">
        <NavLink 
          className="navbar-brand" 
          to="/"
          style={{fontWeight:"600",fontSize :"30px",letterSpacing:"1.5px"}}
        >
          ARSHA
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav ml-auto">

          <li className="nav-item active">
            <NavLink className="nav-link pr-4" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link pr-4" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link pr-4" to="/services">Services</NavLink>
          </li>
{/* 
          <li className="nav-item">
            <NavLink className="nav-link pr-4" to="/portfolio">Portfolio</NavLink>
          </li> */}

          <li className="nav-item">
            <NavLink className="nav-link pr-4" to="/team">Team</NavLink>
          </li>

          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}

          <li className="nav-item">
            <NavLink className="nav-link pr-4" to="/contact">Contact</NavLink>
          </li>

          <NavLink to="/about" className="text-white btn btn-outline-primary">Get Started</NavLink>
    
        </ul>
      
      </div>
    </div>
  </nav>

  );
};

export default Navbar; 
