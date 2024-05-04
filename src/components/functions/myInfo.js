import React from 'react';
import Divider from '@mui/joy/Divider/Divider';

import { Sheet } from '@mui/joy';



function MyInfo(props) {
    return(
        <>
            {props.content.map((item)=> (
                <div>
                    
                    <Divider> {item.title} </Divider> 
                    <Sheet sx={{bgcolor: 'rgb(249,246,221)'}} variant = "plain">
                         
                         
                         <p> {item.feed} </p>
                         
                    </Sheet>
               </div>
            ))}
        </>
    )
}



export default MyInfo;