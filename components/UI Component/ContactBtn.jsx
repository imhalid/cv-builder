const ContactBtn = () => {
  return (
    <a
      className="resetButton transition-all flex flex-1 justify-center bg-zinc-500 hover:shadow-lg hover:shadow-blue-300 group hover:bg-blue-500 h-10 overflow-hidden relative"
      href="mailto:imhalid@icloud.com"
    >
      <button>
        <div className="h-1 transition-all bg-zinc-400 group-hover:bg-blue-400 blur-[2px] absolute top-0 w-full left-0"></div>
        Contact Me
        <div className="h-1 transition-all bg-zinc-600 group-hover:bg-blue-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
      </button>
    </a>
  );
};

export default ContactBtn;
