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
        <div className="h-[80vh] w-screen grid  overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
          <motion.div className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] ">
            <GalleryHeader />
          </motion.div>
        </div>
      </motion.div>
      {/* <GalleryPictures /> */}
    </>
  );
}

export default Gallery;
