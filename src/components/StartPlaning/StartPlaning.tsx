import { Box, Typography, Button } from "@mui/material";
import { type ClickHandler } from "../../types";
import bgImages from "../../images/bgImages";

interface ChildProps {
  handleStartPlain: ClickHandler;
}

const StartPlaning = ({ handleStartPlain }: ChildProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        // backgroundImage: `url(${bgImages.bgHomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography></Typography>
      <Button
        variant="outlined"
        onClick={handleStartPlain}
        sx={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          fontSize: "50px",
        }}
      >
        התחל
      </Button>
    </Box>
  );
};

export default StartPlaning;
