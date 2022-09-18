import { HiMail } from "react-icons/hi";

const ContactBtn = () => {
  return (
    <a
      className="resetButton transition-all  flex flex-1 justify-center bg-blue-500  group hover:bg-blue-500 h-10 overflow-hidden relative"
      href="mailto:imhalid@icloud.com"
    >
      <button>
        <div className="flex items-center">
          <HiMail className="inline mr-1 w-5 h-5" />
          Contact Me
        </div>
      </button>
    </a>
  );
};

export default ContactBtn;
