import React from "react";
import doctor from "../images/doctor.jpg";
import Carousel from "react-bootstrap/Carousel";
import men from "../images/men.jpg";
import women from "../images/women.jpg";
import women2 from "../images/women2.jpg";
import Navbar from "./Navbar";

import "./home.css";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <Navbar/>
      <div className="d-inline-flex main">
        <div className="px-3 align-self-center class text-center">
          <h1 className="heading">WE CARE ABOUT YOUR HEALTH</h1>
          <div>
            We are commited to provide good health facilities for all people all
            over the globe and provide an exceptional patient experience
          </div>
            <Link className="btn btn-primary mt-3" to="/Symptoms">
              Enter symptoms &rarr;
            </Link>
            <br/>
            <Link className="btn btn-primary mt-3" to="/Appointment">
              Book an appointment &rarr;
            </Link>
        </div>
        <img className="img" src={doctor} alt="Not Available" />
      </div>
      <div className="bg">
      <div className="mt-5 mx-5 d-inline-flex w-50">
        <hr />
        <h5>ABOUT US</h5>
      </div>
      <div className="d-inline-flex" style={{"font-family": "serif"}}>
        <div>
          <h1 className="mt-3 px-3 align-self-center ">
            <b>Welcome To Our Hospital</b>
            
          </h1>
          <div className="details">
            Welcome to Multipred, where cutting-edge technology meets
            compassionate healthcare from the comfort of your home!
            <br />
            <br/>
            With our innovative online platform, you can receive expert medical
            advice and accurate disease predictions without leaving your couch.
            <br />
            Simply input your symptoms into our user-friendly interface, and our
            advanced algorithms will analyze your information to provide you
            with a preliminary diagnosis instantly. But that's not all - for
            even greater accuracy, you can upload your medical reports from
            pathology tests, enabling our system to tailor its recommendations
            specifically to you.
            <br />
            Join the thousands of satisfied users who have already benefited
            from our services. Experience the convenience of modern telemedicine
            with Multipred today!
            <br />
            <br />
            Don't wait - take control of your health journey now!
          </div>
        </div>
      </div>
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100 " src={women2} alt="First slide" />
            <Carousel.Caption>
              <h5>Ava Taylor</h5>
              <p>
                Multipred prioritize your health and well-being above all else.I
                love how easy it is to use the website! Within minutes, I
                received a comprehensive diagnosis based on my symptoms, and it
                was incredibly accurate.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={women} alt="Second slide" />
            <Carousel.Caption>
              <h5>Emma Brown</h5>
              <p>
                I've had nothing but positive experiences with this website.
                From the moment I landed on the homepage to receiving my
                diagnosis, everything has been seamless
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={men} alt="Third slide" />
            <Carousel.Caption>
              <h5>John Deo</h5>
              <p>
                The accuracy of the disease predictions is impressive. It's
                comforting to know that I can rely on this website for reliable
                medical guidance.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    <div>
    <div className="Box">
            <div
                style={{
                    color: "black",
                    textAlign: "right",
                    marginBottom:"50px",
                    fontFamily: "Young Serif",
                    fontSize:"20px",
                    paddingRight:"300px"
                    }}>
                
                Get to know more about us!
            </div>
            <div className="FooterContainer">
                <div className="Row">
                    <div className="Column">
                        <div className="Heading">About Us</div>
                        <div className="FooterLink"> 
                            Aim
                        </div>
                        <div className="FooterLink"> 
                            Vision
                        </div>
                        <div className="FooterLink"> 
                            Testimonials
                        </div>
                    </div>
                    <div className="Column">
                        <div className="Heading">Services</div>
                        <div className="FooterLink"> 
                            Tests
                        </div>
                        <div className="FooterLink"> 
                            Appointment
                        </div>
                        <div className="FooterLink">
                            Check up
                        </div>
                        <div className="FooterLink"> 
                            More
                        </div>
                    </div>
                    <div className="Column">
                        <div className="Heading">Contact Us</div>
                        <div className="FooterLink"> 
                            Uttar Pradesh
                        </div>
                        <div className="FooterLink">
                            Ahemdabad
                        </div>
                        <div className="FooterLink"> 
                            Indore
                        </div>
                        <div className="FooterLink"> 
                            Mumbai
                        </div>
                    </div>
                    <div className="Column">
                        <div className="Heading">Social Media</div>
                        <div className="FooterLink"> 
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </div>
                        <div className="FooterLink"> 
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </div>
                        <div className="FooterLink"> 
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </div>
                        <div className="FooterLink"> 
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}
