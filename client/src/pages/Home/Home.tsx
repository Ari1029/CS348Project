import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { oldFastestLap } from 'api/F1Api';
import f1Theme from 'styles/theme';
import AveragePosition from './AveragePosition';

export const Home = () => {
  const [averagePosition, setAveragePosition] = useState<any[]>([]);

  useEffect(() => {
    console.log(averagePosition);
  }, [averagePosition])
  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Average Position</Typography>
          <AveragePosition averagePosition={averagePosition} setAveragePosition={setAveragePosition} />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;