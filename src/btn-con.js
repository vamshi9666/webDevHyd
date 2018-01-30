import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
 
import '../src/css/btn.css';

class btn extends Component{
    render(){
        return(
            <ButtonToolbar className="btn_con row " >
                <Button bsSize="large col-3" >
                facebook
                </Button>
                <Button bsSize="large col-3" >
                git-hub
                </Button>
                <Button bsSize="large col-3" >
                twitter
                </Button>
                <Button bsSize="large col-3" >
                meetup
                </Button>
                
            </ButtonToolbar>    
        );
    }
}

export default btn;