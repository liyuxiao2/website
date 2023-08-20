import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./pages/CSS/App.css"
import { BottomNavigation} from "@mui/material";
import { BottomNavigationAction } from '@mui/material';
import HomePage from './pages/homePage';


function Layout() {
    return(
        <div className="App">
        <BottomNavigation 
            showLabels 
        >
            <BottomNavigationAction label=  {<Link to = "Home" > Home </Link>}/>
            <BottomNavigationAction label = {<Link to = "Header" > About me </Link>} />
            <BottomNavigationAction label= {<Link to= "Contact" > Contact</Link> } />
            <BottomNavigationAction label=  {<Link to = "Courses" > Courses </Link>}/>
            
        </BottomNavigation>
        </div>
    )


}
function Navbar () {
    return (
      <nav className>
        <Layout/>
      </nav>
    )
  }

  export default Navbar
