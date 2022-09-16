import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import AddButton from "../UI Component/AddButton";

const Education = () => {
  const { cv, updateCv, addEducation } = useContext(CvContext);
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        {cv.education.map((education, index) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={index}
            className="flex  mb-6 flex-col"
          >
            <div className="projectAndExperienceTitle">
              <p>Education {index + 1}</p>
              <button
                className="deleteButton"
                onClick={() => {
                  updateCv("education", [
                    ...cv.education.slice(0, index),
                    ...cv.education.slice(index + 1),
                  ]);
                }}
              >
                <RiCloseFill className="deleteButtonSVG" />
              </button>
            </div>
            <div className=" items-center mt-4">
              <label className="text-gray-500">Education Title</label>
              <input
                type="text"
                className="inputStyle"
                placeholder="Project name"
                value={education.title}
                onChange={(e) => {
                  const newEducation = { ...education, title: e.target.value };
                  updateCv("education", [
                    ...cv.education.slice(0, index),
                    newEducation,
                    ...cv.education.slice(index + 1),
                  ]);
                }}
              />
            </div>
            <div className=" items-center mt-4">
              <label className="text-gray-500">Education Universty</label>
              <input
                type="text"
                className="inputStyle"
                placeholder="Project link"
                value={education.school}
                onChange={(e) => {
                  const newEducation = { ...education, school: e.target.value };
                  updateCv("education", [
                    ...cv.education.slice(0, index),
                    newEducation,
                    ...cv.education.slice(index + 1),
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
                value={education.startDate}
                onChange={(e) => {
                  const newEducation = {
                    ...education,
                    startDate: e.target.value,
                  };
                  updateCv("education", [
                    ...cv.education.slice(0, index),
                    newEducation,
                    ...cv.education.slice(index + 1),
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
                value={education.endDate}
                onChange={(e) => {
                  const newEducation = {
                    ...education,
                    endDate: e.target.value,
                  };
                  updateCv("education", [
                    ...cv.education.slice(0, index),
                    newEducation,
                    ...cv.education.slice(index + 1),
                  ]);
                }}
              />
            </div>
          </motion.div>
        ))}

        <AddButton
          onClick={() =>
            addEducation({ title: "", school: "", startDate: "", endDate: "" })
          }
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
