import Navbar from "../UI/Navbar";
import ContactHeader from "./ContactHeader";
import ContactMethods from "./ContactMethods";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  return (
    <AnimatePresence>
      <Navbar />
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1, transition: { duration: 1.5 } }}
        // exit={{ opacity: 0 }}
        className="overflow-x-hidden shadow-maindark"
      >
        <div className="h-[100vh] w-screen grid grid-cols-[0.40fr_0.60fr] overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
          <motion.div
            initial={{ opacity: 1, x: -150 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, x: -150 }}
            whileHover={{
              scale: 1.03,
              zIndex: 60,
              transition: { duration: 0.05 },
            }}
            className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] "
          >
            <ContactHeader />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 1, x: 200 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.1 } },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-maindark h-full transition-all duration-500 z-50 shadow-maindark shadow-lg sticky"
          >
            <ContactMethods />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Contact;
