import Header from "./Header";
import Hero from "./Hero";

function About() {
  return (
    <>
      <div className="overflow-x-hidden shadow-maindark">
        <div className="h-[100vh] w-screen grid grid-cols-[0.6fr_0.40fr] overflow-x-hidden overflow-y-hidden shadow-maindark shadow-lg">
          <div className="bg-mainwhite  transition-all duration-500 z-50  shadow-maindark shadow-lg hover:scale-[1.01] hover:scale-x-[1.02] hover:z-[60]">
            <Header />
          </div>
          <div className="bg-maindark transition-all duration-500 z-50 shadow-maindark shadow-lg ">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
