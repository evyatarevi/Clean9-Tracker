import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { type NavLinkWithIconProps } from "../../types";

const NavLinkWithIcon = ({ to, icon, label }: NavLinkWithIconProps) => {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
          transition: "transform 0.3s, background-color 0.3s",
          "&:hover": {
            backgroundColor: "action.hover",
            borderRadius: 1,
            transform: "scale(1.1)",
          },
          "&:active": {
            transform: "translateY(-10px)",
          },
        }}
      >
        {icon}
        <Typography variant="caption">{label}</Typography>
      </Box>
    </NavLink>
  );
};

export default NavLinkWithIcon;
