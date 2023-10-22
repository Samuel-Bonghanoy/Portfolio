import DeveloperSection from "../Landing Page/DeveloperSection";

import Header from "./Header";

function About() {
  return (
    <>
      <div className="overflow-x-hidden shadow-maindark">
        <div className="h-[100vh] w-screen grid grid-cols-2 overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
          <div className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg">
            <Header />
          </div>
          <div className="bg-maindark transition-all duration-500 z-50 shadow-maindark shadow-lg">
            <DeveloperSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
