import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const SetSample = () => {
  const { setCV } = useContext(CvContext);
  return (
    <button
      className="resetButton transition-all h-10  bg-zinc-500 group hover:shadow-lg  hover:shadow-violet-300 hover:bg-violet-500 overflow-hidden relative flex-1"
      onClick={setCV}
    >
      <div className="h-1 transition-all bg-zinc-400 group-hover:bg-violet-400 blur-[2px] absolute top-0 w-full left-0"></div>
      Fill Sample Data
      <div className="h-1 transition-all bg-zinc-600 group-hover:bg-violet-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
    </button>
  );
};

export default SetSample;
