import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './components/pages/homePage';
import ProjectPage from './components/pages/projectPage';
import { Box } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from "react";
import backgroundImage from './Background.jpeg';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Kree{bull}ay{bull}tiv{bull}ee
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        noun
      </Typography>
      <Typography variant="body2">
      to generate new ideas, concepts, or solutions through imagination and original thinking.
      </Typography>
    </CardContent>
  </React.Fragment>
);

function App() {
  return (
    <Router>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Box sx={{ paddingTop: '10px' }}>
          <Navbar/>
          <Typography variant="h2" textAlign="center" sx={{ fontFamily: 'body1', color: 'white', fontWeight: "700" }}>
            Liyu Xiao
          </Typography>

          <div style={{ maxWidth: 300, margin: 'auto' }}>
            {card}
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
