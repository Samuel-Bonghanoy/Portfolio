import DeveloperSection from "../Landing Page/DeveloperSection";
import PhotographySection from "../Landing Page/PhotographySection";

function About() {
  return (
    <>
      <div className="overflow-x-hidden shadow-maindark">
        <div className="h-[75vh] w-screen grid grid-cols-2 overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
          <div className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg">
            <PhotographySection />
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
