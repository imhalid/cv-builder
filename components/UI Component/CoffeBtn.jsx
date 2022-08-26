import CoffeSVG from "./CoffeSVG";

const GithubBtn = () => {
  return (
    <a
      className="resetButton transition-all flex  justify-center bg-yellow-400 hover:shadow-lg hover:shadow-yellow-400/50 group hover:bg-yellow-400 h-10 overflow-hidden relative"
      href="https://www.buymeacoffee.com/imhalid"
    >
      <button>
        <div className="h-1 transition-all bg-yellow-300 group-hover:bg-yellow-300 blur-[2px] absolute top-0 w-full left-0"></div>
        <CoffeSVG />
        <div className="h-1 transition-all bg-yellow-500 group-hover:bg-yellow-500 blur-[2px] absolute bottom-0 w-full left-0"></div>
      </button>
    </a>
  );
};

export default GithubBtn;
