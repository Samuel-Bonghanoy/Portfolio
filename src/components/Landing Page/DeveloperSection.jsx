function DeveloperSection() {
  return (
    <>
      <div className="pt-[17%] flex flex-col w-full h-[100%]justify-between shadow-maindark shadow-lg">
        <div className="flex flex-col gap-5 mx-auto">
          <h1 className="text-noto text-4xl font-bold text-mainwhite">
            かいはつしゃ
          </h1>
          <h1 className="text-mainwhite font-black text-6xl">developer</h1>
          <p className="text-gray-300 text-clip mt-2 max-w-[45ch]">
            Computer Science student and aspiring fullstack web developer based
            in the Philippines.
          </p>
          <div className="pt-[10%] justify-self-end">
            <button className="rounded-lg border-4 border-solid text-maindark w-[12rem] px-2 py-3 shadow-mainwhite shadow-sm border-mainwhite self-center justify-self-end text-lg font-bold bg-mainwhite hover:cursor-pointer duration-100 hover:shadow-mainwhite hover:scale-[1.05]">
              view my portfolio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperSection;
