import { motion } from "framer-motion";
import CV from "/Bonghanoy_CV.pdf";

function DeveloperSection() {
  return (
    <>
      <div className="pt-[17%] flex flex-col w-full h-[100%]justify-between shadow-maindark shadow-xl">
        <div className="flex flex-col gap-5 mx-auto">
          <h1 className="text-noto sm:text-2xl md:text-4xl font-bold text-mainwhite">
            かいはつしゃ
          </h1>
          <h1 className="text-mainwhite font-black sm:text-4xl md:text-6xl">
            developer.
          </h1>
          <p className="text-gray-300 text-clip mt-2 md:max-w-[45ch] sm:max-w-[37ch] sm:text-sm md:text-[1rem] font-normal">
            Computer Science student and aspiring fullstack web developer based
            in the Philippines.
          </p>
          <div className="pt-[10%] justify-self-end">
            <a
              href={CV}
              download="Samuel_Bonghanoy_Curriculum_Vitae"
              target="_blank"
              rel="noopener
              noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="rounded-lg border-4 border-solid text-maindark sm:w-[9rem] md:w-[12rem] px-2 py-3 shadow-mainwhite shadow-sm border-mainwhite self-center justify-self-end sm:text-sm md:text-lg font-bold bg-mainwhite hover:cursor-pointer duration-100 hover:shadow-mainwhite "
              >
                download my cv
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperSection;
