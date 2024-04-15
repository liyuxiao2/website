import React, {Component} from 'react';
import './CSS/App.css';
import MyInfo from '../functions/myInfo';
import Content from "/Users/liyuxiao/Documents/GitHub/website/src/components/functions/HomePage.json";
import Content1 from "/Users/liyuxiao/Documents/GitHub/website/src/components/functions/Paragraph2.json";
import { Stack } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';







class HomePage extends Component{
    state = {
        content: Content,
        content1: Content1
    }

    render(){

        return(
            <Stack spacing = {5} className = "App">
                <MyInfo content = {this.state.content}/>


                <MyInfo content = {this.state.content1}/>



                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

                <p/>
                <p/>
                <p/>
                <p/>
                <p/>

                <Stack direction = "row" spacing={(1)}>
                    <IconButton  href = "https://github.com/liyuxiao2/Fortopia">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton  href = "https://www.linkedin.com/in/liyu-xiao-593176206/">
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton  href = "mailto:liyuxiao2@gmail.com">
                        <EmailIcon/>
                    </IconButton>
                </Stack>
            </Stack>

        )
    }
}

export default HomePage;