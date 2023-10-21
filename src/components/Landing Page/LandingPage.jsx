import DeveloperSection from "./DeveloperSection";
import PhotographySection from "./PhotographySection";

function LandingPage() {
  return (
    <div className="h-screen w-screen grid grid-cols-2 overflow-x-hidden overflow-y-hidden">
      <div className="bg-mainwhite hover:scale-[1.10] hover:scale-x-[1.18] transition-all duration-500 z-50">
        <PhotographySection />
      </div>
      <div className="bg-maindark hover:scale-[1.10] hover:scale-x-[1.18] transition-all duration-500">
        <DeveloperSection />
      </div>
    </div>
  );
}

export default LandingPage;
