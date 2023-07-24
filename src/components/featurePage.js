import React, {Component} from 'react';
import './App.css'

class Header extends Component{

    state = {
        name: 'Francis',
        title: 'website',
        keywords:'',
        count:0
    }

    inputNameHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            keywords: ''
        })
    }

    addOne = () =>{
        this.setState((state, props)=>({
            count: state.count + 1
        }))
    }

    getYear(){
        const date = new Date();
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        return day+ "/" + month + "/" + year;
    }

    render(){

        
        return(
            <header>
                
                <div className='App-link'> Date {this.getYear()} </div>

                <br/>

                <div>Enter your name </div>

                <input  className='App'
                    onChange={this.inputNameHandler}
                />

                <div> {this.state.count} </div>
                <button onClick={ ()=> this.addOne() } >click on me</button>
            </header>   
        ) 
    }
}

export default Header