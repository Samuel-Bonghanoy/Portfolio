import devLogo from "../../assets/Dev_logo_red_o.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, x: -150 }}
      className="w-full h-[12%] z-[70] flex items-center md:justify-between bg-mainwhite backdrop-blur-[2px] bg-opacity-5 absolute overflow-x-hidden"
    >
      <NavLink className="ml-[2%] flex items-center" to="/">
        <img className="h-[57%] sm:w-[48%] md:w-[17%] " src={devLogo} />
      </NavLink>
      <div className="flex sm:gap-10 md:gap-20 items-center sm:mr-0 md:mr-[2%] sm:text-xs md:text-[1rem] font-raleway font-semibold sm:w-[45%] md:w-[25%]">
        <ul className=" flex sm:flex md:flex-row sm:gap-5 md:gap-8">
          <li>
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending text-mainwhite" : "",
                  isActive
                    ? "active text-crimson"
                    : "text-mainwhite sm:text-maindark md:text-mainwhite",
                  isTransitioning ? "transitioning text-mainwhite" : "",
                ].join(" ")
              }
              to="/about"
            >
              <p className=" duration-100 hover:cursor-pointer hover:text-crimson">
                about
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending text-mainwhite" : "",
                  isActive
                    ? "active text-crimson"
                    : "text-mainwhite md:text-mainwhite sm:text-maindark ",
                  isTransitioning ? "transitioning text-mainwhite" : "",
                ].join(" ")
              }
            >
              <p className="  duration-100 hover:cursor-pointer hover:text-crimson">
                contact
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending text-mainwhite" : "",
                  isActive
                    ? "active text-crimson"
                    : "text-mainwhite sm:text-maindark md:text-mainwhite",
                  isTransitioning ? "transitioning text-mainwhite" : "",
                ].join(" ")
              }
              to="/gallery"
            >
              <p className="  duration-100 hover:cursor-pointer  hover:text-crimson">
                gallery
              </p>
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/samuel-bonghanoy-55283a250/"
            className="hover:cursor-pointer sm:hidden md:block"
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
            className="hover:cursor-pointer sm:hidden md:block"
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
    </motion.div>
  );
}

export default Navbar;
