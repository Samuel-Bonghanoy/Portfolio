import { motion } from "framer-motion";

function GalleryHeader() {
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
        className="pt-[10%] text-darktext flex flex-col h-[100%] shadow-mainwhite shadow-lg"
      >
        <div className="flex flex-col gap-5 font-bold mx-auto">
          <h1 className="text-noto text-6xl font-bold">ギャラリ</h1>
          <h1 className="font-black text-8xl mb-3">gallery.</h1>
          <motion.p
            initial={{ opacity: 0, x: -150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="text-lg text-gray-600 mt-2 max-w-[45ch] font-normal"
          >
            One of my biggest hobbies is capturing landscapes, streets, and
            buildings with a camera, most especially when I travel. Here are
            some of my best shots.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export default GalleryHeader;
