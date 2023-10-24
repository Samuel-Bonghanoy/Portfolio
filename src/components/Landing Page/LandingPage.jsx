import DeveloperSection from "./DeveloperSection";
import LandingDivider from "./LandingDivider";
import PhotographySection from "./PhotographySection";
import projects from "../../utils/projects";
import Card from "../UI/Card";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="overflow-x-hidden shadow-maindark">
      <div className="h-[75vh] w-screen grid grid-cols-2 overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
        <div className="bg-mainwhite hover:scale-[1.10] hover:scale-x-[1.15] transition-all duration-500 z-50 hover:z-[60] shadow-maindark shadow-lg">
          <PhotographySection />
        </div>
        <div className="bg-maindark hover:scale-[1.10] hover:scale-x-[1.15] transition-all duration-500 z-50 hover:z-[60] shadow-maindark shadow-lg">
          <DeveloperSection />
        </div>
      </div>

      <div className="h-full pt-16 pb-24 gap-8 bg-subwhite  shadow-lg border-b border-r border-l border-2 flex flex-col items-center">
        <LandingDivider />
        <div className="flex gap-6">
          {projects.map((p) => (
            <Card project={p} key={p.title} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
