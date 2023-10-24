import ContactHeader from "./ContactHeader";
import ContactMethods from "./ContactMethods";

function Contact() {
  return (
    <div className="overflow-x-hidden shadow-maindark">
      <div className="h-[100vh] w-screen grid grid-cols-[0.40fr_0.60fr] overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
        <div className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] hover:z-[60]">
          <ContactHeader />
        </div>
        <div className="bg-maindark transition-all duration-500 z-50 shadow-maindark shadow-lg sticky">
          <ContactMethods />
        </div>
      </div>
    </div>
  );
}

export default Contact;
