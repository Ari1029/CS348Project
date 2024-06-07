import { useEffect, useState } from 'react';
import defaultApi from '../api/default'

export const Home = () => {
  const [data, setData] = useState([0, 'temp']);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await defaultApi.getDefault();
        setData(response["message"]);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Data from the "hello_cs348" relation</h1>
      {data !== null ? <div className="table-container">
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
    </div>
  );
}

export default Home;