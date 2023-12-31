import Footer from "../Landing Page/Footer";
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
        className="overflow-x-hidden shadow-maindark shadow-lg "
      >
        <div className="sm:h-[60vh] md:h-[80vh] w-screen grid  overflow-x-hidden overflow-y-hidden shadow-maindark shadow-stone-400 border-maindark shadow-lg z-[60]">
          <motion.div className="bg-mainwhite  transition-all duration-500 z-50 border-maindark shadow-stone-400 shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] ">
            <GalleryHeader />
          </motion.div>
        </div>
      </motion.div>
      <GalleryPictures />
      <Footer />
    </>
  );
}

export default Gallery;
