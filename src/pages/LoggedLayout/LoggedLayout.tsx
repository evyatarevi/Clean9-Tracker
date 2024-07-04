import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const LoggedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default LoggedLayout;
