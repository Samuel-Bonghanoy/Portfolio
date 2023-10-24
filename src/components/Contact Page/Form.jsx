import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Form() {
  const [state, handleSubmit] = useForm("xdorbdze");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <h1 className="w-[80%] mx-auto text-3xl mb-[1rem] text-mainwhite font-bold">
        Send me an email
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[80%] h-fit flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            className="rounded-md px-3 py-2 bg-mainwhite text-maindark"
            aria-label="Email"
            id="email"
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="name">
            Full Name
          </label>
          <input
            className="rounded-md px-3 py-2 bg-mainwhite text-maindark"
            aria-label="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col w-full gap-1 h-full">
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="font-semibold" htmlFor="Message">
            Message
          </label>
          <textarea
            className="rounded-md px-3 py-2 bg-mainwhite text-maindark h-[7em]"
            aria-label="Message"
            id="message"
            name="message"
            value={message}
            style={{ overflow: "hidden", resize: "none" }}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="self-end mt-2 bg-crimson w-[20%] text-mainwhite rounded-md px-4 py-[0.6rem]"
          type="submit"
          disabled={state.submitting || state.succeeded}
        >
          Submit
        </button>
      </form>
      <div className="mt-3 flex w-[80%] mx-auto flex-col border-white">
        <div className="divider text-mainwhitefont font-semibold before:bg-mainwhite after:bg-mainwhite ">
          Or contact me via social media
        </div>
      </div>

      <div className="mt-2 flex gap-5 w-[80%] items-start mx-auto">
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
      </div>
    </>
  );
}

export default Form;
