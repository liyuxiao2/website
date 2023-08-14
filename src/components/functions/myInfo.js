import React from 'react';
import Divider from '@mui/joy/Divider/Divider';
import { imageListClasses } from '@mui/material';
import { Sheet } from '@mui/joy';

function MyInfo(props) {
    return(
        <>
            {props.content.map((item)=> (
                <div>
                    
                    <Divider> {item.title} </Divider> 
                    <Sheet variant = "soft"> {item.feed} </Sheet>
                    <img 
                        className= "App"
                        src={item.image}
                        alt={'Photo of ' + item.name}
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