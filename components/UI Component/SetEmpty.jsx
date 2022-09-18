import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const SetEmpty = () => {
  const { setEmptyCv } = useContext(CvContext);
  return (
    <button
      className="resetButton transition-all h-10  bg-rose-500 group  hover:bg-rose-500 overflow-hidden relative flex-1"
      onClick={setEmptyCv}
    >
      Reset
    </button>
  );
};

export default SetEmpty;
