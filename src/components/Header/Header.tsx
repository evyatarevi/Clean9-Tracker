import { Box, Typography } from "@mui/material";
import DayProgress from "../DayProgress/DayProgress";
import { useUserContext } from "../../context/UserContext";

interface headerProps {
  imageUrl: string;
  text: string;
}

const Header = ({ imageUrl, text }: headerProps) => {
  const { displayName } = useUserContext();

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: "1",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottomRightRadius: "70px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            // fontFamily="Fredoka"
            variant="body1"
            component="div"
            color="white"
            fontWeight="bold"
            pl="5px"
            sx={{
              // font-family="Solitreo",
              fontFamily: "Solitreo",
              fontSize: "18px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            }}
          >
            ברוך הבא {displayName}!
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
          sx={{ padding: "15px 15px 15px 0" }}
        >
          <Typography
            variant="h5"
            component="div"
            color="black"
            bgcolor="rgba(255,255,255,0.8)"
            p="10px 20px 10px 10px "
            sx={{
              borderBottomRightRadius: "40px",
              borderTopRightRadius: "40px",
            }}
          >
            {text}
          </Typography>

          <DayProgress />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
