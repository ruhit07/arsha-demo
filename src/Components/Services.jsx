import React from 'react'
import { NavLink } from "react-router-dom";
import "./Services.css";

const Services=()=>{
  return (
    <div>   
      <div style={{backgroundColor:"#F3F5FA"}}>
        <div className="py-5">
          <div className="container">

            <div className="row">
              <div className="col-md-12 text-center">
                  <h1 style={{color:"#37517E"}}>Services</h1>
                  <hr style={{ width:"100px",height:"2px",backgroundColor:"#47B2E4" }}/>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
            </div>
          
            <div className="row pt-3">

              <div className="col-md-6 col-lg-3 ">
                <div className="card py-4 shadow" id="card-fst">
                  <div className="card-body">
                    <i className="fas fa-globe text-primary pb-3" style={{fontSize:"30px"}}></i>
                    <NavLink to="/services"><h5 className="card-title">Lorem Ipsum</h5></NavLink>
                    <p className="card-text">Voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 "> 
                <div className="card py-4 shadow"  id="card-fst">
                  <div className="card-body">
                    <i className="fas fa-file-alt text-primary pb-3" style={{fontSize:"30px"}}></i>
                    <NavLink to="/services"><h5 className="card-title">Sed ut perspici</h5></NavLink>
                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 ">       
                <div className="card py-4 shadow"  id="card-fst">
                  <div className="card-body">
                    <i className="fas fa-meh-blank text-primary pb-3" style={{fontSize:"30px"}}></i>
                    <NavLink to="/services"><h5 className="card-title">Magni Dolores</h5></NavLink>
                    <p className="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3  ">     
                <div className="card py-4 shadow" id="card-fst">
                  <div className="card-body">
                    <i className="fas fa-question text-primary pb-3" style={{fontSize:"30px"}}></i>
                    <NavLink to="/services"><h5 className="card-title">Nemo Enim</h5></NavLink>
                    <p className="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div id="service-section">
        <div className="py-5">
          <div style={{paddingTop:"80px",paddingBottom:"80px"}}>
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                    <h2 className="text-white font-weight-bold">Call To Action</h2>
                    <p className="text-white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-md-3 pt-4">
                  <NavLink 
                    to="/" 
                    className="text-white btn btn-outline-primary px-5 py-3"
                    style={{fontWeight:"500"}}
                  >
                    Call To Action
                  </NavLink>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>


    </div>   
  );
};

export default Services; 
