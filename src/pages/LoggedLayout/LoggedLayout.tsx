import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
const LoggedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

export default LoggedLayout;
