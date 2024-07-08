import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { getBestCircuitForConstructor } from 'api/F1Api';
import TopThreeCircuits from './TopThreeCircuits';

export const Constructors = () => {
  const [constructorName, setConstructorName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const payload = {
          "constructor_name": constructorName
        }
        const response = await getBestCircuitForConstructor(payload);
        console.log(response);
        setData(response["message"]);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <Box sx={{p: 3}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ border: 1, borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 600, mb: 2 }}>Top Three Constructors' Circuits</Typography>
          <TopThreeCircuits data={data} setData={setData} />
        </Box>
      </Box>
    </Box>
  );
}

export default Constructors;