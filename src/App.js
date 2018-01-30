import React, { Component } from 'react';
import btn from '../src/btn-con';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './css/App.css';
import fbLogo from '../src/assets/index.png';
import twiLogo from '../src/assets/twi.png';
import meetLogo from '../src/assets/meet.png';
import gitLogo from '../src/assets/git.png';

class App extends Component {
  render() {
    return (
      <div className=" img-fluid">
          <div className="intro" > 
               
               <ul>
                 <h1 className="intro-font" >
                   WEB DEV
                 </h1>
                 <h1 className="intro-head">
                   HYDERABAD
                 </h1>  
                  <h3 className="intro-head2">WebXR . Web Assembly . Web Frameworks . Web Technologies </h3> 
                  <h3 className="intro-head2">
                  Full Stack Web Development . Web APIs . UI/UX . MVC
                  </h3>
               </ul>
               <hr></hr>
               <ButtonToolbar className="btn-con" >
                 <Button className="btn" bsSize="large"><img className=" img img-fluid" src={fbLogo} />facebook</Button>
                 <Button className="btn" bsSize="large"><img className=" img img-fluid" src={twiLogo}/>twitter</Button>
                 <Button className="btn" bsSize="large"><img className=" img img-fluid" src={meetLogo}/>meet-up</Button>
                 <Button className="btn" bsSize="large"><img className=" img img-fluid" src={gitLogo}/>git-hub</Button>
              
               </ButtonToolbar>
               <hr/>
               <div className="feed-con" >
                 <div className="fb-feed" >
                 <div class="fb-page" data-href="https://www.facebook.com/webdevhyd" data-tabs="timeline" data-width="600" data-height="450" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/webdevhyd" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/webdevhyd">Web Developers Hyderabad</a></blockquote></div>
                 </div>
                 <div className="twi-feed" ></div>
                
                 
               </div>
             
          </div>
      </div>
    );
  }
}

export default App;
 