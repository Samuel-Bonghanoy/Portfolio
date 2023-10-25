import { Outlet } from "react-router-dom";
import Circles from "../Cursor Trail/Circles";
// import Navbar from "./Navbar";

function AppLayout() {
  return (
    <>
      <Circles />

      <Outlet />
    </>
  );
}

export default AppLayout;
