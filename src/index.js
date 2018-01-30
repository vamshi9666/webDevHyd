import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
class Total extends Component{
    render(){
        return(
         <div className="img-fluid bg" >   
            <div className="body img-fluid" >
                <div className="intro">
                   <App/>
                </div>
            </div>
         </div>   

        );

    }
}

ReactDOM.render(<Total/>, document.getElementById('root'));
registerServiceWorker();
