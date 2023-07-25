import React, {Component} from 'react';
import './App.css'
import JSON from './db.json'
import NewsList from './newsList';

class Header extends Component{

    state = {
        content: JSON,
        count:0
    }

    getYear(){
        const date = new Date();
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        return day+ "/" + month + "/" + year;
    }


    render(){
        console.log(this.state.content)
        return(
            <header className='App'>
                <NewsList content = {this.state.content}
                />
                <p> Date: {this.getYear()}</p>
            </header>   
        ) 
    }
}

export default Header