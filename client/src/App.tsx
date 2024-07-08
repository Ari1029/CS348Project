import { Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import Topbar from "components/Topbar"
import { Box } from "@mui/material"
import axios from "axios"
import Racers from "pages/Racers/Racers"

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  return (
    <Box className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/racers" element={ <Racers/> } />
        <Route path="/constructors" element={ <></> } />
      </Routes>
    </Box>
  )
}

export default App