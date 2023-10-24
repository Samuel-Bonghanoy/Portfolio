import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";

function SocialMedia() {
  return (
    <motion.ul
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
      }}
      className="mt-2 flex gap-5 w-[80%] items-start mx-auto"
    >
      <motion.li>
        <a
          href="https://www.linkedin.com/in/samuel-bonghanoy-55283a250/"
          className="hover:cursor-pointer"
        >
          <LinkedInIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </motion.li>
      <motion.li>
        <a
          href="https://github.com/Samuel-Bonghanoy"
          className="hover:cursor-pointer"
        >
          <GitHubIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </motion.li>
      <motion.li>
        <a
          href="https://www.instagram.com/sampeoplewantitall/"
          className="hover:cursor-pointer"
        >
          <InstagramIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </motion.li>
      <motion.li>
        <a
          href="https://www.facebook.com/Sampeoplewantitall/"
          className="hover:cursor-pointer"
        >
          <FacebookIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </motion.li>
      <motion.li>
        <a
          href="https://twitter.com/NotSamBonghanoy"
          className="hover:cursor-pointer"
        >
          <TwitterIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </motion.li>
    </motion.ul>
  );
}

export default SocialMedia;
