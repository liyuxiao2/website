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
                                <div className = "Projects"> 
                                        <a className = "Project-text" href = "https://github.com/liyuxiao2/Fortopia">  Fortopia </a> 
                                        <img className='center' src = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYStRdEFNmY-uUWvt_brow_CVptCuFjusY2vi_6PGUGZdKOQWLiSLLK_K0jYWtXyUeLeiwZZM6bzDzz4Zw4CHwZE343A-Q=s1600" />
                                </div>

                                <div className = "Projects"> Calculator </div>

                                <div className = "Projects"> Project 3 </div>
                            
                        </Stack> 
                    
                    </Divider>

            </div>
        )
    }
}

export default ProjectPage;

