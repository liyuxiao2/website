import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css"
import { BottomNavigation} from "@mui/material";
import { BottomNavigationAction } from '@mui/material';


function Layout() {
    return(
        <div className="App">
        <BottomNavigation 
            showLabels 
        >
            <BottomNavigationAction label = {<Link to = "Header" > Header </Link>} />
            <BottomNavigationAction label= {<Link to= "Contact" > Contact</Link> } />
            <BottomNavigationAction label="Nearby"  />
        </BottomNavigation>
        </div>
    )


}
function Navbar () {
    return (
      <nav>
        <Layout/>
      </nav>
    )
  }

  export default Navbar
