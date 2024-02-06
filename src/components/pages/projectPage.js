import React, {Component} from 'react';
import './CSS/App.css';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/material/Stack';



class ProjectPage extends Component{
    render(){
        return(
            <div className= 'App' >
                    <Divider> 
                        <Stack spacing = {10}>
                                <div className = "Projects"> <a href = "https://github.com/liyuxiao2/Fortopia">  Fortopia </a> </div>
                                <img src = "https://drive.google.com/drive/u/1/home"> </img>
                                <div className = "Projects"> Project 2 </div>
                                <div className = "Projects"> Project 3 </div>
                            
                        </Stack> 
                    
                    </Divider>

            </div>
        )
    }
}

export default ProjectPage;

