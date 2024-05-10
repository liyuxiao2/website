import React from 'react';
import { Box, Typography, Divider, Stack } from '@mui/material';

const ProjectPage = () => {
  return (
    <Box sx={{ padding: '80px', maxWidth: '800px', margin: '0 auto'}}>
      <Stack spacing={5} sx={{ marginTop: '20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h1" sx={{ color: 'black', marginRight: '10px', fontWeight : "400", fontSize: "100px"}}> Fortopia:</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>Runner platform game, incorporates OOP principles</Typography>
        </Box>

        <a href="https://github.com/liyuxiao2/Fortopia"> <img src="https://i.ibb.co/d4w9GPJ/Fortopia-1.jpg" alt="Fortopia-1" border="0" width={500}/></a>
        

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ color: 'black', marginRight: '10px', fontWeight : "400", fontSize: "100px" }}>Calculator:</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>Made using react, CSS, and HTML</Typography>
        </Box>
        <a href="https://github.com/liyuxiao2/Calculator"> <img src="https://i.ibb.co/bHF7hd2/Calculator.png" alt="Calculator-1" border="0" width={200} height={400}/></a>
        {/* Add more projects as needed */}
      </Stack>
    </Box>
  );
};

export default ProjectPage;
