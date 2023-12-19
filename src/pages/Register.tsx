import { Box, FormGroup, TextField, Typography, Button, Divider, Container, Alert } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Title from "../components/Title";
import loginImage from "../assets/images/login.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import DataSevice from "../helpers/api_services";

function Register(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Username must be at least 5 characters long")
        .max(25, "Username cannot exceed 25 characters")
        .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain alphanumeric characters and underscores")
        .required("Username is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .max(25, "Password cannot exceed 25 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-=_+]{8,}$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .required("Password is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      confirmPassword: Yup.string().required("confirm password is required"),
    }),

    onSubmit: async (values) => {
      if (values.password != values.confirmPassword) {
        alert("password not match!");
        return;
      }

      const body = {
        Username: values.username,
        Password: values.password,
        Email: values.email,
      };
      try {
        await DataSevice.callPostApi("register", body).then(
          (response) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
            alert(response?.data.message);
            values.email = "";
            values.username = "";
            values.confirmPassword = "";
            values.password = "";
          },
          (error: { response: { data: string } }) => {
            console.log("hediedi: ", error);
            const errorMessage: string = error.response.data;
            console.log(errorMessage);
            alert(errorMessage);
          }
        );
      } catch (error) {
        console.log(error);
        alert("server error!!");
      }
    },
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Title title="Đăng ký" path="Trang chủ / Đăng ký"></Title>
      <Box sx={{ display: "flex", mt: 5, px: 5 }}>
        <Container>
          <img src={loginImage} className="App-logo" alt="logo" />
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
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
              {formik.errors.username && formik.touched.username && (
                <Alert severity="error">
                  <strong>{formik.errors.username}</strong>
                </Alert>
              )}
              <TextField
                id="outlined-basic"
                label="Tên đăng nhập "
                variant="outlined"
                sx={{ textAlign: "center", height: "60px", borderRadius: "15px", mt: 1, mb: 2 }}
                {...formik.getFieldProps("username")}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <Alert severity="error">
                  <strong>{formik.errors.password}</strong>
                </Alert>
              )}

              <TextField
                id="outlined-basic"
                label="Mật khẩu"
                type="password"
                variant="outlined"
                sx={{ textAlign: "center", height: "60px", borderRadius: "15px", mt: 1, mb: 2 }}
                {...formik.getFieldProps("password")}
                onChange={formik.handleChange}
              />

              <TextField
                id="outlined-basic"
                label="Xác nhận mật khẩu"
                type="password"
                variant="outlined"
                {...formik.getFieldProps("confirmPassword")}
                required
                sx={{ textAlign: "center", height: "60px", borderRadius: "15px", mt: 1, mb: 2 }}
              />
              {formik.errors.email && formik.touched.email && (
                <Alert severity="error">
                  <strong>{formik.errors.email}</strong>
                </Alert>
              )}
              <TextField
                id="outlined-basic"
                label="Email xác nhận"
                type="email"
                variant="outlined"
                sx={{ textAlign: "center", height: "60px", borderRadius: "15px", mt: 1, mb: 2 }}
                {...formik.getFieldProps("email")}
                onChange={formik.handleChange}
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
                type="submit"
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
          </form>
        </Container>
      </Box>
    </Box>
  );
}

export default Register;
