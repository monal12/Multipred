import { useState, useEffect } from 'react';
import Data from './data.csv';
import Papa from 'papaparse';
import './Symptoms.css'
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

  

function App() {
  const [arr,setArr]=useState([]);
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, { 
        skipEmptyLines: true 
      }).data;
      setData(...parsedData);
    };
    fetchData();
  }, []);

  const handleAdd = (e, index,value) => {
    console.log(value)
    setArr([...arr,value])
  };
  const predict = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ arr }),
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Prediction:', result.prediction);
            navigate('/prediction',{state: result.prediction})
        } else {
            console.error('Failed to get prediction');
        }
    } catch (error) {
        console.error('Error getting prediction:', error);
    }
};

  return (
    <div>
      <Navbar/>
    <div className='grad'>
      <div className='container'>
      <button onClick={()=>predict()} className="btn float-end btn-outline-primary">Predict</button>
      <div className='px-3 py-5'>
      {arr.map((value,index)=>(
      <button type="button" className="btn btn-primary mx-1 my-1 px-4">{value}</button>
      ))}
      </div>
      <h1>Enter Symptoms</h1>
            {data.map((value,index) => (
                <button type="button" className="btn btn-primary mx-1 my-1 px-4" key={index} onClick={(e)=>handleAdd(e,index,value)}>{value}</button>
            ))}
    </div>
    </div>
    </div>
  );
}

export default App;