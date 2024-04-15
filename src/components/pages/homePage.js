import React, {Component} from 'react';
import './CSS/App.css';
import MyInfo from '../functions/myInfo';
import Content from "/Users/liyuxiao/Documents/GitHub/website/src/components/functions/HomePage.json";
import Content1 from "/Users/liyuxiao/Documents/GitHub/website/src/components/functions/Paragraph2.json";
import { Divider } from '@mui/joy';
import { Stack } from '@mui/system';







class HomePage extends Component{
    state = {
        content: Content,
        content1: Content1
    }

    render(){

        return(
            <Stack spacing = {5} className = "App">
                <MyInfo content = {this.state.content}/>


                <image ref = "picture of me jitt"> liyu </image>
                <MyInfo content = {this.state.content1}/>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

                <Divider>
                <button className = "App-Header" href = "https://github.com/liyuxiao2/Fortopia"> Link to Linkedin </button>
                <button  className = "App-Header" href = "https://github.com/liyuxiao2/Fortopia"> Link to Github </button>
                <button className = "App-Header" href = "https://github.com/liyuxiao2/Fortopia"> Link to Gmail </button>
                </Divider>
            </Stack>

        )
    }
}

export default HomePage;