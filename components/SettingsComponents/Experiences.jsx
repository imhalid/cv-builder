import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import AddButton from "../UI Component/AddButton";

const Experiences = () => {
  const { cv, updateCv, addExperience } = useContext(CvContext);
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
          <span className="flex-1">Experiences</span>
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
              {cv.experiences.map((experience, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={index}
                  className="flex first:mt-3  mb-4  flex-col"
                >
                  <div className="bg-gradient-to-tr from-transparent to-gray-100 rounded-xl border px-2 py-1">
                    <div className="relative">
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
                      <label className="text-gray-500">Start date</label>
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
                      <label className="text-gray-500">End date</label>
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
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Experiences;
