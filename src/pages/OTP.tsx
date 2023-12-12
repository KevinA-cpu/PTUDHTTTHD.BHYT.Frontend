import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import otp from "../assets/images/otp.png";

export default function OTP(): JSX.Element {
  const [otpSent, setOtpSent] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img src={otp} alt="otp-image" />
      <Box width={450} sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            textAlign: "center",
            padding: "20px",
          }}
        >
          Xác thực OTP
        </Typography>
        {otpSent ? (
          <>
            <Typography sx={{ my: 2, fontSize: "1rem" }}>Nhập mã xác nhận đã được gửi đến email của bạn</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField id="outlined-basic" label="OTP" type="password" variant="outlined" sx={{ mb: 3 }} />
              <Button
                sx={{
                  backgroundColor: "#FFCF63",
                }}
                onClick={() => setOtpSent(false)}
              >
                Xác nhận
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ my: 2, fontSize: "1rem" }}>
              Chúng tôi sẽ gửi mã xác nhận đến địa chỉ email của bạn
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ mb: 3 }} />
              <Button
                sx={{
                  backgroundColor: "#FFCF63",
                }}
                onClick={() => setOtpSent(true)}
              >
                Lấy OTP
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
