import React,{useState} from 'react'
import { NavLink } from "react-router-dom";

const Contact=()=>{
  const [users,setUsers]=useState({
    // name :"",
    // email:"",
    // subject:"",
    // bio :""
  });

  const handleChange =(e)=>{
    setUsers({...users, [e.target.name] : e.target.value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(users);
  };

  return (
    <div style={{background:"white"}}>
      <div className="pt-5">
        <div className="container">

          <div className="row">
            <div className="col-md-12 text-center">
            <h2 style={{color:"#37517E",fontWeight:"bold"}}>CONTACT</h2>
              <hr style={{ width:"100px",height:"2px",backgroundColor:"#47B2E4" }} />
              <p className="lead text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-12">
              
            <div className="card" style={{borderTop:"3px solid #37517E",borderBottom:"3px solid #37517E"}}>
                <div className="card-body">

                  <div className="d-flex flex-row">
                    <div>
                      <i className="fas fa-map-marker-alt pr-3 text-primary"></i>
                    </div>

                    <div>
                      <span style={{color:"#37517E",fontWeight:"bold"}}>Location:</span>
                      <p>A108 Adam Street, New York, NY 535022</p> 
                    </div>
                  </div>
                
              
                  <div className="d-flex flex-row">
                    <div>
                      <i className="fas fa-envelope pr-3  text-primary"></i>
                    </div>

                    <div>
                      <span style={{color:"#37517E",fontWeight:"bold"}}>Email:</span>
                      <p>info@example.com</p> 
                    </div>
                  </div>
                
             

                  <div className="d-flex flex-row pb-4">
                    <div>
                      <i className="fas fa-phone-alt pr-3 text-primary"></i>
                    </div>

                    <div>
                      <span style={{color:"#37517E",fontWeight:"bold"}}>Call:</span>
                      <p>+1 5589 55488 55s</p> 
                    </div>
                  </div>

                  <div className="mapouter"><div className="gmap_canvas"><iframe  width="393px" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://embedgooglemap.net/134/">torrentz2</a></div></div>

                

                </div>
              </div>
            </div>

            
        <div className="col-lg-7 col-md-12">

          <div className="card"  style={{borderTop:"3px solid #37517E",borderBottom:"3px solid #37517E"}}>

            
            <div className="card-body">

                  <form onSubmit={handleSubmit}>

                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="name"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <label htmlFor="emailemail">Your Email</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="email" 
                          onChange={handleChange}
                        />
                      </div>

                    </div>

                    <div className="form-group">
                      <label htmlFor="Subject">Subject</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        onChange={handleChange}
                      />
                    </div>


                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea  
                        name="bio" 
                        cols="30" 
                        rows="10" 
                        className="form-control"
                        onChange={handleChange}
                      > 
                      </textarea>
                    </div>

                    <div className="text-center pt-5">
                      
                    <button type="submit" className="btn btn-primary text-center">Send Message</button>
                     </div> 

                  </form>

                
                </div>
              </div>
            </div> 
          </div>
        </div>
          <div style={{background:"#F3F5FA"}} >
            <div className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 style={{color:"#37517E",fontWeight:"bold"}}>Join Our Newsletter</h2>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              
                      <input 
                            type="text" 
                            className="form-control redius" 
                            name="subject" 
                      />
                      <div className="pt-3">
                        <button className="btn btn-primary">Subscribe</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{background:"white"}}>
            <div className="footer-inner py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">

                    <h2>ARSHA</h2>
                    <span>A108 Adam Street</span>
                    <br/>
                    <span>New York, NY 535022</span>
                    <br/>
                    <span>United States</span>

                    <div className="pt-5">
                      <span className="font-weight-bold">Phone:</span> <span>+1 5589 55488 55</span>
                      <br/>
                      <span className="font-weight-bold">Email:</span> <span>info@example.com</span>
                    </div>

                  </div>
                  <div className="col-md-3">

                    <p>Useful Links</p>

                    
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Home</a></span>
                    <br/>
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">About Us</a></span>
                    <br/>
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Services</a></span>
                    <br/>
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Terms Of Services</a></span>
                    <br />
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Privacy Policy</a></span>

                  

                  </div>
                  <div className="col-md-3">

                    <p>Our Services</p>

                    
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Web Design</a></span>
                    <br />
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#"> Web Devolopment</a></span>
                    <br />
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Product Manegment</a></span>
                    <br />
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Marketing</a></span>
                    <br />
                    <i className="fas fa-chevron-right pr-3 text-primary pt-4"></i> <span><a href="#">Graphic Design</a></span>


                  </div>
                  <div className="col-md-3 ">

                    <p>Our Social Network</p>

                    <span>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</span>
                    <br/>

                    <div className="pt-4">
                
                    <a href="#" className="pr-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-skype"></i></a>
                    <a href="#" className="pr-3"><i className="fab fa-linkedin"></i></a>

                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          
      <div style={{background:"#37517E"}}>
        <div className="container py-4">

          <div className="row">
            <div clasName="col-md-12">
              <p className="text-white">© Copyright Arsha. All Rights Reserved <span className="float-right">Designed by <a href="https://www.facebook.com/ruhithassan.rafi" target="_blank">Ruhit Hassan</a></span></p>
            </div>
          </div>
        </div>
      </div>

        
      </div>
    </div>
  );
};

export default Contact; 
