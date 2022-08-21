import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const SetEmpty = () => {
  const { setEmptyCv } = useContext(CvContext);
  return (
    <button
      className="resetButton transition-all h-10  bg-zinc-500 group hover:shadow-lg  hover:shadow-rose-300 hover:bg-rose-500 overflow-hidden relative flex-1"
      onClick={setEmptyCv}
    >
      <div className="h-1 transition-all bg-zinc-400 group-hover:bg-rose-400 blur-[2px] absolute top-0 w-full left-0"></div>
      Reset
      <div className="h-1 transition-all bg-zinc-600 group-hover:bg-rose-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
    </button>
  );
};

export default SetEmpty;
