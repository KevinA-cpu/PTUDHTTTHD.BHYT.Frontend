import { Link } from "react-router-dom";
import { AppBar, Typography, Button, Box, Toolbar } from "@mui/material";
import logo from "../assets/images/logo.png";

function Header(): JSX.Element {
  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
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
            to="/login"
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
