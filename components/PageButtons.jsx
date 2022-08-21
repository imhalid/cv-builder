import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { GoCloudDownload } from "react-icons/go";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const PageButtons = () => {
  const { scaleUp, scaleDown, ifScaleUpOrDown } = useContext(CvContext);
  return (
    <div className="z-10 relative md:bottom-9 text-neutral-500 flex items-center w-fit md:left-[26.5rem] md:right-0 mx-auto text-center backdrop-blur-2xl bg-white/50 border border-black/10 px-5 py-3 space-x-5 transition-all rounded-full  md:absolute">
      <button className="buttonHover" onClick={scaleUp}>
        <BsZoomIn className="h-8 w-8" />
      </button>
      <button className="buttonHover" onClick={scaleDown}>
        <BsZoomOut className="h-8 w-8" />
      </button>
      <button className="buttonHover" onClick={ifScaleUpOrDown}>
        <GoCloudDownload className="h-8 w-8" />
      </button>
    </div>
  );
};

export default PageButtons;
