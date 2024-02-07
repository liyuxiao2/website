import React from 'react';
import Divider from '@mui/joy/Divider/Divider';

import { Sheet } from '@mui/joy';

function MyInfo(props) {
    return(
        <>
            {props.content.map((item)=> (
                <div>
                    
                    <Divider> {item.title} </Divider> 
                    <Sheet sx={{bgcolor: 'rgba(0, 128, 255, 0.02)'}} variant = "none"> {item.feed} </Sheet>
               </div>
            ))}
        </>
    )
}

export default MyInfo;