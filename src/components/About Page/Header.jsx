function Header() {
  return (
    <>
      <div className="pt-[15%] text-darktext flex flex-col h-[100%] shadow-mainwhite shadow-lg">
        <div className="flex flex-col gap-5 font-bold ml-[10rem]">
          <h1 className="text-noto text-6xl font-bold">バックグラウンド</h1>
          <h1 className="font-black text-8xl mb-3">about.</h1>
          <p className="text-lg text-graytext mt-2 max-w-[64ch] font-normal">
            Learn more about me and my various experiences in the world of
            software and technology.
          </p>

          <p className="text-lg text-graytext mt-2 max-w-[47ch] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            esse, ipsam autem alias nobis accusamus incidunt aspernatur repellat
            deleniti corporis quia enim mollitia explicabo quis, reiciendis
            vitae. Corrupti minus error sit hic exercitationem tempore nam
            temporibus maxime vel aperiam, repellendus aspernatur ipsum aliquam,
            eos
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
