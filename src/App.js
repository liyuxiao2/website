import './components/pages/CSS/App.css';
import Header from './components/pages/featurePage';
import ContactPage from './components/pages/contactPage';
import CoursesPage from './components/pages/coursesPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './components/pages/homePage';



function App() {
  return (
    <div className='App-header'>
      <h1> Liyu Xiao's Tutoring Service </h1> 
      <Router>
        <Navbar/>
          <Routes> 
          <Route path = "Home" element = {<HomePage/>} />
            <Route path = "Header" element = {<Header/>} />
            <Route path = "Contact" element = {<ContactPage/>} />
            <Route path = "Courses" element = {<CoursesPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

//alias firebase="`npm config get prefix`/bin/firebase"

export default App;
