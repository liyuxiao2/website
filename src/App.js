import './components/pages/CSS/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './components/pages/homePage';
import ProjectPage from './components/pages/projectPage';



function App() {
  return (
    <div className='App-header'>
      <h1> Liyu Xiao </h1> 
      <Router>
        <Navbar/>
          <Routes> 
          <Route path = "Home" element = {<HomePage/>} />
            <Route path = "Project" element = {<ProjectPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

//alias firebase="`npm config get prefix`/bin/firebase"

export default App;
