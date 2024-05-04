import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./pages/CSS/App.css"
import { BottomNavigation} from "@mui/material";
import { BottomNavigationAction } from '@mui/material';





function Layout() {
    return(

          <BottomNavigation 
              showLabels 
              sx={{
                bgcolor: 'rgb(249,246,221)',
              }}
          >
                <BottomNavigationAction className = "App" label=  {<Link to = "Home" > Home </Link>}/>
                <BottomNavigationAction className = "App"  label= {<Link to= "Project" > Projects </Link> } />


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
