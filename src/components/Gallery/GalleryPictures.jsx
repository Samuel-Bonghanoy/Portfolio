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

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function GalleryPictures() {
  return (
    <div className="bg-subwhite  border-t-[0.15rem] border-textgray">
      <div className="grid w-[80%] mx-auto py-[4%] grid-cols-2 md:grid-cols-5 gap-4">
        {/* 1 */}
        <div className="grid grid-rows-[0.4fr_0.25fr_0.35fr] gap-4">
          <div>
            <LazyLoadImage
              className="h-full max-w-full rounded-lg"
              src="/hamilton.jpg"
              effect="blur"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              className="h-[14rem] w-auto max-w-full rounded-lg object-fit"
              src="/night2.jpg"
              effect="blur"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              className="h-auto max-w-full rounded-lg"
              src="/silhouette.jpg"
              effect="blur"
              alt=""
            />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-4 justify-evenly">
          <div className="h-fit">
            <LazyLoadImage
              effect="blur"
              src={hp2}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </div>
          <div className="h-fit">
            <LazyLoadImage
              src={city}
              className="h-full w-full rounded-lg"
            ></LazyLoadImage>
          </div>
          <div className="h-[20%]">
            <LazyLoadImage
              src={night1}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-4">
          <div className="h-[18%] rounded-lg">
            <LazyLoadImage
              src={docks}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </div>
          <div className="h-[47%] w-full rounded-lg">
            <LazyLoadImage
              src={crow}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </div>
          <div className="h-[38%] rounded-lg">
            <LazyLoadImage
              src={Tower}
              className="h-full rounded-lg"
            ></LazyLoadImage>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col gap-4">
          <div className="h-fit rounded-lg">
            <LazyLoadImage
              src={hp3}
              className="h-fit rounded-lg"
            ></LazyLoadImage>
          </div>
          <div className="h-[20%] w-full rounded-lg object-fit">
            <LazyLoadImage
              src={clock}
              className="h-fit w-full object-cover rounded-lg"
            ></LazyLoadImage>
          </div>
          <div className="h-fit w-full rounded-lg">
            <LazyLoadImage
              src={hp1}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </div>
        </div>
        <div className="flex flex-col  gap-4">
          <div className="h-full w-full rounded-lg">
            <LazyLoadImage
              src={grass}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </div>
          <div className="h-full w-full rounded-lg">
            <LazyLoadImage
              src={spicy}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </div>
          <div className="h-full rounded-lg">
            <LazyLoadImage
              src={bridge}
              className="h-full w-full rounded-lg object-contain"
            ></LazyLoadImage>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPictures;
