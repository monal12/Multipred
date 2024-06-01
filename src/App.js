import React from 'react'
import Home from './Components/home'
import Symptoms from './Components/Symptoms'
import Diabetes from './Components/dieases/Diabetes'
import Jaundice from './Components/dieases/Jaundice'
import Malaria from './Components/dieases/Malaria'
import Pnemonia from './Components/dieases/Pnemonia'
import PredictionPage from "./Components/PredictionPage"
import Thyroid from "./Components/dieases/Thyroid"
import FinalOutput from './Components/FinalOutput'
import DiabetiesPrevention from './Components/prevention/diabetiesPrevention'
import JaundicePrevention from './Components/prevention/JaundicePrevention'
import MalariaPrevention from './Components/prevention/MalariaPrevention'
import PnemoniaPrevention from './Components/prevention/PnemoniaPrevention'
import ThyroidPrevention from './Components/prevention/ThyroidPrevention'
import About from './Components/About'
import Appointment from './Components/Appointment'
import Login from './Components/Login'
import Register from './Components/Register'

import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";



export default function App() {
  return (
    <div>
    <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Symptoms" element={<Symptoms/>}/>
        <Route path='/prediction' element={<PredictionPage/>} />
        <Route path='/diabetes' element={<Diabetes/>}/>
        <Route path='/jaundice' element={<Jaundice/>}/>
        <Route path='/malaria' element={<Malaria/>}/>
        <Route path='/pnemonia' element={<Pnemonia/>}/>
        <Route path='/thyroid' element={<Thyroid/>}/>
        <Route path='/finaloutput' element={<FinalOutput/>}/>
        <Route path='/diabetiesPrevention' element={<DiabetiesPrevention/>}/>
        <Route path='/JaundicePrevention' element={<JaundicePrevention/>}/>
        <Route path='/MalariaPrevention' element={<MalariaPrevention/>}/>
        <Route path='/PnemoniaPrevention' element={<PnemoniaPrevention/>}/>
        <Route path='/ThyroidPrevention' element={<ThyroidPrevention/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

