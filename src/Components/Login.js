import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = 
    useState({
      email: '',
      password: ''  
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const result = await response.json();
          if(result!=="fail"){
            navigate('/Home',{state:result})
          }else{
            navigate('/')
          }
        } else {
          console.error('Failed to submit form');
          // Handle failure, e.g., show an error message
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      // Parse the input value as a number
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

  return (
    <div className='bg-nav text-light' style={{height: "759px"}}>
        <h2>MultiPred</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className=' mt-200 display-3'>Welcome to Multipred!!<br/>Do your Checkup Now</div>
                </div>
                <div className='col-md-4' style={{marginTop:"140px"}}>
                    <div className='card'>
                        <div className='card-body'>
                            <form className='form mt-3' onSubmit={handleSubmit}>
                                <label>Email</label><br/>
                                <input type='email' className='form-control' name="email" onChange={handleInputChange}/><br/>
                                <label>Password</label><br/>
                                <input type='password' className='form-control' name="password" onChange={handleInputChange}/><br/><br/>
                                <input type='submit' className='btn btn-primary btn-block btn-lg form-control' value="Login"/>
                            </form>
                            <p className='mt-3 mx-5'>Not a member? <a href="/Register">Create Account</a></p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Login