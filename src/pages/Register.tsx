import { Box, FormGroup, TextField, Typography, Button, Divider, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Title from "../components/Title";
import loginImage from "../assets/image/login.png";
function Register(): JSX.Element {
  return (
    <Box
      sx={{
        width: "100vw",
        mb: 5,
      }}
    >
      <Title title="Đăng ký" path="Trang chủ / Đăng ký"></Title>
      <Box sx={{ display: "flex", mt: 5, px: 5 }}>
        <Container>
          <img src={loginImage} className="App-logo" alt="logo" height={450} />
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
            Đăng Ký
          </Typography>
          <FormGroup>
            <TextField
              id="outlined-basic"
              label="Tên đăng nhập "
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
            <TextField
              id="outlined-basic"
              label="Xác nhận mật khẩu"
              type="password"
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
              label="Email xác nhận"
              type="email"
              variant="outlined"
              sx={{
                textAlign: "center",
                height: "60px",
                borderRadius: "15px",
                my: 1,
              }}
            />
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
              Đăng ký
            </Button>
            <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
              <Divider
                sx={{
                  width: "70%",
                }}
              />
            </Box>

            <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
              Hoặc đăng nhập với
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
              <FacebookIcon sx={{ mx: 1, fontSize: "2em", color: "#1877F2" }}></FacebookIcon>
              <GoogleIcon sx={{ mx: 1, fontSize: "2em", color: "#DB4437" }}></GoogleIcon>
            </Box>
          </FormGroup>
        </Container>
      </Box>
    </Box>
  );
}

export default Register;
