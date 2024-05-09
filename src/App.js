import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './components/pages/homePage';
import ProjectPage from './components/pages/projectPage';
import { Box,Stack, IconButton } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from "react";
import backgroundImage from './Background.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


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
        flexDirection: 'column',
        margin: 0, // Reset margin to ensure full viewport coverage
        padding: 0, // Reset padding
      }}
      >
        <Box sx={{ paddingTop: '10px', position: 'relative', flex: 1 }}>
          <Navbar style={{ position: 'absolute', top: 0, left: 0 }} /> {/* Add inline styles for positioning */}
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

          {/* Social media icons */}
        <Stack direction="row" spacing={1} justifyContent="center"  style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1}}>
          <IconButton href="https://github.com/liyuxiao2">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/liyu-xiao-593176206/">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="mailto:liyuxiao2@gmail.com">
            <EmailIcon />
          </IconButton>
        </Stack>
        </Box>


      </div>
    </Router>
  );
}

export default App;
