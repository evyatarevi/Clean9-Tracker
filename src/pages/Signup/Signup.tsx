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
import bgImages from "../../images/bgImages";

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
      height="100vh"
      sx={{
        backgroundImage: `url(${bgImages.recipesHeaderBg})`,
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
          הרשמה
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

        <TextField
          label="שם שיוצג"
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
            הירשם
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
export default Signup;
