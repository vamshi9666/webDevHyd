import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
 
import '../src/css/btn.css';

class btn extends Component{
    render(){
        return(
            <div>
                <Button className="btn" bsSize="large col-3" >
                facebook
                </Button>
                <Button className="btn" bsSize="large col-3" >
                git-hub
                </Button>
                <Button className="btn" bsSize="large col-3" >
                twitter
                </Button>
                <Button className="btn" bsSize="large col-3" >
                meetup
                </Button>
                
           </div>
        );
    }
}

export default btn;