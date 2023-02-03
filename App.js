import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState} from 'react'


function App() {

const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=4eb4970f575c95023d3a55be6941e284'



  return (
   <html>






<head>

 </head>
  
<body>
    
<meta name="theme-color" content="#4CAF50" />

    <div className="App">
   
      <div className="container">

        <div className="top">

          <div className="test">
            <p>Test</p>

          </div>

          <div className="location">
          <p>Da Nang</p>
          </div>

          <div className="temp">
            <h1>60°F <img src={require('./assets/clouds2.png')} width="100" height="75" /> </h1>
          </div>

          <div className="description">
             <p>Clouds</p>
          </div>

        </div>

      <div className="bottom ">

<div className="feels" >
  <p>Feels Like:</p>
<p className = "bold">65°F</p>

</div>

<div className="humidity">
  <p>Humidity</p>
<p className = "bold">85%</p>

</div>

<div className="wind">
<p>Wind Speed</p>
  <p className = "bold">12 MPH</p>
 
</div>

        </div>


      </div>
   
    </div>

    </body>
    </html>
  );
}

export default App;

