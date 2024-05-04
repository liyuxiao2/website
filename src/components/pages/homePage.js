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

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#f9f6dd' : '#f9f6dd',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'system-ui',
    fontSize: 15,
    margin: 50,
  }));

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


                <Grid item xs={8}>
                    <Item>Hey there! I'm Liyu, a high school student with a burning passion for website design, computer science, and all things mathematical. This website is my digital playground, where I showcase my projects, share my thoughts, and connect with fellow enthusiasts like you</Item>
                </Grid>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

                <Stack direction = "row" spacing={(1)}>
                    <IconButton  href = "https://github.com/liyuxiao2">
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