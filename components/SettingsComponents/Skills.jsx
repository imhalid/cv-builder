import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";

const Skills = () => {
  const { cv, addTag, removeTag } = useContext(CvContext);
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <p className="projectAndExperienceTitle text-lg">Skills</p>
        <div className=" items-center mt-4">
          <label className="text-gray-500">Tools & Tech</label>
          <input
            type="text"
            className="inputStyle mb-2"
            placeholder="What tools and tech do you use?"
            onKeyDown={(e) => addTag(e, "toolsAndTechSkills", e.target.value)}
          />
          {cv.toolsAndTechSkills.map((tag, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="tagStyle"
              key={index}
            >
              <p className="mr-5">{tag}</p>

              <button
                className="right-1 top-0 bottom-0 absolute"
                onClick={() => removeTag("toolsAndTechSkills", tag)}
              >
                <RiCloseFill className="tagDeleteButton" />
              </button>
            </motion.div>
          ))}
        </div>
        <div className=" items-center mt-4">
          <label className="text-gray-500">Industry Knowledge</label>
          <input
            type="text"
            className="inputStyle mb-2"
            placeholder="What industry knowledge do you have?"
            onKeyDown={(e) => addTag(e, "industryKnowledge", e.target.value)}
          />
          {cv.industryKnowledge.map((tag, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="tagStyle"
              key={index}
            >
              <p className="mr-5">{tag}</p>
              <button
                className="right-1 top-0 bottom-0 absolute"
                onClick={() => removeTag("industryKnowledge", tag)}
              >
                <RiCloseFill className="tagDeleteButton" />
              </button>
            </motion.div>
          ))}
        </div>
        <div className=" items-center mt-4">
          <label className="text-gray-500">Languages</label>
          <input
            type="text"
            className="inputStyle mb-2"
            placeholder="What languages do you speak?"
            onKeyDown={(e) => addTag(e, "languages", e.target.value)}
          />
          {cv.languages.map((tag, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="tagStyle"
              key={index}
            >
              <p className="mr-5">{tag}</p>
              <button
                className=" right-1 top-0 bottom-0 absolute"
                onClick={() => removeTag("languages", tag)}
              >
                <RiCloseFill className="tagDeleteButton" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;
