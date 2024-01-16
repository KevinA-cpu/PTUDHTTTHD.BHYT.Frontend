import { CheckBox } from "@mui/icons-material";
import { Button, Divider, FormControlLabel, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

export default function HealthIndicator(): JSX.Element {
  return (
    <Box
      my={3}
      borderRadius={2}
      p={3}
      boxShadow={"8px 8px 8px rgba(79,79,79,.25)"}
      sx={{
        width: "100%",
        backgroundColor: "#f6f6f6",
      }}
    >
      <Typography variant="h6">Thông tin sức khỏe</Typography>
      <Divider sx={{ width: "100%" }} />
      <Container sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Box sx={{ mx: 5 }}>
          <form>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField type="number" variant="outlined" color="secondary" label="Chiều cao (cm)" fullWidth />
              <TextField type="number" variant="outlined" color="secondary" label="Cân nặng (kg)" fullWidth />
              <TextField type="number" variant="outlined" color="secondary" label="Cholesterol (mg/dL)" fullWidth />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Body Mass Index - BMI (kg/m²)"
                fullWidth
              />
              <TextField type="number" variant="outlined" color="secondary" label="Nhịp tim (bpm)" fullWidth />
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Respiratory Rate (lần/phút)"
                fullWidth
                required
              />
            </Stack>

            <Stack spacing={2} direction="row" sx={{ mb: 4 }}>
              <TextField label="Các bệnh lý khác" multiline rows={3} fullWidth />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <FormControlLabel control={<CheckBox />} label="" />
              <Typography variant="body1">
                Tôi đồng ý cho BHYT Life Việt Nam sử dụng thông tin được cung cấp trên đây để phê duyệt và phân tích
                chính sách bảo hiểm <a href="#">Tìm hiểu thêm.</a>
              </Typography>
            </Stack>
            <Button variant="outlined" color="secondary" type="submit" sx={{ px: "4rem", py: 1 }}>
              Cập nhật
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
