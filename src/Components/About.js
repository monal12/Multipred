import React from "react";
import img from "../images/aboutpage.jpg";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar/>
    <div style={{ backgroundColor: "lightblue"}}>
      <div  className="container">
      <h1 ><i>About Us</i></h1>
      <img className="rounded mx-auto my-3 d-block" src={img} alt="" style={{ width: "100vh", height: "60vh"  }} />
      <div>
        At HealthPredict, we understand the importance of early detection and
        prevention when it comes to health issues. Our innovative platform
        harnesses the power of cutting-edge technology and medical expertise to
        provide predictive analysis for a range of diseases, including diabetes,
        jaundice, malaria, pneumonia, and thyroid disorders.
        <br />
        <br/>
        <b>Our Mission:</b>
        <br />
        HealthPredict is driven by a singular mission: to empower individuals
        with the knowledge and tools to take proactive steps towards better
        health outcomes. We believe that by leveraging the latest advancements
        in machine learning and medical research, we can revolutionize the way
        diseases are detected and managed.
        <br />
        <br/>
        <b>How It Works:</b>
        <br />
        Using sophisticated algorithms and data analytics, HealthPredict
        analyzes various health parameters provided by users. These parameters
        may include medical history, lifestyle habits, genetic predispositions,
        and symptoms. Our platform then generates personalized risk assessments
        for multiple diseases, helping users understand their susceptibility and
        take appropriate preventive measures.
        <br />
        <br/>
        <b>Key Features:</b>
        <ul>
          <li><i>Comprehensive Disease Prediction:</i> HealthPredict offers predictions for a
        diverse range of diseases, covering common conditions like diabetes and
        pneumonia, as well as more specific disorders such as jaundice, malaria,
        and thyroid issues.</li>
        <li><i>Personalized Risk Assessment:</i>Our platform takes into account individual
        factors to provide tailored risk assessments, empowering users with
        actionable insights specific to their health profile.</li>
        <li><i>Early Detection:</i> By identifying potential health risks at an early
        stage, HealthPredict enables proactive intervention and lifestyle
        adjustments, potentially averting the onset or progression of diseases.
        User-Friendly Interface: With a simple and intuitive interface,
        HealthPredict ensures accessibility for users of all backgrounds and
        levels of technological proficiency.</li>
        <li><i>Confidentiality and Security:</i> We prioritize the confidentiality and
        security of user data, adhering to stringent privacy protocols to
        safeguard sensitive information.</li>
        </ul>
        <br />
        Whether you're seeking peace of mind, aiming to optimize your health, or
        managing chronic conditions, HealthPredict is your trusted partner on
        the journey to wellness. Join us today and take control of your health
        destiny!"
      </div>
    </div></div>
    </div>
  );
};

export default About;
