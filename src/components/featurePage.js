import React, {Component} from 'react';
import './CSS/App.css'
import JSON from './functions/FeaturePage.json'
import MyInfo from './functions/myInfo';

//Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


//Google Web Fonts
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

<link 
rel="stylesheet" 
href="https://fonts.googleapis.com/icon?family=Material+Icons" />;




//displays the about me text on the screen


//image


  



class Header extends Component{

    state = {
        content: JSON
    }


    render(){
        console.log(this.state.content)
        return(
            <header className='App'>
                <MyInfo content = {this.state.content}/>
            </header>  
        ) 
    }
}

export default Header;

