import { useState } from "react";
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
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
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
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        כניסה
      </Typography>

      <TextField
        label="אימייל"
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
        label="סיסמא"
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

      {!isPending ? (
        <Button type="submit" variant="contained" color="primary" fullWidth>
          כנס
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

export default Login;
