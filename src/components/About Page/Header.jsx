function Header() {
  return (
    <>
      <div className="pt-[15%] text-darktext flex flex-col h-[100%] shadow-mainwhite shadow-lg">
        <div className="flex flex-col gap-5 font-bold mx-auto">
          <h1 className="text-noto text-6xl font-bold">バックグラウンド</h1>
          <h1 className="font-black text-8xl mb-3">about.</h1>
          <p className="text-lg text-graytext mt-2 max-w-[64ch] font-normal">
            I am a Computer Science student in the University of San Carlos, and
            an aspiring{" "}
            <strong className="text-crimson font-bold">
              Fullstack Web Developer
            </strong>{" "}
            based in Cebu. My main hobby in my free time is photography, photo
            editing, video editing, and alot of things that have to do with
            visual design.
          </p>

          <p className="text-lg text-graytext mt-2 max-w-[64ch] font-normal">
            I am constantly looking for opportunities to learn, to hone my
            skills, and to connect with other people. As a student, I am very
            active in extracurricular organizations to help grow my portfolio.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
