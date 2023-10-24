import Header from "./Header";
import Hero from "./Hero";
// import LandingDivider from "../Landing Page/LandingDivider";
// import projects from "../../utils/projects";
// import Card from "../UI/Card";
// import Footer from "../Landing Page/Footer";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          exit={{ opacity: 0 }}
          className="overflow-x-hidden shadow-maindark"
        >
          <div className="h-[100vh] w-screen grid grid-cols-[0.6fr_0.40fr] overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, x: -200 }}
              className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] hover:z-[60]"
            >
              <Header />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, x: 150 }}
              className="bg-maindark transition-all duration-500 z-50 shadow-maindark shadow-lg sticky"
            >
              <Hero />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* <div className="h-full pt-16 pb-24 gap-8 bg-subwhite  shadow-lg border-b border-r border-l border-2 flex flex-col items-center">
        <LandingDivider />
        <div className="flex gap-6">
          {projects.map((p) => (
            <Card project={p} key={p.title} />
          ))}
        </div>
      </div>
      <Footer /> */}
    </>
  );
}

export default About;
