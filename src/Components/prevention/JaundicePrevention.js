import React from 'react'
import background from '../../images/background.jpg'
import Navbar from "../Navbar";

function JaundicePrevention() {
  return (
    <div>
      <Navbar/>
    <div style={{backgroundImage: `url(${background})`, height: '120vh'}}>
    <div className='gradient' style={{height: '120vh', color: 'white', marginLeft: "200px", marginRight: "200px"}}>
    
    <div style={{ width: "1000px", marginLeft: "50px"}}>
    <h1>Steps to cure Jaundice</h1>
    <br/>
   <b> Medication</b>
<br/>
Treatment of Underlying Conditions: Medications may be prescribed to address the underlying cause of jaundice. For example:
<ul>
<li>Antiviral medications for viral hepatitis.</li>
<li>Corticosteroids or other immunosuppressive drugs for autoimmune hepatitis.</li>
<li>Ursodeoxycholic acid (UDCA) for certain liver conditions involving bile duct issues.</li>
<li>Antibiotics or medications to dissolve gallstones in cases of obstructive jaundice due to gallstones.</li>
<li>Medications to manage symptoms such as itching or discomfort associated with jaundice.</li>
</ul>
Liver Supportive Medications: Certain medications may support liver function or alleviate symptoms associated with liver dysfunction:
<ul>
  <li>Vitamin K supplements may help manage coagulation abnormalities associated with liver disease.
Lactulose or other medications to manage hepatic encephalopathy (confusion and altered consciousness due to liver dysfunction).</li>
  <li>Antioxidants such as vitamin E may be used to protect liver cells from oxidative damage.</li>
</ul>
<b>Exercise:</b>
<br/>
While exercise itself does not directly treat jaundice, it plays a crucial role in overall health and may indirectly support liver function and recovery.Regular physical activity can:
<ul>
<li>Aid in weight management: Maintaining a healthy weight reduces the risk of fatty liver disease and other liver conditions associated with obesity.</li>
<li>Improve insulin sensitivity: Regular exercise can help control blood sugar levels, reducing the risk of non-alcoholic fatty liver disease (NAFLD) and type 2 diabetes, which are risk factors for liver dysfunction.</li>
<li>Enhance cardiovascular health: Cardiovascular exercise improves circulation, which may support liver function and overall health.</li>
<li>Boost mood and reduce stress: Exercise releases endorphins, which can improve mood and reduce stress, potentially benefiting liver health indirectly.</li>
</ul>
<b>Lifestyle Modifications:</b>
<ul>
  <li>Healthy Diet: Consuming a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats supports liver health and overall well-being.</li>
  <li>Avoid Alcohol: For individuals with liver disease or jaundice, abstaining from alcohol is crucial to prevent further liver damage.</li>
  <li>Stay Hydrated: Drinking an adequate amount of water helps flush toxins from the body and supports liver function.</li>
  <li>Avoid Hepatotoxic Substances: Limit exposure to medications, chemicals, and substances that can harm the liver.</li>
  <li>Get Sufficient Sleep: Quality sleep is essential for overall health, including liver health and regeneration.</li>
</ul>
    </div>
    </div>
    </div>
    </div>
  )
}

export default JaundicePrevention