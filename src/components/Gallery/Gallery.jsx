function Gallery() {
  return (
    <div className="bg-mainwhite">
      <div className="grid w-[80%] mx-auto py-[2%] grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[14rem] w-auto max-w-full rounded-lg object-fit"
              src="/night3.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/silhouette1.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-[105%] max-w-full rounded-lg"
              src="/hp1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[100%] max-w-full rounded-lg"
              src="/hp2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night3.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night3.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/night3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
