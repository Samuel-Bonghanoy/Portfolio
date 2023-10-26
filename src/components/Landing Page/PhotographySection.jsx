import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function PhotographySection() {
  return (
    <>
      <div className="sm:pt-[22%] md:pt-[17%] text-darktext flex flex-col h-[100%] justify-between shadow-mainwhite shadow-lg">
        <div className="flex flex-col gap-5 font-bold mx-auto">
          <h1 className="text-noto sm:text-2xl md:text-4xl font-bold">
            フォトグラファー
          </h1>
          <h1 className="font-black sm:text-4xl md:text-6xl ">photographer.</h1>
          <p className="text-md text-graytext mt-2 md:max-w-[45ch] sm:max-w-[37ch] sm:text-sm md:text-[1rem] font-normal">
            Recreational photography hobbyist whose subjects are mostly street,
            landscape, and architectural.
          </p>
          <div className="pt-[10%] justify-self-end">
            <NavLink to="/gallery">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="rounded-lg border-4 shadow-maindark shadow-sm border-solid text-mainwhite sm:w-[9rem] md:w-[12rem] px-2 py-3 border-maindark self-center justify-self-end sm:text-sm md:text-lg font-bold bg-maindark hover:cursor-pointer duration-100 hover:shadow-slate-800 hover:scale-[1.05]"
              >
                view my gallery
              </motion.button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotographySection;
