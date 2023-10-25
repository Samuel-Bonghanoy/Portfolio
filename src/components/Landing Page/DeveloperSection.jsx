import { motion } from "framer-motion";
import CV from "/Bonghanoy_CV.pdf";

function DeveloperSection() {
  return (
    <>
      <div className="pt-[17%] flex flex-col w-full h-[100%]justify-between shadow-maindark shadow-xl">
        <div className="flex flex-col gap-5 mx-auto">
          <h1 className="text-noto text-4xl font-bold text-mainwhite">
            かいはつしゃ
          </h1>
          <h1 className="text-mainwhite font-black text-6xl">developer.</h1>
          <p className="text-gray-300 text-clip mt-2 max-w-[45ch] font-normal">
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
                className="rounded-lg border-4 border-solid text-maindark w-[12rem] px-2 py-3 shadow-mainwhite shadow-sm border-mainwhite self-center justify-self-end text-lg font-bold bg-mainwhite hover:cursor-pointer duration-100 hover:shadow-mainwhite "
              >
                download my CV
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperSection;
