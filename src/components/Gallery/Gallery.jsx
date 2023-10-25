import GalleryHeader from "./GalleryHeader";
import GalleryNav from "./GalleryNav";
import GalleryPictures from "./GalleryPictures";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <>
      <GalleryNav />
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1, transition: { duration: 1.2 } }}
        // exit={{ opacity: 0 }}
        className="overflow-x-hidden shadow-maindark"
      >
        <div className="h-[100vh] w-screen grid grid-cols-[0.6fr_0.40fr] overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
          <motion.div
            initial={{ opacity: 1, x: -200 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
            exit={{ opacity: 1, x: -200 }}
            whileHover={{
              scale: 1.03,
              zIndex: 60,
              transition: { duration: 0.05 },
            }}
            className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] "
          >
            <GalleryHeader />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 150 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
            className="bg-maindark transition-all duration-500 z-50 shadow-maindark shadow-lg sticky"
          ></motion.div>
        </div>
      </motion.div>
      <GalleryPictures />
    </>
  );
}

export default Gallery;
