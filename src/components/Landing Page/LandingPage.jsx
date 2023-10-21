import DeveloperSection from "./DeveloperSection";
import PhotographySection from "./PhotographySection";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[70vh] w-screen grid grid-cols-2 overflow-x-hidden overflow-y-hidden">
        <div className="bg-mainwhite hover:scale-[1.10] hover:scale-x-[1.18] transition-all duration-500 z-50">
          <PhotographySection />
        </div>
        <div className="bg-maindark hover:scale-[1.10] hover:scale-x-[1.18] transition-all duration-500">
          <DeveloperSection />
        </div>
      </div>
      <div className="h-[50vh]"></div>
    </div>
  );
}

export default LandingPage;
