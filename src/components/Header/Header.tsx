import { Box, Typography, Button } from "@mui/material";
import DayProgress from "../DayProgress/DayProgress";
import bgImages from "../../images/bgImages";

const Header = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: "1",
        backgroundImage: `url(${bgImages.headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottomRightRadius: "70px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          padding: "15px",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="body1"
            component="div"
            color="white"
            fontWeight="bold"
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            ברוך הבא מוריה!
          </Typography>

          {/* <Button
          variant="outlined"
          color="primary"
          sx={{
            padding: "0px",
          }}
        >
          התנתק
        </Button> */}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ padding: "15px" }}
        >
          <Typography variant="h5" component="div" color="white">
            המשימות שלי
          </Typography>
          <DayProgress />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
