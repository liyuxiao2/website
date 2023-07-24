import React from 'react';
import './App.css'

const Header = () => {
    const getYear = () =>{
        const day = new Date();
        return day.getDate();
    }
    return(
        <div className='App-link'>
            Date: {getYear()}
        </div>
    ) 
}

export default Header