import React from 'react'
import { useLocation } from "react-router-dom";
import sad from '../images/sad.png'
import happy from  '../images/happy.png'
import Navbar from "./Navbar";

const Check = ({res}) => {
    if (res===1) {
      return <div>
        <h1 className='d-flex justify-content-center' style={{color: 'white'}}>Unfortunately, You Have The Disease.</h1>
        <img className="rounded mx-auto d-block" src={sad} alt="" style={{ position: "absolute", top: "150px", left: "180px"}} />
      </div>
    }else{
      //  return <div className="d-flex justify-content-center" style={{backgroundImage: `url(${happy})`, color:'white', height: '88vh'}}><h1 ></h1></div>;
      return <div>
        <h1 className='d-flex justify-content-center' style={{color: 'white'}}>You don't have the Disease.</h1>
        <img className="rounded mx-auto d-block" src={happy} alt="" style={{ position: "absolute", top: "150px", left: "180px"}} />
      </div>
    }
}

function FinalOutput() {
  const location = useLocation();
  const {res1,res2} = location.state;
  const lin=res2+"Prevention"
  console.log(lin)
  return (
    <div>
      <Navbar/>
    <div className='gradient' style={{height: '91.8vh'}}>
    <Check res={res1}/>
    <div className='d-flex justify-content-center'>
    <a href={`/${lin}`} style={{color: 'white'}}>Click here to know more</a>
    </div>
    </div>
    </div>
  )
}

export default FinalOutput