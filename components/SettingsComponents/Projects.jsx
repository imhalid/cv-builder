import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import AddButton from "../UI Component/AddButton";

const Projects = () => {
  const { cv, updateCv, addProject } = useContext(CvContext);
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        {cv.projects.map((project, index) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={index}
            className="flex  mb-6 flex-col"
          >
            <div className="projectAndExperienceTitle">
              <p>Project {index + 1}</p>
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
                  const newProject = { ...project, title: e.target.value };
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
                  const newProject = { ...project, link: e.target.value };
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
          </motion.div>
        ))}

        <AddButton
          onClick={() => addProject({ title: "", link: "", summary: "" })}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
