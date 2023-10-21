import { Outlet } from "react-router-dom";
import Circles from "../Cursor Trail/Circles";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="overflow-x-hidden">
      <Circles />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
