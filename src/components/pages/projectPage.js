import React from 'react';
import { Box, Typography, Divider, Stack } from '@mui/material';

const ProjectPage = () => {
  return (
    <Box sx={{ padding: '80px', maxWidth: '800px', margin: '0 auto'}}>
      <Stack spacing={30} sx={{ marginTop: '20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ color: 'white', marginRight: '10px' }}> Fortopia:</Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>Runner platform game, incorporates OOP principles</Typography>
        </Box>


        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ color: 'white', marginRight: '10px' }}>Calculator:</Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>Made using react, CSS, and HTML</Typography>
        </Box>
        {/* Add more projects as needed */}
      </Stack>
    </Box>
  );
};

export default ProjectPage;
