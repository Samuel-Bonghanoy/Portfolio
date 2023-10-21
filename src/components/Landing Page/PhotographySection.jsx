function PhotographySection() {
  return (
    <>
      <div className="pt-[17%] text-darktext flex flex-col h-[100%] justify-between">
        <div className="flex flex-col gap-5 mx-auto">
          <h1 className="text-noto text-4xl font-bold">フォトグラファー</h1>
          <h1 className="font-black text-6xl ">photographer</h1>
          <p className="text-md mt-2 max-w-[47ch]">
            Recreational photography hobbyist whose subjects are mostly street,
            landscape, and architectural.
          </p>
          <div className="pt-[10%] justify-self-end">
            <button className="rounded-lg border-4 border-solid text-mainwhite  w-[12rem] px-2 py-3 border-maindark self-center justify-self-end text-lg font-black bg-maindark hover:cursor-pointer duration-100 hover:border-crimson hover:text-crimson">
              view my gallery
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotographySection;
