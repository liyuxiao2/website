import './components/App.css';
import Header from './components/featurePage';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/navbar';



function App() {
  return (
    <div className='App-header'>
      <h1> Hey I'm Liyu Xiao  </h1> 
      <Router>
        <Navbar/>
          <Routes> 
            <Route path = "/" element = {<Header/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
