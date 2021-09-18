import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../Img/hero-img.png"
import logo1 from "../Img/skills.png"

const About=()=>{
  return (
   <div> 

    <div style={{backgroundColor:"#FFFFFF"}} className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 style={{color:"#37517E",fontWeight:"bold"}}>ABOUT US</h1>
            <hr style={{ width:"120px",height:"2px",backgroundColor:"#47B2E4" }}/>
          </div>
        </div>

      <div className="pt-4">
        <div className="row">
          <div className="col-md-6">
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className=" d-flex  flex-row">
                  <div>
                    <i className="fas fa-check-double pr-2 text-primary"></i>
                  </div>

                  <div>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                  </div>
                </div>

                <div className=" d-flex  flex-row">
                  <div>
                    <i className="fas fa-check-double pr-2 text-primary"></i>
                  </div>

                  <div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                  </div>
                </div>

                <div className=" d-flex  flex-row">
                  <div>
                    <i className="fas fa-check-double pr-2 text-primary"></i>
                  </div>

                  <div>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                  </div>
                </div>
          </div>

          <div className="col-md-6">
            <p style={{fontSize:"19px"}} className="lead pb-3">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <NavLink 
              to="/" 
              className="btn btn-outline-primary px-4 py-2" 
              style={{
                fontWeight:"500"
              }}
            >
              Learn More
            </NavLink>
          </div>

          </div>
        </div>  
      </div> 
    </div>  
    
    <div style={{backgroundColor :"#F3F5FA"}}>
     <div style={{paddingTop:"130px" , paddingBottom:"130px"}}>
       <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-12">
            <h2 style={{color :"#37517E"}}>Eum ipsam laborum deleniti <strong> velit pariatur architecto aut nihil</strong></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

                  <div className="accordion pt-3" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span className="badge badge-primary  mr-3">01</span>consectetur a erat nam at lectus urna duis?
                          </button>
                        </h2>
                      </div>
                  
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                          <p> pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span className="badge badge-primary mr-3">02</span> Feugiat scelerisque varius morbi enim nunc?
                          </button>
                        </h2>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                          <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span className="badge badge-primary  mr-3">03</span> Dolor sit amet consectetur adipiscing elit?
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                          <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis </p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-5">
              <img src={logo} alt="" className="img-fluid"/>
            </div>
          </div>
       </div>
      </div>               
    </div>

  <div  style={{backgroundColor:"white"}}>
    <div style={{paddingTop:"100px",paddingBottom:"100px"}}>
      <div className="container">
        <div className="row">

          <div className="col-md-6 col-sm-12" style={{paddingTop :"60px"}}>
              <img src={logo1} alt="" className="img-fluid"/>
          </div>

          <div className="col-md-6 col-sm-12">

            <h1 style={{color:"#37517E"}}>Voluptatem dignissimos provident quasi corporis voluptates</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            HTML <span className="float-right">100%</span> 
            <div className="progress mb-2">
              <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            CSS <span className="float-right">90%</span>
            <div className="progress mb-2">
              <div className="progress-bar  " role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            JAVASCRIPT <span className="float-right">75%</span>
            <div className="progress mb-2">
              <div className="progress-bar " role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            PHOTOSHOP <span className="float-right">55%</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>            
  );
};

export default About; 
