import React, { Component } from 'react';
import btn from '../src/btn-con';
import { Button } from 'react-bootstrap';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className=" img-fluid">
          <div className="intro" > 
               
               <ul>
                 <h1 className="intro-font" >
                   WEB DEV
                 </h1>
                 <h1 className="intro-font">
                   HYDERABAD
                 </h1>  
                  <h3 className="intro-font">WebXR . Web Assembly . Web Frameworks . Web Technologies </h3> 
                  <h3 className="intro-font">
                  Full Stack Web Development . Web APIs . UI/UX . MVC
                  </h3>
               </ul>
               <btn/>

          </div>
      </div>
    );
  }
}

export default App;
 