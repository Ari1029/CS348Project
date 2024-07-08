import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import FastestLap from './FastestLap';
import f1Theme from 'styles/theme';

export const Racers = () => {
  const [fastestLap, setFastestLap] = useState<number>(0);

  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Fastest Lap</Typography>
          <FastestLap fastestLap={fastestLap} setFastestLap={setFastestLap} />
        </Box>
        <Box>
            <h1>Average Position ;)</h1>
        </Box>
        <Box>
            <h1>Most Raced Against</h1>
        </Box>
      </Box>
    </Box>
  );
}

export default Racers;