import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

function Thyroid() {
  const navigate=useNavigate()
  const [formData, setFormData] = 
  useState({
    Age: '',
    T3: '',
    TT4: '',
    T4U: '',
    FTI: '',
    Sex: '',
    Sick: '',
    Pregnant: '',
    Surgery: '',
    Goitre: '',
    Tumor: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/predictthyroid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        let res=0
        if((result===1) || (result===0)){
          res=1
        }
        navigate('/finaloutput',{state: {res1:res,res2:"Thyroid"}})
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
    <div>
      <Navbar/>
    <div className='gradient' style={{height: '100vh', color: 'white'}}>
      <h1 class="d-flex justify-content-center"><em>Thyroid Prediction</em></h1>
    <form class="d-flex justify-content-center" onSubmit={handleSubmit}>
    <fieldset>
    <div class="mt-4 form-group ">
    <input type="text" class="form-control" name="Age" value={formData.Age} onChange={handleInputChange} placeholder="Age (in years)"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.T3} onChange={handleInputChange} name="T3" placeholder="T3"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.TT4} onChange={handleInputChange} name="TT4" placeholder="TT4"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.T4U} onChange={handleInputChange} name="T4U" placeholder="T4U"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.FTI} onChange={handleInputChange} name="FTI" placeholder="FTI"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.Sex} onChange={handleInputChange} name="Sex" placeholder="Sex"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.Sick} onChange={handleInputChange} name="Sick" placeholder="Sick"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.Pregnant} onChange={handleInputChange} name="Pregnant" placeholder="Pregnant"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.Surgery} onChange={handleInputChange} name="Surgery" placeholder="Surgery"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control"  value={formData.Goitre} onChange={handleInputChange} name="Goitre" placeholder="Goitre"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" value={formData.Tumor} onChange={handleInputChange} name="Tumor" placeholder="Tumor"/>
  </div>
  <button type="submit" class="mt-2 btn btn-primary">Predict</button>
  </fieldset>
</form>
    </div>
    </div>
  )
}

export default Thyroid