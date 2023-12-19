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
import LoginImage from "../assets/images/login.png";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import * as Yup from "yup";

import login_service from "../helpers/login_service";
function Login(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await login_service.login(values.username, values.password);
        alert(response.data.message);
        //return response;
      } catch (error) {
        alert("Login Failed");
      } finally {
        //login_service.logout();
      }
    },
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Title title="Đăng nhập" path="Trang chủ / Đăng nhập"></Title>
      <Box sx={{ display: "flex", mt: 5, px: 5 }}>
        <Container>
          <img src={LoginImage} className="App-logo" alt="logo" />
        </Container>
        <Container className="InputField" sx={{ display: "flex", flexDirection: "column", minWidth: "200px" }}>
          <Typography variant="h4" fontWeight={600} sx={{ textAlign: "center", padding: "1rem" }}>
            Đăng nhập
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <TextField
                id="outlined-basic"
                label="Tên tài khoản / Email"
                variant="outlined"
                {...formik.getFieldProps("username")}
                onChange={formik.handleChange}
                sx={{
                  textAlign: "center",
                  height: "60px",
                  borderRadius: "15px",
                  my: 1,
                }}
              />
              {formik.errors.username && formik.touched.username && (
                <Box sx={{ backgroundColor: "#ffcccc", padding: "8px", borderRadius: "4px" }}>
                  <Typography variant="body1" sx={{ color: "#ff0000" }}>
                    * {formik.errors.username}
                  </Typography>
                </Box>
              )}
              <TextField
                id="outlined-basic"
                label="Mật khẩu"
                type="password"
                variant="outlined"
                {...formik.getFieldProps("password")}
                onChange={formik.handleChange}
                sx={{ textAlign: "center", height: "60px", borderRadius: "15px", mt: 3 }}
              />
              {formik.errors.password && formik.touched.password && (
                <Box sx={{ backgroundColor: "#ffcccc", padding: "8px", borderRadius: "4px" }}>
                  <Typography variant="body1" sx={{ color: "#ff0000" }}>
                    * {formik.errors.password}
                  </Typography>
                </Box>
              )}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, mt: 2 }}>
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
                type="submit"
              >
                Đăng nhập
              </Button>
              <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
                <Divider sx={{ width: "70%" }} />
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
                <Link to="/register">Đăng ký tại đây</Link>
              </Typography>
            </FormGroup>
          </form>
        </Container>
      </Box>
    </Box>
  );
}

export default Login;
