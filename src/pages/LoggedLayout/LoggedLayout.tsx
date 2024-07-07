import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";

const LoggedLayout = () => {
  return (
    <Box sx={{ bgcolor: "#eee" }}>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </Box>
  );
};

export default LoggedLayout;
