import DeveloperSection from "./DeveloperSection";
import PhotographySection from "./PhotographySection";

function LandingPage() {
  return (
    <div className="h-screen w-screen grid grid-cols-2">
      <div className="bg-mainwhite ">
        <PhotographySection />
      </div>
      <div className="bg-maindark">
        <DeveloperSection />
      </div>
    </div>
  );
}

export default LandingPage;
