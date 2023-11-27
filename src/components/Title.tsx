import { Box, Typography } from "@mui/material";

function Title(): JSX.Element {
  return (
    <Box
      style={{
        backgroundColor: "#D9D9D9",
        marginTop: "20px",
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "Center",
        justifyContent: "space-between",
        padding: " 0 1em 0 1em ",
      }}
    >
      <Typography sx={{ fontSize: "32px" }}>Đăng Nhập</Typography>
      <Typography sx={{ fontSize: "20px" }}>Trang chủ / Đăng nhập</Typography>
    </Box>
  );
}

export default Title;
