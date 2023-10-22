function Header() {
  return (
    <>
      <div className="pt-[20%] text-darktext flex flex-col h-[100%] justify-between shadow-mainwhite shadow-lg">
        <div className="flex flex-col gap-5 font-bold mx-auto">
          <h1 className="text-noto text-5xl font-bold">バックグラウンド</h1>
          <h1 className="font-black text-8xl ">about.</h1>
          <p className="text-md text-graytext mt-2 max-w-[47ch] font-normal">
            Learn more about me and my various experiences in the world of
            software and technology.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
