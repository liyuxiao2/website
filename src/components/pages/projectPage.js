import React from 'react';
import { Box, Typography, Divider, Stack } from '@mui/material';
import stocksimimage from '../../Images/start.png';
import fortopiaimg from '../../Images/fortopia.jpg';

const ProjectPage = () => {
  return (
    <Box sx={{ padding: '80px', maxWidth: '800px', margin: '0 auto'}}>
      <Stack spacing={5} sx={{ marginTop: '20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h1" sx={{ color: 'black', marginRight: '10px', fontWeight : "1000", fontSize: "50px"}}> Fortopia:</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>Runner platform game, incorporates OOP principles</Typography>
        </Box>

        <a href="https://github.com/liyuxiao2/Fortopia"> <img src={fortopiaimg} alt="Fortopia-1" border="0" width={500}/></a>
        

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ color: 'black', marginRight: '10px', fontWeight : "1000", fontSize: "50px" }}>Space Invaders:</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>Made using pygame and OOP principles </Typography>
        </Box>
        <a href="https://github.com/liyuxiao2/python-game"> <img src="https://cdn.dribbble.com/users/1035257/screenshots/4835179/media/1d639a0b1458a1b300aea36206e99c8c.gif"  alt="Space invaders" border="0" width={500} /></a>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ color: 'black', marginRight: '10px', fontWeight : "1000", fontSize: "50px" }}>Calculator:</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>Made using react, css and html </Typography>
        </Box>
        <a href="https://github.com/liyuxiao2/Calculator"> <img src = "https://uploads.sitepoint.com/wp-content/uploads/2021/09/1630918493final_demo.gif"  alt="Calculator" border="0" width={500} /></a>
        
        <Box sx = {{display: 'flex', alignItems: 'center'}}>
          <Typography variant="h2" sx={{ color: 'black', marginRight: '10px', fontWeight : "1000", fontSize: "50px" }}>Pokemon Stock Simulator:</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}> Simulated a stock market graph, with the theme of pokemon. Made in Greenfoot, with java. </Typography>
        </Box>
        <a href="https://github.com/Mochai-M/PokemonStockSimulator"> <img src = {stocksimimage}  alt="stock simulator" border="0" width={500} /></a>
      </Stack>
    </Box>
  );
};

export default ProjectPage;
