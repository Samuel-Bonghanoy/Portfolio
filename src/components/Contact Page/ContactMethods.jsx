import Form from "./Form";
import SocialMedia from "./SocialMedia";

function ContactMethods() {
  return (
    <div className="pt-[13%] h-full">
      <Form />
      <div className="mt-3 flex w-[80%] mx-auto flex-col border-white">
        <div className="divider text-mainwhitefont font-semibold before:bg-mainwhite after:bg-mainwhite ">
          Or contact me via social media
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}

export default ContactMethods;
