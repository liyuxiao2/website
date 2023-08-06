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

const user = {
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    imageSize: 180
}

function Profile() {
    return (
      <>
        <img
          className= "App"
          src={user.image}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  



class Header extends Component{

    state = {
        content: JSON
    }


    render(){
        console.log(this.state.content)
        return(
            <header className='App'>
                <MyInfo content = {this.state.content}/>
                <Profile className = "center"/>
            </header>  
        ) 
    }
}

export default Header;

