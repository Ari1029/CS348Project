import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fastestLap } from 'api/F1Api';

export const Home = () => {
  const [data, setData] = useState([0, 'temp']);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fastestLap();
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
      <h1 style={{ marginTop: 0 }}>Data from the "circuits" relation</h1>
      {data ? <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th key="id">ID</th>
              <th key="message">Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row[0]}>
                <td key="id">{row[0]}</td>
                <td key="message">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> : "Loading..."}
    </Box>
  );
}

export default Home;