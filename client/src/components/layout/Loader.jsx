import { Grid, Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <Grid
      container
      height="calc(100vh - 4rem)"
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Left Sidebar */}
      <Grid
        item
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" },
          padding: 2,
        }}
        height="100%"
      >
        <Skeleton
          variant="rectangular"
          height="100%"
          sx={{
            borderRadius: 2,
            bgcolor: "rgba(0, 0, 0, 0.1)",
          }}
        />
      </Grid>

      {/* Main Content */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        lg={6}
        height="100%"
        sx={{
          padding: 2,
        }}
      >
        <Skeleton
          variant="rectangular"
          height="60%"
          sx={{
            borderRadius: 2,
            marginBottom: 2,
            bgcolor: "rgba(0, 0, 0, 0.1)",
          }}
        />
        <Skeleton
          variant="rectangular"
          height="30%"
          sx={{
            borderRadius: 2,
            bgcolor: "rgba(0, 0, 0, 0.1)",
          }}
        />
      </Grid>

      {/* Right Sidebar */}
      <Grid
        item
        md={4}
        lg={3}
        height="100%"
        sx={{
          display: { xs: "none", lg: "block" },
          padding: 2,
          backgroundColor: "rgba(0,0,0,0.85)",
        }}
      >
        <Skeleton
          variant="rectangular"
          height="30%"
          sx={{
            borderRadius: 2,
            marginBottom: 2,
            bgcolor: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <Skeleton
          variant="rectangular"
          height="60%"
          sx={{
            borderRadius: 2,
            bgcolor: "rgba(255, 255, 255, 0.1)",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Loader;
