import { Box } from "@mui/material";
import NavLinkWithIcon from "../NavLinkWithIcon/NavLinkWithIcon";
import DailyIcon from "@mui/icons-material/CalendarToday";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { type NavLinkWithIconProps } from "../../types";

const navItems: NavLinkWithIconProps[] = [
  {
    to: "/app",
    icon: <DailyIcon sx={{ fontSize: 30, color: "#212121" }} />,
    label: "יומי",
  },
  {
    to: "",
    icon: <ChecklistIcon sx={{ fontSize: 30, color: "#212121" }} />,
    label: "המשימות",
  },
  {
    to: "/app/recipes",
    icon: <FastfoodIcon sx={{ fontSize: 30, color: "#212121" }} />,
    label: "ארוחות",
  },
  {
    to: "",
    icon: <LocalBarIcon sx={{ fontSize: 30, color: "#212121" }} />,
    label: "שייקים",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: "1",
        bgcolor: "white",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {navItems.map((item, index) => (
        <NavLinkWithIcon {...item} key={index} />
      ))}
    </Box>
  );
};

export default Footer;
