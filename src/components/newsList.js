import React from 'react';

const newsList = (props) => {
    console.log(props)
    return(
        <>
            {props.content.map((item)=> (
                <div>
                    <h3> {item.title} </h3>
                    <div> {item.feed} </div>

                </div>
            ))}
        </>
    )
}

export default newsList;