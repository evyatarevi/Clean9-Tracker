import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { type FormEvent } from "react";
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Box,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 400,
        margin: "auto",
      }}
      onSubmit={handleSubmit}
    >
      <Typography component="h2" variant="h4" gutterBottom>
        sign up
      </Typography>

      <TextField
        label="Email"
        type="email"
        required
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Display Name"
        type="text"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      {!isPending ? (
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          disabled
          fullWidth
          startIcon={<CircularProgress size={20} />}
        >
          Loading
        </Button>
      )}

      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};
export default Signup;
