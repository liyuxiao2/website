import React, {Component} from 'react';
import './CSS/App.css';
import Divider from '@mui/joy/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';



class ContactPage extends Component{
    render(){
        return(
            <div className= 'App' >
                <Divider> <EmailIcon/> Email </Divider>
                <a href="mailto:liyuxiao2@gmail.com"> liyuxiao2@gmail </a>

                <Divider> <PhoneIcon/> Phone </Divider>
                <a href = "tell: 647-894-2609"> 647-894-2609</a>

                <Divider> <CheckCircleIcon/> Availability </Divider>
                <p>  Tutoring services offered in Markham, Richmond Hill, and online</p>

                <Divider> <WatchLaterIcon/> Opening Hours </Divider>
                <p> Monday 3 - 7 P:M </p>
                <p> Tuesday 3 - 7 P:M </p>
                <p> Wednesday 3 - 7 P:M </p>
                <p> Thursday 3 - 7 P:M </p>
                <p> Friday 3 - 7 P:M </p> 
                <p> Saturday 4 - 10 P:M </p>

            </div>
        )
    }
}

export default ContactPage;

