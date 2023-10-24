import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function Form() {
  const [state, handleSubmit] = useForm("xdorbdze");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-[80%] h-fit flex flex-col gap-3"
    >
      <div className="flex flex-col gap-2">
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

      <div className="flex flex-col gap-2">
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

      <div className="flex flex-col w-full gap-2 h-full">
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
  );
}

export default Form;
