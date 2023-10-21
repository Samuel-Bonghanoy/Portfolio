import Circles from "../Cursor Trail/Circles";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <>
      <Circles />
      <div className="h-screen w-screen grid grid-cols-2">
        <Navbar />
        <div className="bg-mainwhite"></div>
        <div className="bg-maindark"></div>
      </div>
    </>
  );
}

export default AppLayout;
