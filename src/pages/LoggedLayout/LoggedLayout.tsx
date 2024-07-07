import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoggedLayout = () => {
  const navigate = useNavigate();
  const { userId } = useUserContext();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, []);

  if (userId) {
    return (
      <Box sx={{ bgcolor: "#eee" }}>
        {/* <Navbar /> */}
        <Outlet />
        <Footer />
      </Box>
    );
  }
};

export default LoggedLayout;
