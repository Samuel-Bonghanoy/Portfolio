import night1 from "/night1.jpg";
import grass from "/dreamy.jpg";
import hp1 from "/hp1.jpg";

function GalleryPictures() {
  return (
    <div className="bg-subwhite border-t-[0.15rem] border-textgray">
      <div className="grid w-[80%] mx-auto py-[6%] grid-cols-2 md:grid-cols-5 gap-4">
        {/* 1 */}
        <div className="grid grid-rows-[0.4fr_0.25fr_0.35fr] gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src="/hamilton.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[14rem] w-auto max-w-full rounded-lg object-fit"
              src="/night2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/silhouette.jpg"
              alt=""
            />
          </div>
        </div>
        {/* 2 */}
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
            className="h-full w-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${night1}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
        </div>
        {/* 3 */}
        <div className="grid grid-rows-[0.20fr_0.35fr_0.45fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${night1}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${hp1}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${grass}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
        </div>
        {/* 4 */}
        <div className="grid grid-rows-[0.40fr_0.25fr_0.35fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${grass}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${night1}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${hp1}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
        </div>
        <div className="grid grid-rows-[0.60fr_0.15fr_0.25fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${grass}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${night1}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${hp1}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPictures;
