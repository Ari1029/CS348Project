import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import DriverRatings from './DriverRatings';
import { getConsecutiveWins } from "api/F1Api";

export const Home = () => {

  const [querySuccess, setQuerySuccess] = useState<boolean>(false);

  const submitDummyQuery = async () => {
      try {
        const payload = {
          "driver_surname": "Verstappen",
          "driver_forename": "Max"
      }
      const response = await getConsecutiveWins(payload);
      setQuerySuccess(true);
    }
    catch (e) {
        console.log(e);
        setQuerySuccess(false);
    }
  }

  useEffect(() => { //QUERY ON MOUNT
    submitDummyQuery();
  }, [])

  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6">Welcome to Formula 1 SQL, a website for technical fans to analyze historic data up to 2023 of the biggest international racing sport in the world.</Typography>
        <Typography variant="h6" style={{ color: querySuccess ? "green" : "orange" }}>{querySuccess ? "🟢 Backend Status: Online" : "🟠 Backend Status: Offline (starting...)"}</Typography>
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