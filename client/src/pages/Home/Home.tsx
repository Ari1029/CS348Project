import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import DriverRatings from './DriverRatings';

export const Home = () => {
  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography fontStyle="italic">Special Feature</Typography>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Driver Ratings</Typography>
          <DriverRatings/>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;