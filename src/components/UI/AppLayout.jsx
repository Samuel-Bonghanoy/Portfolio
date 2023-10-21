import { Outlet } from "react-router-dom";
import Circles from "../Cursor Trail/Circles";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <>
      <Circles />
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
