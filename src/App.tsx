import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Routes />
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
