import React,{useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import img from '../images/logo.png'

export default function Navbar() {
  let location= useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location])
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg bg-body-terti" style={{backgroundColor: '#4dbce8'}}>
        <div className="container-fluid">
        <img width="40px" height="40px" src={img} alt="" />
          <Link className="p-2 navbar-brand" to="/Home">MultiPred</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active": ""}`} aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active": ""}`}  to="/About">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <a className='btn btn-outline-primary' href="/" style={{marginRight: "20px"}}>Logout</a>
      </nav>
    </div>
  )
}
