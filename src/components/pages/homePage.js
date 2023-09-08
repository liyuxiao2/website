import React, {Component} from 'react';
import './CSS/App.css';
import MyInfo from '../functions/myInfo';
import Content from "/Users/liyuxiao/Documents/GitHub/website/src/components/functions/HomePage.json";




class HomePage extends Component{
    state = {
        content: Content
    }
    render(){

        return(
            <div className= 'App' >
                <MyInfo content = {this.state.content}/>
            </div>
        )
    }
}

export default HomePage;