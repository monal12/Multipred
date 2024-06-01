import React from 'react'
import background from '../../images/background.jpg'
import Navbar from '../Navbar'

function PnemoniaPrevention() {
  return (
    <div>
      <Navbar/>
    <div style={{backgroundImage: `url(${background})`, height: '130vh'}}>
    <div className='gradient' style={{height: '130vh', color: 'white', marginLeft: "200px", marginRight: "200px"}}>
    
    <div style={{ width: "1000px", marginLeft: "50px"}}>
    <h1>Steps to cure Pneumonia</h1>
    <br/>
    <b>Medications for Pneumonia Treatment:</b>
    <ul>
      <li>Antibiotics: If pneumonia is caused by bacteria, antibiotics are prescribed to kill the bacteria. The choice of antibiotic depends on factors such as the type of bacteria, severity of illness, and any underlying health conditions. Commonly used antibiotics include amoxicillin, azithromycin, clarithromycin, and levofloxacin.</li>
      <li>Antiviral Medications: For pneumonia caused by influenza virus or other viral infections, antiviral medications may be prescribed. These medications can help reduce the severity and duration of symptoms. Oseltamivir (Tamiflu) is an example of an antiviral drug used to treat influenza.</li>
      <li>Antifungal Medications: In cases of fungal pneumonia, antifungal medications such as fluconazole or voriconazole may be prescribed to treat the infection.</li>
      <li>Cough Suppressants and Bronchodilators: Medications may be used to relieve symptoms such as coughing and difficulty breathing. Cough suppressants help reduce coughing, while bronchodilators help open up airways to improve breathing.</li>
    </ul>
    <b>Supportive Care:</b>
    <ul>
      <li>Pain and Fever Relievers: Over-the-counter pain relievers such as acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) may be used to reduce fever and alleviate discomfort associated with pneumonia.</li>
      <li>Hydration: Adequate hydration is important to help loosen mucus and facilitate its clearance from the lungs. Drink plenty of fluids such as water, herbal tea, or clear broth.</li>
      <li>Rest: Rest is crucial for allowing the body to fight off the infection and recover. Avoid strenuous activities and get plenty of sleep.</li>
    </ul>
    <b>Respiratory Therapy:</b>
    <ul>
      <li>Incentive Spirometry: Respiratory therapy techniques such as incentive spirometry may be recommended to improve lung function and prevent complications such as atelectasis (collapsed lung tissue).</li>
    </ul>
    <b>Nutrition:</b>
    <ul>
      <li>Healthy Diet: Eating a balanced diet rich in fruits, vegetables, lean proteins, and whole grains provides essential nutrients that support the immune system and promote healing.</li>
    </ul>
    <b>Exercise:</b>
    <ul>
      <li>Light Physical Activity: While strenuous exercise may be difficult during pneumonia, light physical activity such as walking or gentle stretching may be beneficial. Exercise helps improve circulation, lung function, and overall well-being. However, it's important to listen to your body and avoid overexertion.</li>
      <li>Breathing Exercises: Deep breathing exercises and techniques such as diaphragmatic breathing can help expand lung capacity and improve oxygenation. Consult a healthcare provider or respiratory therapist for guidance on appropriate breathing exercises.</li>
    </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export default PnemoniaPrevention