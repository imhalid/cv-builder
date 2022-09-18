import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AddButton from "../UI Component/AddButton";

const Education = () => {
  const { cv, updateCv, addEducation } = useContext(CvContext);
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
          <span className="flex-1">Educations</span>
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
              {cv.education.map((education, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={index}
                  className="flex first:mt-3  mb-4 flex-col"
                >
                  <div className="bg-gradient-to-tr from-transparent to-gray-100 rounded-xl border px-2 py-1">
                    <div className="relative ">
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
                    <div className="items-center mt-4 transition-all ">
                      <label className="text-gray-500">Field of study</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Ex: Computer Science"
                        value={education.title}
                        onChange={(e) => {
                          const newEducation = {
                            ...education,
                            title: e.target.value,
                          };
                          updateCv("education", [
                            ...cv.education.slice(0, index),
                            newEducation,
                            ...cv.education.slice(index + 1),
                          ]);
                        }}
                      />
                    </div>
                    <div className=" items-center mt-4">
                      <label className="text-gray-500">School</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="School Name"
                        value={education.school}
                        onChange={(e) => {
                          const newEducation = {
                            ...education,
                            school: e.target.value,
                          };
                          updateCv("education", [
                            ...cv.education.slice(0, index),
                            newEducation,
                            ...cv.education.slice(index + 1),
                          ]);
                        }}
                      />
                    </div>
                    <div className=" items-center mt-4">
                      <label className="text-gray-500">Start date</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="When did you start school?"
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
                      <label className="text-gray-500">End date</label>
                      <input
                        type="text"
                        placeholder="When did you graduate from school?"
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
                  </div>
                </motion.div>
              ))}

              <AddButton
                onClick={() =>
                  addEducation({
                    title: "",
                    school: "",
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

export default Education;
