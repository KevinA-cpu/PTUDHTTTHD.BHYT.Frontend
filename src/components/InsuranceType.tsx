import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import gold from "../assets/images/gold-heart.png";
import platinum from "../assets/images/platinum-heart.png";
import silver from "../assets/images/silver-heart.png";

function InsuranceType(): JSX.Element {
  return (
    <Box
      sx={{
        my: "5rem",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        color="#082C4C"
        sx={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        Chọn loại bảo hiểm muốn đăng ký
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", my: "20px" }}>
        <Card
          sx={{
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
            width: 235,
            minHeight: 355,
            borderRadius: "30px",
            border: "3px solid #87CEEB",
            mx: "5rem",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <img src={silver} className="App-logo" alt="logo" height={110} />
          </CardContent>
          <Typography variant="h6" textAlign="center" color="#000000" fontWeight="700">
            Bạc
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", my: "10px" }}>
            <ul>
              <li>Đối tượng ABCD</li>
              <li>Quyền lợi ABCD</li>
              <li>Phạm vi ABCEED</li>
              <li>Mức phí ABCD</li>
            </ul>
          </Box>
          <Button sx={{ ml: 1 }}>Chi tiết</Button>
        </Card>
        <Card
          sx={{
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
            width: 235,
            minHeight: 355,
            borderRadius: "30px",
            border: "3px solid #87CEEB",
            mx: "5rem",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <img src={gold} className="App-logo" alt="logo" height={110} />
          </CardContent>
          <Typography variant="h6" textAlign="center" color="#000000" fontWeight="700">
            Vàng
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", my: "10px" }}>
            <ul>
              <li>Đối tượng ABCD</li>
              <li>Quyền lợi ABCD</li>
              <li>Phạm vi ABCEED</li>
              <li>Mức phí ABCD</li>
            </ul>
          </Box>
          <Button sx={{ ml: 1 }}>Chi tiết</Button>
        </Card>
        <Card
          sx={{
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
            width: 235,
            minHeight: 355,
            borderRadius: "30px",
            border: "3px solid #87CEEB",
            mx: "5rem",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <img src={platinum} className="App-logo" alt="logo" height={110} />
          </CardContent>
          <Typography variant="h6" textAlign="center" color="#000000" fontWeight="700">
            Bạch kim
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", my: "10px" }}>
            <ul>
              <li>Đối tượng ABCD</li>
              <li>Quyền lợi ABCD</li>
              <li>Phạm vi ABCEED</li>
              <li>Mức phí ABCD</li>
            </ul>
          </Box>
          <Button sx={{ ml: 1 }}>Chi tiết</Button>
        </Card>
      </Box>
    </Box>
  );
}

export default InsuranceType;
