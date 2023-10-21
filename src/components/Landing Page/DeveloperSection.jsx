function DeveloperSection() {
  return (
    <>
      <div className="pt-[20%] flex flex-col h-[100%] justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-mainwhite font-black text-6xl mx-auto">
            &lt;developer/&gt;
          </h1>
          <p className="text-gray-300 line-clamp-3 text-clip mx-auto max-w-[45ch]">
            Computer Science student and aspiring fullstack web developer
          </p>
        </div>
        <div className="pb-[8%] self-center justify-self-end">
          <button className="rounded-lg border-4 text-mainwhite font-bold border-mainwhite border-solid w-[12rem] px-3 py-3 self-center justify-self-end text-lg hover:cursor-pointer duration-100 hover:border-crimson hover:text-crimson">
            view my portfolio
          </button>
        </div>
      </div>
    </>
  );
}

export default DeveloperSection;
