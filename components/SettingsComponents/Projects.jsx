import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AddButton from "../UI Component/AddButton";

const Projects = () => {
  const { cv, updateCv, addProject } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        layout
        className="cardStyle"
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
      >
        <motion.div
          initial={false}
          onClick={() => setIsOpen(isOpen ? false : true)}
          layout
          className="w-full flex text-neutral-500 cursor-pointer text-lg"
        >
          <span className="flex-1">Projects</span>
          <motion.div
            className="inline-block items-end"
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            <HiChevronRight className="inline w-6 h-6" />
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
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
              {cv.projects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={index}
                  className="flex first:mt-3  mb-4 flex-col"
                >
                  <div className="bg-gradient-to-tr from-transparent to-gray-100 rounded-xl border px-2 py-1">
                    <div className="relative">
                      <button
                        className="deleteButton"
                        onClick={() => {
                          updateCv("projects", [
                            ...cv.projects.slice(0, index),
                            ...cv.projects.slice(index + 1),
                          ]);
                        }}
                      >
                        <RiCloseFill className="deleteButtonSVG" />
                      </button>
                    </div>

                    <div className=" items-center mt-4">
                      <label className="text-gray-500">Project Title</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Project name"
                        value={project.title}
                        onChange={(e) => {
                          const newProject = {
                            ...project,
                            title: e.target.value,
                          };
                          updateCv("projects", [
                            ...cv.projects.slice(0, index),
                            newProject,
                            ...cv.projects.slice(index + 1),
                          ]);
                        }}
                      />
                    </div>
                    <div className=" items-center mt-4">
                      <label className="text-gray-500">Project Link</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Project link"
                        value={project.link}
                        onChange={(e) => {
                          const newProject = {
                            ...project,
                            link: e.target.value,
                          };
                          updateCv("projects", [
                            ...cv.projects.slice(0, index),
                            newProject,
                            ...cv.projects.slice(index + 1),
                          ]);
                        }}
                      />
                    </div>
                    <div className=" items-center mt-4 mb-6">
                      <label className="text-gray-500">Project Summary</label>
                      <textarea
                        type="textarea"
                        rows={3}
                        placeholder="Project description"
                        className="inputStyle"
                        value={project.summary}
                        onChange={(e) => {
                          const newProject = {
                            ...project,
                            summary: e.target.value,
                          };
                          updateCv("projects", [
                            ...cv.projects.slice(0, index),
                            newProject,
                            ...cv.projects.slice(index + 1),
                          ]);
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
              <AddButton
                onClick={() => addProject({ title: "", link: "", summary: "" })}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
