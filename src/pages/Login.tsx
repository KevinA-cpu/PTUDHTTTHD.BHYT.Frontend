import {
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
  Typography,
  Button,
  Divider,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import LoginImage from "../assets/image/login.png";
import GoogleIcon from "@mui/icons-material/Google";
function Login(): JSX.Element {
  return (
    <Box
      sx={{
        width: "100vw",
        mb: 5,
      }}
    >
      <Title title="Đăng nhập" path="Trang chủ / Đăng nhập"></Title>
      <Box sx={{ display: "flex", mt: 5, px: 5 }}>
        <Container>
          <img src={LoginImage} className="App-logo" alt="logo" height={450} />
        </Container>
        <Container className="InputField" sx={{ display: "flex", flexDirection: "column", minWidth: "200px" }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            Đăng nhập
          </Typography>
          <FormGroup>
            <TextField
              id="outlined-basic"
              label="Tên tài khoản / Email"
              variant="outlined"
              sx={{
                textAlign: "center",
                height: "60px",
                borderRadius: "15px",
                my: 1,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Mật khẩu"
              type="password"
              variant="outlined"
              sx={{
                textAlign: "center",
                height: "60px",
                borderRadius: "15px",
                my: 1,
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="ghi nhớ mật khẩu" />
              <Typography
                sx={{
                  fontSize: "1em",
                  color: "#FF0000",
                  "&:hover": {
                    opacity: "70%",
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                }}
              >
                Quên mật khẩu?
              </Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "#FFCF63",
                borderRadius: "10px",
                my: 1,
                height: "2.75em",
                fontSize: "1em",
                fontWeight: "600",
                textTransform: "none",
              }}
            >
              Đăng nhập
            </Button>
            <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
              <Divider
                sx={{
                  width: "70%",
                }}
              />
            </Box>
            <Button
              sx={{
                backgroundColor: "black",
                color: "#FFFFFF",
                borderRadius: "10px",
                my: 1,
                height: "2.75em",
                fontSize: "1em",
                fontWeight: "600",
                textTransform: "none",
              }}
            >
              <GoogleIcon sx={{ color: "red", mx: 2 }}></GoogleIcon>
              Hoặc đăng nhập với Google
            </Button>

            <Typography sx={{ my: 2, fontSize: "1rem" }}>
              Chưa có tài khoản?
              <Link to="/Register">Đăng ký tại đây</Link>
            </Typography>
          </FormGroup>
        </Container>
      </Box>
    </Box>
  );
}

export default Login;
