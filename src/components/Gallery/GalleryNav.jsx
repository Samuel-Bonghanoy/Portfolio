import devLogo from "../../assets/Dev_logo_red_o.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";

function GalleryNav() {
  return (
    return (
      <div className="w-full h-[12%] z-[70]  flex items-center justify-between bg-mainwhite backdrop-blur-[2px] bg-opacity-5 absolute overflow-x-hidden">
        <NavLink className="ml-[2%] flex items-center" to="/">
          <img className="h-[57%] w-[17%] " src={devLogo} />
        </NavLink>
        <div className="flex gap-20 items-center mr-[2%] font-raleway font-semibold w-[20%]">
          <div className="flex gap-8">
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending text-mainwhite" : "",
                  isActive ? "active text-crimson" : "text-mainwhite",
                  isTransitioning ? "transitioning text-mainwhite" : "",
                ].join(" ")
              }
              to="/about"
            >
              <p className="duration-100 hover:cursor-pointer hover:text-crimson">
                about
              </p>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending text-mainwhite" : "",
                  isActive ? "active text-crimson" : "text-mainwhite",
                  isTransitioning ? "transitioning text-mainwhite" : "",
                ].join(" ")
              }
            >
              <p className=" duration-100 hover:cursor-pointer hover:text-crimson">
                contact
              </p>
            </NavLink>
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/samuel-bonghanoy-55283a250/"
              className="hover:cursor-pointer"
            >
              <LinkedInIcon
                sx={{
                  width: "2rem",
                  height: "2rem",
                  fill: "#f4f4f4",
                  "&:hover": { fill: "#961418" },
                }}
              />
            </a>
            <a
              href="https://github.com/Samuel-Bonghanoy"
              className="hover:cursor-pointer"
            >
              <GitHubIcon
                sx={{
                  width: "2rem",
                  height: "2rem",
                  fill: "#f4f4f4",
                  "&:hover": { fill: "#961418" },
                }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  )
}

export default GalleryNav
