import { Box, Card, CardContent, Typography } from "@mui/material";
import user from "../assets/images/user.png";
import groupUser from "../assets/images/group-user.png";

function InsuranceBuyer(): JSX.Element {
  return (
    <Box
      sx={{
        my: "3rem",
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
        Chọn đối tượng
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
            width: 235,
            minHeight: 235,
            borderRadius: "30px",
            border: "3px solid #87CEEB",
            mx: "4rem",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <img src={user} className="App-logo" alt="logo" height={150} />
          </CardContent>
          <Typography variant="h6" textAlign="center" color="#000000" fontWeight="700">
            Cá nhân
          </Typography>
        </Card>
        <Card
          sx={{
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
            width: 235,
            minHeight: 235,
            borderRadius: "30px",
            border: "3px solid #87CEEB",
            mx: "4rem",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <img src={groupUser} className="App-logo" alt="logo" height={150} />
          </CardContent>
          <Typography variant="h6" textAlign="center" color="#000000" fontWeight="700">
            Tập thể
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default InsuranceBuyer;
