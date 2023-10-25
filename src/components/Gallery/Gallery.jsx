import night1 from "/night1.png";
import grass from "/grass.png";
import hp1 from "/hp1.png";

function Gallery() {
  return (
    <div className="bg-mainwhite">
      <div className="grid w-[80%] mx-auto py-[2%] grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid grid-rows-[0.4fr_0.25fr_0.35fr] gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg"
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
        <div className="grid grid-rows-[0.45fr_0.35fr_0.20fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${grass}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${hp1}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full"
          ></div>
          <div
            style={{
              backgroundImage: `url(${night1}`,
              backgroundSize: "cover",
            }}
            className="h-full "
          ></div>
        </div>
        <div className="grid grid-rows-[0.35fr_0.35fr_0.20fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${grass}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${hp1}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full"
          ></div>
          <div
            style={{
              backgroundImage: `url(${night1}`,
              backgroundSize: "cover",
            }}
            className="h-full "
          ></div>
        </div>
        <div className="grid grid-rows-[0.45fr_0.35fr_0.20fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${grass}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${hp1}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full"
          ></div>
          <div
            style={{
              backgroundImage: `url(${night1}`,
              backgroundSize: "cover",
            }}
            className="h-full "
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
