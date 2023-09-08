import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./pages/CSS/App.css"
import { BottomNavigation} from "@mui/material";
import { BottomNavigationAction } from '@mui/material';





function Layout() {
    return(

          <BottomNavigation 
              showLabels 
              sx={{
                bgcolor: '#808080',
              }}
          >
                <BottomNavigationAction label=  {<Link to = "Home" > Home </Link>}/>
                <BottomNavigationAction label = {<Link to = "Header" > About me </Link>} />
                <BottomNavigationAction label= {<Link to= "Contact" > Contact</Link> } />
                <BottomNavigationAction label=  {<Link to = "Courses" > Courses </Link>}/>


          </BottomNavigation>

      
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
