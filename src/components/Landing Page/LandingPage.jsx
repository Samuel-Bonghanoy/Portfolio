import DeveloperSection from "./DeveloperSection";
import LandingDivider from "./LandingDivider";
import PhotographySection from "./PhotographySection";
import projects from "../../utils/projects";
import Card from "../UI/Card";
import Footer from "./Footer";

import { motion } from "framer-motion";

function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden shadow-maindark"
    >
      <div className="h-[75vh] w-screen grid grid-cols-2 overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
          exit={{ opacity: 0, x: -250 }}
          whileHover={{
            scale: 1.15,
            zIndex: 60,
            transition: { duration: 0.05 },
          }}
          className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg"
        >
          <PhotographySection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
          exit={{ opacity: 0, x: 250 }}
          whileHover={{
            scale: 1.15,
            zIndex: 60,
            transition: { duration: 0.05 },
          }}
          className="bg-maindark transition-all duration-500 z-50 hover:z-[60] shadow-maindark shadow-lg"
        >
          <DeveloperSection />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
        exit={{ opacity: 0, x: -150 }}
        className="h-full pt-16 pb-24 gap-8 bg-subwhite  shadow-lg border-b border-r border-l border-2 flex flex-col items-center"
      >
        <LandingDivider />
        <div className="flex gap-6">
          {projects.map((p) => (
            <Card project={p} key={p.title} />
          ))}
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
}

export default LandingPage;
