import { HiMail } from "react-icons/hi";

const ContactBtn = () => {
  return (
    <a
      className="resetButton transition-all  flex flex-1 justify-center bg-blue-500 hover:shadow-lg hover:shadow-blue-300 group hover:bg-blue-500 h-10 overflow-hidden relative"
      href="mailto:imhalid@icloud.com"
    >
      <button>
        <div className="h-1 transition-all bg-blue-400 group-hover:bg-blue-400 blur-[2px] absolute top-0 w-full left-0"></div>
        <div className="flex items-center">
          <HiMail className="inline mr-1 w-5 h-5" />
          Contact Me
        </div>

        <div className="h-1 transition-all bg-blue-600 group-hover:bg-blue-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
      </button>
    </a>
  );
};

export default ContactBtn;
