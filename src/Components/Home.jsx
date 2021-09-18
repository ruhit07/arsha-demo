import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../Img/hero-img.png';
import logo1 from '../Img/client-1.png';
import logo2 from '../Img/client-2.png';
import logo3 from '../Img/client-3.png';
import logo4 from '../Img/client-4.png';
import logo5 from '../Img/client-5.png';
import logo6 from '../Img/client-6.png';


const Home=()=>{
  return (
  <div>  
    <div style={{backgroundColor : "#37517E"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 
              style={{
                color:"white",
                fontSize:"50px",
                paddingTop:"70px",
                fontWeight:"bold"
                }} >
              Better Solutions For Your Business
            </h1>

            <p className="lead pb-5"
              style={{
                color:"#AEB9CB",
                fontWeight:"bold",
                fontSize:"22px"
              }}>
              We are team of talented designers making websites with Bootstrap
            </p>

            <NavLink 
              to="/about" 
              className="btn px-3 py-2"
              style={{
                fontWeight:"500",
                backgroundColor:"#209DD8",
                color:"white"
              }}
            >
              Get Started
            </NavLink>

    

          </div>

          <div className="col-md-6">
              <img src={logo} alt="" className="img-fluid"/>
          </div>

        </div>
      </div>
    </div>

      <div style={{backgroundColor:"#F3F5FA"}} className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src={logo1} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
              <img src={logo2} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
              <img src={logo3} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
              <img src={logo4} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
              <img src={logo5} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
              <img src={logo6} alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>  
    
  </div>  
  );
};

export default Home; 
