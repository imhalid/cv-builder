import CoffeSVG from "./CoffeSVG";

const GithubBtn = () => {
  return (
    <a
      className="resetButton transition-all flex  justify-center bg-yellow-400   group hover:bg-yellow-400 h-10 overflow-hidden relative"
      href="https://www.buymeacoffee.com/imhalid"
    >
      <button>
        <CoffeSVG />
      </button>
    </a>
  );
};

export default GithubBtn;
