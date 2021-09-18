import React from 'react'
import { NavLink } from "react-router-dom";
import logo1 from "../Img/team-1.jpg";
import logo2 from "../Img/team-2.jpg";
import logo3 from "../Img/team-3.jpg";
import logo4 from "../Img/team-4.jpg";


const Team=()=>{
  return (
    <div style={{background:"#F3F5FA"}}>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center" style={{color:"#37517E"}}>TEAM</h1>
              <hr style={{ width:"80px",height:"2px",backgroundColor:"#47B2E4" }}/>
              <p className="text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>

        <div className="row pt-2">

          <div className="col-lg-6 col-md-12">
            <div className="card mb-3" style={{maxWidth:"540px"}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={logo1} className="card-img img-fluid rounded" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body"> 
                    <h5 className="card-title" style={{color:"#37517E"}}>Walter White</h5>
                    <p className="card-text">Chief Executive Officer</p>
                    <p className="card-text">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                    <a href="#" className="pr-3"><i className="fab fa-twitter-square"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="card mb-3" style={{maxWidth:"540px"}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={logo2} className="card-img img-fluid rounded" />
                </div>
                <div className="col-md-8">
                  <div className="card-body"> 
                    <h5 className="card-title" style={{color:"#37517E"}}>Walter White</h5>
                    <p className="card-text">Chief Executive Officer</p>
                    <p className="card-text">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                    <a href="#" className="pr-3"><i className="fab fa-twitter-square"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 col-md-12">
            <div className="card mb-3" style={{maxWidth:"540px"}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={logo3} className="card-img img-fluid rounded"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body"> 
                    <h5 className="card-title" style={{color:"#37517E"}}>Walter White</h5>
                    <p className="card-text">Chief Executive Officer</p>
                    <p className="card-text">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                    <a href="#" className="pr-3"><i className="fab fa-twitter-square"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="card mb-3" style={{maxWidth:"540px"}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={logo4} className="card-img img-fluid rounded" />
                </div>
                <div className="col-md-8">
                  <div className="card-body"> 
                    <h5 className="card-title" style={{color:"#37517E"}}>Walter White</h5>
                    <p className="card-text">Chief Executive Officer</p>
                    <p className="card-text">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                    <a href="#" className="pr-3"><i className="fab fa-twitter-square"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
};

export default Team; 
