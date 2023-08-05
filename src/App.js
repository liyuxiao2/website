import './components/CSS/App.css';
import Header from './components/featurePage';
import ContactPage from './components/contactPage';
import CoursesPage from './components/coursesPage';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/navbar';



function App() {
  return (
    <div className='App-header'>
      <h1> Hey I'm Liyu Xiao  </h1> 
      <Router>
        <Navbar className = 'App-header' />
          <Routes> 
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
