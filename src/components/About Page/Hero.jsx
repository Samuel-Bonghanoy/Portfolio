import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function DeveloperSection() {
  return (
    <>
      <div className="pt-[15%] flex flex-col w-full h-[100%] items-center justify-center shadow-maindark shadow-xl sticky">
        <LazyLoadImage
          effect="blur"
          src="/samuel.png"
          loading="lazy"
          className="h-[80%]"
        />
      </div>
    </>
  );
}

export default DeveloperSection;
