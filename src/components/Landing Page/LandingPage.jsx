import DeveloperSection from "./DeveloperSection";
import PhotographySection from "./PhotographySection";

function LandingPage() {
  return (
    <div className="overflow-x-hidden shadow-maindark shadow-lg">
      <div className="h-[70vh] w-screen grid grid-cols-2 overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
        <div className="bg-mainwhite hover:scale-[1.10] hover:scale-x-[1.18] transition-all duration-500 z-50 shadow-maindark shadow-lg">
          <PhotographySection />
        </div>
        <div className="bg-maindark hover:scale-[1.10] hover:scale-x-[1.18] transition-all duration-500 shadow-maindark shadow-lg">
          <DeveloperSection />
        </div>
      </div>
      <div className="h-[50vh] bg-mainwhite "></div>
    </div>
  );
}

export default LandingPage;
