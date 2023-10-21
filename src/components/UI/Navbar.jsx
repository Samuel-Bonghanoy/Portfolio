import devLogo from "../../assets/Dev_logo_red_o.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Navbar() {
  return (
    <div className="w-screen h-[15%] bg-mainwhite flex items-center justify-between backdrop-blur sticky">
      <img className="h-[40%] w-[10%] ml-[2%]" src={devLogo} />
      <div className="flex gap-20 items-center mr-[2%] font-raleway font-semibold w-[20%]">
        <div className="flex gap-8">
          <p>about</p>
          <p>contact</p>
        </div>
        <div className="flex gap-5">
          <LinkedInIcon style={{ width: "2rem", height: "2rem" }} />
          <GitHubIcon style={{ width: "2rem", height: "2rem" }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
