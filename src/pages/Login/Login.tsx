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
import bgImages from "../../images/bgImages";

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
      height="100vh"
      sx={{
        backgroundImage: `url(${bgImages.loginImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "30px",
          maxWidth: 400,
          backgroundColor: "white",
          borderBottomRightRadius: "40px",
          borderBottomLeftRadius: "40px",
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              fontSize: "16px",
              width: "120px",
              margin: "auto",
            }}
          >
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
            טוען
          </Button>
        )}

        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Box>
  );
};

export default Login;
