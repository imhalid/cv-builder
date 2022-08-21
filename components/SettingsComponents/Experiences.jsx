import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import AddButton from "../UI Component/AddButton";

const Experiences = () => {
  const { cv, updateCv, addExperience } = useContext(CvContext);
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        {cv.experiences.map((experience, index) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={index}
            className="flex mb-6 flex-col"
          >
            <div className="projectAndExperienceTitle">
              <p>Experience {index + 1}</p>
              <button
                className="deleteButton"
                onClick={() => {
                  updateCv("experiences", [
                    ...cv.experiences.slice(0, index),
                    ...cv.experiences.slice(index + 1),
                  ]);
                }}
              >
                <RiCloseFill className="deleteButtonSVG" />
              </button>
            </div>

            <div className=" items-center mt-4">
              <label className="text-gray-500">Position</label>
              <input
                type="text"
                className="inputStyle"
                placeholder="Your position"
                value={experience.title}
                onChange={(e) => {
                  const newExperience = {
                    ...experience,
                    title: e.target.value,
                  };
                  updateCv("experiences", [
                    ...cv.experiences.slice(0, index),
                    newExperience,
                    ...cv.experiences.slice(index + 1),
                  ]);
                }}
              />
            </div>
            <div className=" items-center mt-4">
              <label className="text-gray-500">Company</label>
              <input
                type="text"
                className="inputStyle"
                placeholder="Company Name"
                value={experience.company}
                onChange={(e) => {
                  const newExperience = {
                    ...experience,
                    company: e.target.value,
                  };
                  updateCv("experiences", [
                    ...cv.experiences.slice(0, index),
                    newExperience,
                    ...cv.experiences.slice(index + 1),
                  ]);
                }}
              />
            </div>
            <div className=" items-center mt-4">
              <label className="text-gray-500">Summary</label>
              <textarea
                type="textarea"
                rows={7}
                placeholder="Brief information of 3-4 sentences about what you do in the company."
                className="inputStyle"
                value={experience.summary}
                onChange={(e) => {
                  const newExperience = {
                    ...experience,
                    summary: e.target.value,
                  };
                  updateCv("experiences", [
                    ...cv.experiences.slice(0, index),
                    newExperience,
                    ...cv.experiences.slice(index + 1),
                  ]);
                }}
              />
            </div>
            <div className=" items-center mt-4">
              <label className="text-gray-500">Start Date</label>
              <input
                type="text"
                className="inputStyle"
                placeholder="When did you start this job?"
                value={experience.startDate}
                onChange={(e) => {
                  const newExperience = {
                    ...experience,
                    startDate: e.target.value,
                  };
                  updateCv("experiences", [
                    ...cv.experiences.slice(0, index),
                    newExperience,
                    ...cv.experiences.slice(index + 1),
                  ]);
                }}
              />
            </div>
            <div className="items-center mt-4 mb-6">
              <label className="text-gray-500">End Date</label>
              <input
                type="text"
                placeholder="Did you quit this job or is it still going?"
                className="inputStyle"
                value={experience.endDate}
                onChange={(e) => {
                  const newExperience = {
                    ...experience,
                    endDate: e.target.value,
                  };
                  updateCv("experiences", [
                    ...cv.experiences.slice(0, index),
                    newExperience,
                    ...cv.experiences.slice(index + 1),
                  ]);
                }}
              />
            </div>
          </motion.div>
        ))}
        <AddButton
          onClick={() =>
            addExperience({
              title: "",
              company: "",
              summary: "",
              startDate: "",
              endDate: "",
            })
          }
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Experiences;
