import React, {Component} from 'react';
import './CSS/App.css';
import Content from '../functions/CoursesPage.json';
import MyInfo from '../functions/myInfo';


class CoursesPage extends Component{
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

export default CoursesPage;