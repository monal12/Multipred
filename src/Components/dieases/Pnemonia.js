import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
let arr=[]


export default function Pnemonia() {
  const navigate=useNavigate()
  const [image,setImage]=useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = image;
    const link = document.createElement("a");
    // link.href = url;
    // link.download = arr[0];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    try {
      const response = await fetch('http://127.0.0.1:5000/pneumoniapredict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arr[0])
      });
      if (response.ok) {
        const result = await response.json();
        navigate('/finaloutput',{state: {res1:result,res2:"Pnemonia"}})
      } else {
        console.error('Failed to submit form');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  function handleChange(e) {
    console.log(e.target.files[0]);
    arr=[e.target.files[0].name]
    setImage(URL.createObjectURL(e.target.files[0]));

}
return (
  <div>
      <Navbar/>
    <div className='gradient' style={{height: '200vh', color: 'white'}}>
    <h1 className="d-flex justify-content-center"><em>Pneumonia Prediction</em></h1>
    <div className="d-flex justify-content-center">
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
    <div className="mt-4 mb-3" style={{width: '400px', height: '200px'}}>
      <label htmlFor="formFile" className="form-label">Upload image</label>
      <input className="form-control" type="file" id="image" name="image" onChange={handleChange}/>
      <img src={image} alt='no preview'/>
      <br />
      <button type="submit" className="mt-2 btn btn-primary">Predict</button>
    </div>
    </form>
  </div>
  </div>
  </div>
)
}
