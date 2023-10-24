import Header from "./Header";
import Hero from "./Hero";
import LandingDivider from "../Landing Page/LandingDivider";
import projects from "../../utils/projects";
import Card from "../UI/Card";
import Footer from "../Landing Page/Footer";
import Carousel from "./Carousel";

function About() {
  return (
    <>
      <div className="overflow-x-hidden shadow-maindark">
        <div className="h-[100vh] w-screen grid grid-cols-[0.6fr_0.40fr] overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
          <div className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] hover:z-[60]">
            <Header />
          </div>
          <div className="bg-maindark transition-all duration-500 z-50 shadow-maindark shadow-lg sticky">
            <Hero />
          </div>
        </div>
      </div>
      <div className="h-full w-full pt-16 pb-24 gap-8 bg-subwhite  shadow-lg border-b border-r border-l border-2 flex flex-col items-center">
        <LandingDivider />
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default About;
