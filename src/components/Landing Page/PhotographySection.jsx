function PhotographySection() {
  return (
    <>
      <div className="pt-[20%] text-darktext flex flex-col h-[100%]  justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="font-black text-6xl mx-auto">photographer</h1>
          <p className="text-md  mx-auto">
            Street, landscape, and architectural photography hobbyist
          </p>
        </div>
        <div className="pb-[15%] self-center justify-self-end">
          <button className="rounded-lg border border-4 border-solid  w-[12rem] px-3 py-3 border-maindark self-center justify-self-end text-lg font-black">
            View my gallery
          </button>
        </div>
      </div>
    </>
  );
}

export default PhotographySection;
