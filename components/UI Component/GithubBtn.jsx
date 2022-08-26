import { FaGithubAlt } from "react-icons/fa";

const GithubBtn = () => {
  return (
    <a
      className="resetButton transition-all  flex justify-center bg-zinc-700 hover:shadow-lg hover:shadow-neutral-300 group hover:bg-neutral-700 h-10 overflow-hidden relative"
      href="https://github.com/imhalid/cv-for-job"
      target="_blank"
      rel="noreferrer"
    >
      <button>
        <div className="h-1 transition-all bg-zinc-500 group-hover:bg-neutral-500 blur-[2px] absolute top-0 w-full left-0"></div>
        <FaGithubAlt className="pb-1 w-9 h-9 text-white " />
        <div className="h-1 transition-all bg-zinc-600 group-hover:bg-neutral-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
      </button>
    </a>
  );
};

export default GithubBtn;
