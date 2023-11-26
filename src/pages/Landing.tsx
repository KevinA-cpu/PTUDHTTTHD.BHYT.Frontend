import { Box, Typography, Button, Container } from "@mui/material";

function Landing(): JSX.Element {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Praesent sapien massa,
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Praesent sapien massa,
        convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada.
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem", mt: "2rem" }}>
        <Button variant="contained">Lorem ipsum</Button>
        <Button variant="outlined">Lorem ipsum</Button>
      </Box>
      <Box sx={{ width: "100%", height: "2px", my: "2rem", backgroundColor: "blue" }} />
    </Container>
  );
}

export default Landing;
