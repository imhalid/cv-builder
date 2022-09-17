import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import Inputs from "../UI Component/Inputs";

const Skills = () => {
  const { cv, addTag, removeTag } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
        layout
        className="cardStyle z-10 relative"
      >
        <motion.div
          initial={false}
          onClick={() => setIsOpen(isOpen ? false : true)}
          layout
          className="w-full flex text-neutral-500 cursor-pointer text-lg"
        >
          <span className="flex-1">Skills</span>
          <motion.div
            className="inline-block items-end"
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            <HiChevronRight className="inline w-6 h-6" />
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {
                    opacity: 1,
                    height: "auto",
                  },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <motion.div layout>
                  <Inputs
                    value={cv.skillTitle1}
                    placeholder="Title 1"
                    keyChange="skillTitle1"
                  />
                  <motion.div
                    layout
                    className="w-full relative bg-blue-50 rounded-xl p-2 border  border-gray-300 mt-3  flex items-center flex-wrap "
                  >
                    <motion.div
                      layout
                      className="absolute w-1 left-1/2 h-3 bg-blue-400 -top-3"
                    ></motion.div>

                    {cv.toolsAndTechSkills.map((tag, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="tagStyle text-blue-900 bg-blue-200/70"
                        key={index}
                      >
                        <motion.p layout className="mr-5">
                          {tag}
                        </motion.p>

                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="right-1 top-0 bottom-0 absolute"
                          onClick={() => removeTag("toolsAndTechSkills", tag)}
                        >
                          <RiCloseFill className="tagDeleteButton fill-blue-400 hover:fill-blue-700 hover:bg-blue-300/50" />
                        </motion.button>
                      </motion.div>
                    ))}
                    <motion.input
                      layout
                      type="text"
                      className=" px-2 m-1 resize bg-blue-50 text-blue-900 placeholder:text-blue-600/40 focus:outline-none border-blue-100 focus:border-blue-500 border-2  rounded-lg w-32"
                      placeholder="+ Add tag"
                      onKeyDown={(e) =>
                        addTag(e, "toolsAndTechSkills", e.target.value)
                      }
                    />
                  </motion.div>
                </motion.div>
                <motion.div layout="size" className=" mt-4">
                  <motion.div
                    layout
                    className="w-44 h-1 mx-auto bg-gray-200 rounded-full"
                  ></motion.div>
                  <Inputs
                    value={cv.skillTitle2}
                    placeholder="Title 2"
                    keyChange="skillTitle2"
                  />
                  <motion.div
                    layout
                    className="w-full relative bg-violet-50 rounded-xl p-2 border  border-gray-300 mt-3  flex items-center flex-wrap "
                  >
                    <motion.div
                      layout
                      className="absolute w-1 left-1/2 h-3 bg-violet-400 -top-3"
                    ></motion.div>

                    {cv.industryKnowledge.map((tag, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="tagStyle text-violet-900 bg-violet-200/70"
                        key={index}
                      >
                        <motion.p layout className="mr-5">
                          {tag}
                        </motion.p>

                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="right-1 top-0 bottom-0 absolute"
                          onClick={() => removeTag("industryKnowledge", tag)}
                        >
                          <RiCloseFill className="tagDeleteButton fill-violet-400 hover:fill-violet-700 hover:bg-violet-300/50" />
                        </motion.button>
                      </motion.div>
                    ))}
                    <motion.input
                      layout
                      type="text"
                      className=" px-2 m-1 resize bg-violet-50 text-violet-900 placeholder:text-violet-600/40 focus:outline-none border-violet-100 focus:border-violet-500 border-2  rounded-lg w-32"
                      placeholder="+ Add tag"
                      onKeyDown={(e) =>
                        addTag(e, "industryKnowledge", e.target.value)
                      }
                    />
                  </motion.div>
                </motion.div>
                <motion.div layout="size" className=" mt-4">
                  <motion.div
                    layout
                    className="w-44 h-1 mx-auto bg-gray-200 rounded-full"
                  ></motion.div>
                  <Inputs
                    value={cv.skillTitle3}
                    placeholder="Title 3"
                    keyChange="skillTitle3"
                  />
                  <motion.div
                    layout
                    className="w-full relative bg-rose-50 rounded-xl p-2 border  border-gray-300 mt-3  flex items-center flex-wrap "
                  >
                    <motion.div
                      layout
                      className="absolute w-1 left-1/2 h-3 bg-rose-400 -top-3"
                    ></motion.div>

                    {cv.languages.map((tag, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="tagStyle text-rose-900 bg-rose-200/70"
                        key={index}
                      >
                        <motion.p layout className="mr-5">
                          {tag}
                        </motion.p>

                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="right-1 top-0 bottom-0 absolute"
                          onClick={() => removeTag("languages", tag)}
                        >
                          <RiCloseFill className="tagDeleteButton fill-rose-400 hover:fill-rose-700 hover:bg-rose-300/50" />
                        </motion.button>
                      </motion.div>
                    ))}
                    <motion.input
                      layout
                      type="text"
                      className=" px-2 m-1 resize bg-rose-50 text-rose-900 placeholder:text-rose-600/40 focus:outline-none border-rose-100 focus:border-rose-500 border-2  rounded-lg w-32"
                      placeholder="+ Add tag"
                      onKeyDown={(e) => addTag(e, "languages", e.target.value)}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;
