import { FaGithubAlt } from "react-icons/fa";

const GithubBtn = () => {
  return (
    <a
      className="resetButton transition-all  flex justify-center bg-zinc-700  group hover:bg-neutral-700 h-10 overflow-hidden relative"
      href="https://github.com/imhalid/cv-for-job"
      target="_blank"
      rel="noreferrer"
    >
      <button>
        <FaGithubAlt className="pb-1 w-9 h-9 text-white " />
      </button>
    </a>
  );
};

export default GithubBtn;
