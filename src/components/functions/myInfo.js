import React from 'react';

function MyInfo(props) {
    return(
        <>
            {props.content.map((item)=> (
                <div>
                    <h1> {item.title} </h1> 
                    <p> {item.feed} </p>
               </div>
            ))}
        </>
    )
}

export default MyInfo;