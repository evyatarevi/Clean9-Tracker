import { Box, CircularProgress, Typography } from "@mui/material";
import { useUserContext } from "../../context/UserContext";
import { checkDayNumber } from "../../utility/checkDayNumber";

const DayProgress = () => {
  const { currentDay } = useUserContext();
  const dayNumber = checkDayNumber(currentDay);
  const progressValue = dayNumber ? (dayNumber / 9) * 100 : 0;

  return (
    <Box
      position="relative"
      // display="inline-flex"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        variant="determinate"
        value={progressValue}
        size={100}
        // thickness={4}
        style={{ color: "#01579b" }} // Customize color if needed
        sx={{
          // border: "solid 5px grey",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      />
      <Box position="absolute">
        <Typography variant="h3" component="div" color="#01579b">
          {dayNumber}
        </Typography>
      </Box>
    </Box>
  );
};

export default DayProgress;
