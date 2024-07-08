import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import f1Theme from 'styles/theme';
import FastestLap from './FastestLap';
import ConsecutiveWins from './ConsecutiveWins';
import MostRacedAgainst from './MostRacedAgainst';

export const Drivers = () => {
  const [fastestLap, setFastestLap] = useState<number>(0);
  const [consecutiveWins, setConsecutiveWins] = useState([[0, 0]]);
  const [mostRacedAgainst, setMostRacedAgainst] = useState([]);

  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Fastest Lap</Typography>
          <FastestLap fastestLap={fastestLap} setFastestLap={setFastestLap} />
        </Box>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Most Raced Against</Typography>
          <MostRacedAgainst mostRacedAgainst={mostRacedAgainst} setMostRacedAgainst={setMostRacedAgainst} />
        </Box>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Consecutive Wins</Typography>
          <ConsecutiveWins consecutiveWins={consecutiveWins} setConsecutiveWins={setConsecutiveWins} />
        </Box>
      </Box>
    </Box>
  );
}

export default Drivers;