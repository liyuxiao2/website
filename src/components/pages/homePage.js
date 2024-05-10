import React from 'react';
import { Box, Typography, Divider, Grid, IconButton, Stack } from '@mui/material';
import CardContent from "@mui/material/CardContent";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant = "body1" color = "red.main"> Creative </Typography>
      <Typography variant="h4" component="div">
      krɪ{bull}eɪ{bull}tɪv
      </Typography>
      <Typography sx={{ mb: 1.5 }}>noun</Typography>
      <Typography 
       variant="body1"
       sx={{
         fontFamily: "body1",
         color: "brown.main",
         fontWeight: "700",
         zIndex: 1,
       }}
     >
        to generate new ideas, concepts, or solutions through imagination and
        original thinking.
      </Typography>
    </CardContent>
  </React.Fragment>
);

const AboutMePage = () => {
  return (
    <Box sx={{ padding: '80px', maxWidth: '800px', margin: '0 auto'}}>
      <div style={{ maxWidth: 400, margin: "auto", zIndex: 1 }}>
            {card}
      </div>
      <Divider sx={{ marginBottom: '20px' }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant = "body1">
            Hello! I'm Liyu Xiao, a passionate web developer with a keen eye for design and a love for creating user-friendly web experiences.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            My journey in web development started during my college years, where I discovered my passion for coding and building things for the web.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" >
            Over the years, I've honed my skills in HTML, CSS, JavaScript, and various web development frameworks and libraries.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" >
            When I'm not coding, you can find me exploring new technologies, reading books, or enjoying the great outdoors.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" >
            below are some of my hobbies
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
};

export default AboutMePage;
