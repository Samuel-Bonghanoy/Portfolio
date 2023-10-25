import night1 from "/night1.jpg";
import grass from "/dreamy.jpg";
import hp1 from "/hp1.jpg";
import bridge from "/bridge.jpg";
import clock from "/clock.jpg";
import city from "/city.jpg";
import crow from "/crow.jpg";
import Tower from "/Tower2.jpg";
import docks from "/docks.jpg";
import hp2 from "/hp2.jpg";
import hp3 from "/hp3.jpg";
import spicy from "/spicy.jpg";

function GalleryPictures() {
  return (
    <div className="bg-subwhite border-t-[0.15rem] border-textgray">
      <div className="grid w-[80%] mx-auto py-[4%] grid-cols-2 md:grid-cols-5 gap-4">
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
              backgroundImage: `url(${hp2}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${city}`,
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
        <div className="grid grid-rows-[0.15fr_0.40fr_0.45fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${docks}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${crow}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${Tower}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
        </div>
        {/* 4 */}
        <div className="grid grid-rows-[0.40fr_0.25fr_0.35fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${hp3}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${clock}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full rounded-lg object-fit"
          ></div>
          <div
            style={{
              backgroundImage: `url(${hp1}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
        </div>
        <div className="grid grid-rows-[0.50fr_0.15fr_0.35fr] gap-4">
          <div
            style={{
              backgroundImage: `url(${grass}`,
              backgroundSize: "cover",
            }}
            className="h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${spicy}`,
              backgroundSize: "cover",
            }}
            className="h-full w-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(${bridge}`,
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
