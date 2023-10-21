import { Button } from "@mui/material";

function PhotographySection() {
  return (
    <>
      <div className="mt-[20%] text-darktext flex flex-col  ">
        <h1 className="font-black text-6xl mx-auto">photographer</h1>
        <p className="text-md mt-3  mx-auto">
          Street, landscape, and architectural photography hobbyist
        </p>
        <button className="rounded border-solid  w-[10rem] px-3 py-3 border-maindark self-center">
          View my gallery
        </button>
      </div>
    </>
  );
}

export default PhotographySection;
