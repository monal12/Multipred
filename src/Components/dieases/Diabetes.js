import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar"

export default function Diabetes() {
  const navigate=useNavigate()
  const [formData, setFormData] = 
  useState({
    Pregnencies: '',
    Glucose: '',
    Bloodpressure: '',
    Skinthickness: '',
    Insulin: '',
    BMI: '',
    Diabetespredgreefunction: '',
    Age: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/predictdiabetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        navigate('/finaloutput',{state: {res1:result,res2:"diabeties"}})
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
      <h1 class="d-flex justify-content-center"><em>Diabetes Prediction</em></h1>
    <form class="d-flex justify-content-center" onSubmit={handleSubmit}>
    <fieldset>
    <div class="mt-4 form-group ">
    <input type="text" class="form-control" name="Pregnencies" id="Pregnencies" value={formData.Pregnencies} onChange={handleInputChange} placeholder="No of pregnacies"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Glucose" id="Glucose" value={formData.Glucose} placeholder="Glucose" onChange={handleInputChange}/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Bloodpressure" id="Bloodpressure" value={formData.Bloodpressure} placeholder="Blood Pressure(in mmHg)" onChange={handleInputChange}/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Skinthickness" id="Skinthickness" value={formData.Skinthickness} placeholder="Skin Thickness(in mm)" onChange={handleInputChange}/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Insulin" id="Insulin" value={formData.Insulin} placeholder="Insulin (in µU/ml)" onChange={handleInputChange}/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="BMI" id="BMI" value={formData.BMI} placeholder="BMI" onChange={handleInputChange}/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Diabetespredgreefunction" id="Diabetespredgreefunction" value={formData.Diabetespredgreefunction} placeholder="Diabetes Pedigree Function" onChange={handleInputChange}/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Age" id="Age" value={formData.Age} placeholder="Age (in years)" onChange={handleInputChange}/>
  </div>
  <button type="submit" class="mt-2 btn btn-primary">Predict</button>
  </fieldset>
</form>
    </div>
    </div>
  )
}
