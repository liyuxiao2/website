import React from 'react';
import Divider from '@mui/joy/Divider/Divider';

import { Sheet } from '@mui/joy';

function MyInfo(props) {
    return(
        <>
            {props.content.map((item)=> (
                <div>
                    
                    <Divider> {item.title} </Divider> 
                    <Sheet sx={{bgcolor: '#808080'}} variant = "none"> {item.feed} </Sheet>
                    <img 
                        className= "App"
                        src={item.image}
                        alt={""}
                        style={{
                            width: item.size,
                            height: item.size + 20
                        }}
                     />
               </div>
            ))}
        </>
    )
}

export default MyInfo;