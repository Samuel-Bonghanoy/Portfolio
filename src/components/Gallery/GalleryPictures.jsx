import night1 from "/night1.jpg";
import grass from "/dreamy.jpg";
import hp1 from "/hp1.jpg";
import bridge from "/bridge.jpg";
import clock from "/clock.jpg";
import city from "/city.jpg";
import crow from "/crow.jpg";
import Tower from "/Tower2.jpg";
import docks from "/docks.jpg";
import hp2 from "/hp2.jpg";
import hp3 from "/hp3.jpg";
import spicy from "/duck.jpg";

import { motion } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function GalleryPictures() {
  return (
    <div className="bg-subwhite  border-t-[0.15rem] border-textgray">
      <div className="grid w-[80%] mx-auto py-[4%] grid-cols-2 md:grid-cols-5 gap-4">
        {/* 1 */}
        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              className="h-full max-w-full rounded-lg  transition-all duration-500 hover:scale-[1.03]"
              src="/hamilton.jpg"
              effect="blur"
              alt=""
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              className="h-[14rem] w-auto max-w-full rounded-lg object-fit"
              src="/night2.jpg"
              effect="blur"
              alt=""
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              className="h-auto max-w-full rounded-lg"
              src="/silhouette.jpg"
              effect="blur"
              alt=""
            />
          </motion.div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-4 ">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              effect="blur"
              src={hp2}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              src={city}
              className="h-full w-full rounded-lg"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              src={bridge}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </motion.div>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              src={docks}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="h-[38%]"
          >
            <LazyLoadImage
              src={crow}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="h-[30%]"
          >
            <LazyLoadImage
              src={Tower}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </motion.div>
        </div>
        {/* 4 */}
        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="h-[45%]"
          >
            <LazyLoadImage
              src={grass}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="h-[23%]"
          >
            <LazyLoadImage
              src={clock}
              className="h-full w-full object-cover rounded-lg object-[85%,15%]"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              src={hp1}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              src={hp3}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              src={spicy}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
          >
            <LazyLoadImage
              src={night1}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPictures;
