import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Đặt baseURL của Axios
    axios.defaults.baseURL = "https://localhost:7275/api/";
  }, []);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Routes />
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
