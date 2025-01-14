import { Button, Container, Paper, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          sx={{
            fontSize: "6rem",
            fontWeight: "bold",
          }}
        >
          404
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Page Not Found
        </Typography>
        <Typography var iant="body1" sx={{ marginBottom: 4 }}>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          sx={{ marginRight: 2 }}
        >
          Go Home
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleGoBack}>
          Go Back
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFound;
