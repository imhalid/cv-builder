import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const CvSelector = () => {
  const { selectTemplate } = useContext(CvContext);
  return (
    <div className="z-10 relative mb-4 text-neutral-900 flex items-center w-fit  mx-auto text-center backdrop-blur-2xl bg-white/50 border border-black/10 px-5 py-3 space-x-5 transition-all rounded-full  ">
      <button className="buttonHover" value={1} onClick={selectTemplate}>
        Template 1
      </button>
      <button className="buttonHover" value={2} onClick={selectTemplate}>
        Template 2
      </button>
      <button className="buttonHover" value={3} onClick={selectTemplate}>
        Template 2
      </button>
    </div>
  );
};

export default CvSelector;
