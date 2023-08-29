import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./pages/CSS/App.css"
import { BottomNavigation} from "@mui/material";
import { BottomNavigationAction } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const primary = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});



function Layout() {
    return(
        <div className="App">
        <BottomNavigation 
            showLabels 
        >
          <ThemeProvider theme = {primary}>
              <BottomNavigationAction variant = "body2" label=  {<Link to = "Home" > Home </Link>}/>
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
