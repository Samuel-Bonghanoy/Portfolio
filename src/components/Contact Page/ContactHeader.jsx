import { motion } from "framer-motion";

function ContactHeader() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        exit={{ opacity: 0, x: -150 }}
        className="pt-[30%] text-darktext flex flex-col h-[100%] shadow-mainwhite shadow-lg"
      >
        <div className="flex flex-col gap-5 font-bold mx-auto">
          <h1 className="text-noto text-6xl font-bold">れんらく</h1>
          <h1 className="font-black text-8xl mb-3">contact.</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-[45ch] font-normal">
            Feel free to get in touch with me through any of my social media
            accounts or via email
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default ContactHeader;
