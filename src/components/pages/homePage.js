import React from 'react';
import { Box, Typography, Divider, Grid, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const AboutMePage = () => {
  return (
    <Box sx={{ padding: '80px', maxWidth: '800px', margin: '0 auto'}}>
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
      {/* Social media icons */}
      <Stack direction="row" spacing={1} justifyContent="center">
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
  );
};

export default AboutMePage;
