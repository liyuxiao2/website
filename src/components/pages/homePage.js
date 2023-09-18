import React, {Component} from 'react';
import './CSS/App.css';
import MyInfo from '../functions/myInfo';
import Content from "/Users/liyuxiao/Documents/GitHub/website/src/components/functions/HomePage.json";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const itemData = [
    {
        img: 'https://static.vecteezy.com/system/resources/previews/004/194/259/non_2x/doodle-math-objects-border-free-vector.jpg',
        title: 'background',
    },   
    {
        img: "https://www.shutterstock.com/image-illustration/back-school-background-black-chalk-250nw-16798531.jpg",
        title: 'book list',
    },
    {
        img: 'https://images.theconversation.com/files/121885/original/image-20160510-20731-1pf8nwv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
        title: 'chemistry',
    }
]


export function StandardImageList(){
    return(
    <ImageList sx={{width: 1220, height: 200}} cols = {3} rowHeight = {164}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
        ))}
    </ImageList>
    )
}

class HomePage extends Component{
    state = {
        content: Content,
    }

    render(){

        return(
            <div className= 'App' >
                <StandardImageList/>
                <MyInfo content = {this.state.content}/>
            </div>
        )
    }
}

export default HomePage;