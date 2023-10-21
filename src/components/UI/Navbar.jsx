import devLogo from "../../assets/Dev_logo_red_o.png";

function Navbar() {
  return (
    <div className="w-screen h-[15%] bg-slate-200 flex items-center justify-between">
      <img className="h-[45%] w-[12%] ml-[2%]" src={devLogo} />
      <div className="flex gap-[15%]">
        <p>about</p>
        <p>contact</p>
      </div>
    </div>
  );
}

export default Navbar;
