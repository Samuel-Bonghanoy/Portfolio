import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xdorbdze");

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-fit flex flex-col gap-3">
      <div className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="flex flex-col">
        <input
          aria-label="Name"
          type="text"
          name="name"
          value={name}
          required
        />
      </div>
      <div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting || state.succeeded}>
        Submit
      </button>
    </form>
  );
}

export default Form;
