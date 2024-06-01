import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "./Navbar";

const Appointment = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5aa8aly', 'template_cswpj7j', form.current, {
        publicKey: 'KsHDixjiFnd85Klse',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <Navbar/>
    <div className='gradient' style={{height: '91.5vh', overflowX: 'hidden'}}> 
        <h1 className='d-flex justify-content-center flex-column' style={{marginTop:'70px', marginLeft: "600px"}}>Contact Us</h1>
      <form className='d-flex justify-content-center flex-column' ref={form} onSubmit={sendEmail} style={{ marginLeft:"600px", marginRight: "600px"}}>
            <div className="mt-4 form-group"> 
                <label for="name">Name:</label><br/>
                <input class="form-control" type="text" id="name" name="user_name" required/><br/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label><br/>
                <input class="form-control" type="email" id="email" name="user_email" required/><br/>
            </div>
            <div className="form-group">
                <label for="message">Message:</label><br/>
                <textarea class="form-control" rows={5} cols={50} id="message" name="message" required></textarea><br/><br/>
            </div>
            <div className="form-group">
                <button type="submit" value="Send" className="btn btn-primary">Submit</button>
            </div>
            </form>
    </div>
    </div>
  )
}

export default Appointment;

