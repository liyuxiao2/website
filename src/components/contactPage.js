import React, {Component} from 'react';
import './CSS/App.css';
import Divider from '@mui/joy/Divider';



class ContactPage extends Component{
    render(){
        return(
            <div className= 'App' >
                <Divider> Email me at </Divider>
                <a href="mailto:liyuxiao2@gmail.com">liyuxiao2@gmail </a>
            </div>
        )
    }
}

export default ContactPage;

