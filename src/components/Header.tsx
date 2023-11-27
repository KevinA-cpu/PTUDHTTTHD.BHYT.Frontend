import { Link } from "react-router-dom";
import { AppBar, Typography, Button, Box, Container } from "@mui/material";
import logo from "../assets/logo.png";

function Header(): JSX.Element {
  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link to="/">
            <Button
              TouchRippleProps={{ style: { color: "white" } }}
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "whitesmoke",
                },
              }}
            >
              <img src={logo} className="App-logo" alt="logo" height={50} />
            </Button>
          </Link>
          <Typography variant="h6">Bảo Hiểm Y Tế</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Button color="inherit">Trang chủ</Button>
          <Button color="inherit">Đăng ký bảo hiểm</Button>
          <Button color="inherit">Thông tin</Button>
          <Button
            component={Link}
            to="/Login"
            variant="outlined"
            TouchRippleProps={{ style: { color: "white" } }}
            sx={{
              background: "gold",
              "&:hover": {
                backgroundColor: "gold",
              },
            }}
          >
            Đăng nhập
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
