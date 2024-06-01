import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

export default function PredictionPage() {
  const location = useLocation();
  const res = location.state;
  const Check = ({res}) => {
    if (res.trim()==='Diabetes') {
      return <div><Link to='/diabetes'>Click here to know more</Link></div>;
    }
    if (res.trim()==='Jaundice') {
      return <div><Link to='/jaundice'>Click here to know more</Link></div>;
    }
    if (res.trim()==='Malaria') {
      return <div><Link to='/malaria'>Click here to know more</Link></div>;
    }
    if (res.trim()==='Pnemonia') {
      return <div><Link to='/pnemonia'>Click here to know more</Link></div>;
    }
    if (res.trim()==='Thyroid') {
      return <div><Link to='/thyroid'>Click here to know more</Link></div>;
    }
  };
  return (
    <div>
      <Navbar/>
      <div className='gradient' style={{height: '100vh', color: 'white'}}>
      <div className="d-flex justify-content-center">
      <div className="mt-4 mb-3" style={{width: '400px', height: '200px'}}>
        You might have: {res}
        <Check res={res}/>
      </div>
    </div>
    </div>
    </div>
  )
  }
