import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="h-[10vh] bg-maindark  flex items-center justify-center text-graytext gap-8">
      <p>&copy;Samuel Ethan Bonghanoy 2023</p>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/samuel-bonghanoy-55283a250/"
          className="hover:cursor-pointer"
        >
          <LinkedInIcon
            sx={{
              width: "2rem",
              height: "1.5rem",
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
              height: "1.5rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/sampeoplewantitall/"
          className="hover:cursor-pointer"
        >
          <InstagramIcon
            sx={{
              width: "2rem",
              height: "1.5rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
