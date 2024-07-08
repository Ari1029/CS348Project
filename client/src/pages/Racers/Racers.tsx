import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import FastestLap from './FastestLap';
import f1Theme from 'styles/theme';
import ConsecutiveWins from './ConsecutiveWins';

export const Racers = () => {
  const [fastestLap, setFastestLap] = useState<number>(0);
  const [consecutiveWins, setConsecutiveWins] = useState([[0, 0]]);

  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Fastest Lap</Typography>
          <FastestLap fastestLap={fastestLap} setFastestLap={setFastestLap} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Most Raced Against</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Consecutive Wins</Typography>
        </Box>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Consecutive Wins</Typography>
          <ConsecutiveWins consecutiveWins={consecutiveWins} setConsecutiveWins={setConsecutiveWins} />
        </Box>
      </Box>
    </Box>
  );
}

export default Racers;