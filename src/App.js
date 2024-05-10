import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/pages/homePage";
import ProjectPage from "./components/pages/projectPage";
import { Box, Stack, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import backgroundImage from "./Images/Background.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AboutMe from "./components/pages/aboutMe";



function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: -10,
        padding: 0,
        overflowX: "hidden", // Hide horizontal overflow
      }}
    >
      <Router>
        <Box
          sx={{
            paddingTop: "10px",
            position: "relative",
            flex: 1,
            zIndex: 0,
          }}
        >
          <Navbar style={{ position: "absolute", top: 0, left: 0 }} />
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontFamily: "body1",
              color: "white",
              fontWeight: "700",
              zIndex: 1,
            }}
          >
            Liyu Xiao
          </Typography>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path ="/about me" element = {<AboutMe />} />
          </Routes>

          {/* Social media icons */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1 }}
          >
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
      </Router>
    </div>
  );
}

export default App;
