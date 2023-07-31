import React, {Component} from 'react';
import './App.css'
import JSON from './db.json'



//displays the about me text on the screen
function MyInfo(props) {
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

//image

const user = {
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    imageSize: 180
}

function Profile() {
    return (
      <>
        <img
          className= "Header"
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
  

 function getYear(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return day+ "/" + month + "/" + year;
}

class Header extends Component{

    state = {
        content: JSON,
        count:0
    }


    render(){
        console.log(this.state.content)
        return(
            <header className='App'>
                <MyInfo content = {this.state.content}/>
                <p> Date: {getYear()}</p>
                <Profile/> 
            </header>  
        ) 
    }
}

export default Header