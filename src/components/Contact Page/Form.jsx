import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

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
        onSubmit={() => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Emilia Gates
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Sure! 8:30pm works great!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ));
          handleSubmit;
        }}
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="self-end mt-2 bg-crimson w-[20%] text-mainwhite rounded-md px-4 py-[0.6rem]"
          type="submit"
          onClick={() => {
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Emilia Gates
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Sure! 8:30pm works great!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ));
          }}
          disabled={state.submitting || state.succeeded}
        >
          Submit
        </motion.button>
      </form>
    </>
  );
}

export default Form;
