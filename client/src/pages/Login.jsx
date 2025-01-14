import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/style/styleComponent";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  // Form fields
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [avatar,setavatar] = useState('');
  // Error states
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!isLogin && !name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!isLogin && bio.length > 150) {
      newErrors.bio = "Bio should not exceed 150 characters";
    }

    if (!isLogin && (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (isLogin) {
        console.log("Login successful with:", { username, password });
        // const response = axios.post()
      } else {
        console.log("Registration successful with:", {
          name,
          bio,
          username,
          email,
          password,
        });
      }

      setName('');
      setBio('');
      setUsername('');
      setPassword('');
      setEmail('');
      setErrors({});
    }
  };

  return (
    <div
  style={{
    height: "100vh", // Full viewport height
    width: "100%",   // Full width
    backgroundImage:
      "linear-gradient(rgba(255,255,209,0.7), rgba(249,159,159,1))",
  }}
>
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                variant="text"
                fullWidth
                color="primary"
                onClick={() => {
                  setIsLogin(false);
                  setErrors({});
                }}
              >
                Register
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                marginTop: "1rem",
                }}
                
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                    sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                    src={avatar}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    background: "rgba(255,255,255,0.5)",
                    ":hover": {
                      bgcolor: "rgba(255,255,255,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setavatar(URL.createObjectURL(file)); // Generate preview URL
                        }
                      }}/>
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />
              <TextField
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                error={!!errors.bio}
                helperText={errors.bio}
              />
              <TextField
                required
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}
              >
                Register
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                variant="text"
                fullWidth
                color="primary"
                onClick={() => {
                  setIsLogin(true);
                  setErrors({});
                }}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
      </Container>
      </div>
  );
}

export default Login;
