import { motion, AnimatePresence } from "framer-motion";

import ContactBtn from "../UI Component/ContactBtn";
import GithubBtn from "../UI Component/GithubBtn";
import SetEmpty from "../UI Component/SetEmpty";
import SetSample from "../UI Component/SetSample";

const SettingMain = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <h1 className="text-2xl font-bold">CV Builder</h1>
        <div className="mt-5">
          <p>
            While doing this project, I was inspired by{" "}
            <a
              className="font-bold text-rose-500 underline"
              href="https://cvfy.xyz/en/"
            >
              the project
            </a>{" "}
            that Claudia did 2 years ago. And most importantly, I wanted to try
            myself to see if I could do a project that I saw.
            <span className=" text-black underline p-1 rounded-md">
              <br />
              <br />
              And I think I've succeeded. 🥳
            </span>
          </p>

          <div className="bg-emerald-100/50 border-2 border-emerald-700/50 px-2 mt-4 mb-2 pt-4 py-2 rounded-xl">
            <h1 className="text-emerald-900 text-xl font-bold">Before using</h1>
            <ol className="list-none mt-2 text-emerald-900 space-y-2">
              <li>● Not suitable for mobile version.</li>
              <li>
                ● The <strong>Reset</strong> button and the
                <strong> Fill Sample Data </strong>
                button will clear all the changes you have made and you cannot
                undo them.
              </li>
              <li>
                ● <strong>Contact me</strong> if you encounter any problems.
              </li>
              <li>
                ● Sometimes checkboxes don't work as they should.
                <strong> Just click twice for it to work properly.</strong>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex space-x-2">
            <ContactBtn />
            <GithubBtn />
          </div>
          <div className="flex space-x-2 mt-2">
            <SetEmpty />
            <SetSample />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingMain;
