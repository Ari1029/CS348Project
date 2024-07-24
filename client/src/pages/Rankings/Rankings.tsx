import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AveragePosition from './AveragePosition';
import DriverPositionSummary from './DriverPerformanceSummary';

export const Rankings = () => {
  const [averagePosition, setAveragePosition] = useState<any[]>([]);
  const [driverPerformanceSummary, setDriverPerformanceSummary] = useState<any[]>([]);
  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Average Position</Typography>
          <AveragePosition averagePosition={averagePosition} setAveragePosition={setAveragePosition} />
        </Box>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Driver Win Percentage</Typography>
          <DriverPositionSummary driverPerformanceSummary={driverPerformanceSummary} setDriverPerformanceSummary={setDriverPerformanceSummary} />
        </Box>
      </Box>
    </Box>
  );
}

export default Rankings;