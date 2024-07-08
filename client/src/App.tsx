import { Routes, Route } from "react-router-dom"
import Home from "pages/Home/Home"
import Topbar from "components/Topbar"
import { Box, ThemeProvider } from "@mui/material"
import axios from "axios"
import Drivers from "pages/Drivers/Drivers"
import Constructors from "pages/Constructors/Constructors"
import f1Theme from "styles/theme"

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  return (
    <Box className="App">
      <ThemeProvider theme={f1Theme}>
        <Topbar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/drivers" element={ <Drivers/> } />
          <Route path="/constructors" element={ <Constructors/> } />
        </Routes>
      </ThemeProvider>
    </Box>
  )
}

export default App