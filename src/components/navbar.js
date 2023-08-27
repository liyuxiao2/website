import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./pages/CSS/App.css"
import { BottomNavigation, ThemeProvider} from "@mui/material";
import { BottomNavigationAction } from '@mui/material';
import HomePage from './pages/homePage';

const primary = {
  main: '#1976d2',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
};


function Layout() {
    return(
        <div className="App">
        <BottomNavigation 
            showLabels 
        >
            <ThemeProvider  theme ={primary}>
              <BottomNavigationAction label=  {<Link to = "Home" > Home </Link>}/>
              <BottomNavigationAction label = {<Link to = "Header" > About me </Link>} />
              <BottomNavigationAction label= {<Link to= "Contact" > Contact</Link> } />
              <BottomNavigationAction label=  {<Link to = "Courses" > Courses </Link>}/>
            </ThemeProvider>
            
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
