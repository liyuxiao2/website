import React, {Component} from 'react';
import './CSS/App.css';
import MyInfo from '../functions/myInfo';
import Content from "/Users/liyuxiao/Documents/GitHub/website/src/components/functions/HomePage.json";
import { Divider } from '@mui/joy';
import { Stack } from '@mui/system';







class HomePage extends Component{
    state = {
        content: Content,
    }

    render(){

        return(
            <Stack spacing = {7} className = "App">
                <MyInfo content = {this.state.content}/>
            </Stack>
        )
    }
}

export default HomePage;