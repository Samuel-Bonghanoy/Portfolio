import { motion } from "framer-motion";

function Header() {
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
        className="pt-[15%] text-darktext flex flex-col h-[100%] shadow-mainwhite shadow-lg"
      >
        <div className="flex flex-col gap-5 font-bold mx-auto">
          <h1 className="text-noto text-6xl font-bold">バックグラウンド</h1>
          <h1 className="font-black text-8xl mb-3">about.</h1>
          <motion.p
            initial={{ opacity: 0, x: -150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="text-lg text-graytext mt-2 max-w-[64ch] font-normal"
          >
            I am a Computer Science student from the University of San Carlos,
            and an aspiring{" "}
            <strong className="text-crimson font-bold">
              Fullstack Web Developer
            </strong>{" "}
            based in Cebu. My main hobbies in my free time are photography,
            photo editing, video editing, and alot of things that have to do
            with visual design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="text-lg text-gray-600 mt-2 max-w-[64ch] font-normal"
          >
            I am constantly looking for opportunities to learn, to hone my
            skills, and to connect with other people as a developer. Seeking out
            opportunities to grow my portfolio, I can often be seen
            participating and even hosting extracurricular events with various
            organizations within my school.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
