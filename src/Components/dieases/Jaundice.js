import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';


function Jaundice() {
  const navigate=useNavigate()
  const [formData, setFormData] = 
  useState({
    Age: '',
    Gender: '',
    Total_Bilirubin: '',
    Direct_Bilirubin: '',
    Alkaline_Phosphotase: '',
    Alamine_Aminotransferase: '',
    Total_Protiens: '',
    Albumin: '',
    Albumin_and_Globulin_Ratio: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/predictjaundice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate('/finaloutput',{state: {res1:result,res2:"Jaundice"}})
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
      <h1 class="d-flex justify-content-center"><em>Jaundice Prediction</em></h1>
    <form class="d-flex justify-content-center" onSubmit={handleSubmit}>
    <fieldset>
    <div class="mt-4 form-group ">
    <input type="text" class="form-control" name="Age" value={formData.Age} onChange={handleInputChange} placeholder="Age"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Gender" value={formData.Gender} onChange={handleInputChange} placeholder="Gender"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Total_Bilirubin" value={formData.Total_Bilirubin} onChange={handleInputChange} placeholder="Total Bilirubin"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Direct_Bilirubin" value={formData.Direct_Bilirubin} onChange={handleInputChange}  placeholder="Direct Bilirubin"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Alkaline_Phosphotase" value={formData.Alkaline_Phosphotase} onChange={handleInputChange} placeholder="Alkaline Phosphotase"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Alamine_Aminotransferase" value={formData.Alamine_Aminotransferase} onChange={handleInputChange} placeholder="Alamine Aminotransferase"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Total_Protiens" value={formData.Total_Protiens} onChange={handleInputChange} placeholder="Total Protiens"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Albumin" value={formData.Albumin} onChange={handleInputChange} placeholder="Albumin"/>
  </div>
  <div class="mt-2 form-group">
    <input type="text" class="form-control" name="Albumin_and_Globulin_Ratio" value={formData.Albumin_and_Globulin_Ratio} onChange={handleInputChange} placeholder="Albumin and Globulin Ratio"/>
  </div>
  <button type="submit" class="mt-2 btn btn-primary">Predict</button>
  </fieldset>
</form>
    </div>
    </div>
  )
}

export default Jaundice