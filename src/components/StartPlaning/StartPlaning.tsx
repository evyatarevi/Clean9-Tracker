import { Box, Typography, Button } from "@mui/material";
import { type ClickHandler } from "../../types";
// import bgImages from "../../images/bgImages";

interface ChildProps {
  handleStartPlain: ClickHandler;
}

const StartPlaning = ({ handleStartPlain }: ChildProps) => {
  return (
    <Box
      sx={{
        mt: "20px",
        p: "30px",
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          // color: "#1565c0",
          width: "200px",
        }}
      >
        שמחים שבחרת באפליקציה שלנו!
      </Typography>
      <Button
        variant="contained"
        onClick={handleStartPlain}
        sx={{
          display: "block",
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          fontSize: "50px",
          m: "40px auto 20px auto",
          boxShadow: "10",
        }}
      >
        התחל
      </Button>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#616161",
          width: "300px",
          m: "auto",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        הקש ״התחל״ להתחלת התוכנית
      </Typography>
    </Box>
  );
};

export default StartPlaning;
