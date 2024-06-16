import { Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import Topbar from "components/Topbar"
import { Box } from "@mui/material"

function App() {
  return (
    <Box className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/gp" element={ <></> } />
        <Route path="/racers" element={ <></> } />
      </Routes>
    </Box>
  )
}

export default App