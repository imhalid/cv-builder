import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";
import { BiImageAdd } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithubAlt } from "react-icons/fa";

const Settings = () => {
  const {
    cv,
    updateCv,
    uploadImage,
    addProject,
    addExperience,
    addTag,
    removeTag,
    setEmptyCv,
    setCV,
  } = useContext(CvContext);

  // const color = "#faa";

  return (
    <AnimatePresence>
      <motion.div layout className="p-7 relative w-[450px]">
        <AnimatePresence>
          <motion.div layout className="cardStyle">
            <h1 className="text-2xl font-bold">CV Creator</h1>
            <div className="mt-5">
              <p>
                While doing this project, I was inspired by{" "}
                <a
                  className="font-bold text-rose-500 underline"
                  href="https://cvfy.xyz/en/"
                >
                  the project
                </a>{" "}
                that Claudia did 2 years ago. And most importantly, I wanted to
                try myself to see if I could do a project that I saw.{" "}
                <span className=" text-black underline p-1 rounded-md">
                  And I think I've succeeded.
                </span>
              </p>

              <div className="bg-rose-100 px-2 mt-4 mb-2 py-1 rounded-md">
                <h1 className="text-rose-600 font-bold">WARNING</h1>
                <ol className="list-none mt-2 text-rose-900 space-y-2">
                  <li>► Not suitable for mobile version.</li>
                  <li>
                    ► The <span className="font-bold ">Reset</span> button and
                    the <span className="font-bold ">Fill Creator Data</span>{" "}
                    button will clear all the changes you have made and you
                    cannot undo them.
                  </li>
                  <li>► Contact me if you encounter any problems.</li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex space-x-2">
                <a
                  className="resetButton transition-all flex flex-1 justify-center bg-gray-500 hover:shadow-lg hover:shadow-blue-300 group hover:bg-blue-500 h-10 overflow-hidden relative"
                  href="mailto:imhalid@icloud.com"
                >
                  <button>
                    <div className="h-1 transition-all bg-gray-400 group-hover:bg-blue-400 blur-[2px] absolute top-0 w-full left-0"></div>
                    Contact Me
                    <div className="h-1 transition-all bg-gray-600 group-hover:bg-blue-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
                  </button>
                </a>
                <a
                  className="resetButton transition-all  flex justify-center bg-gray-500 hover:shadow-lg hover:shadow-neutral-300 group hover:bg-neutral-700 h-10 overflow-hidden relative"
                  href="https://github.com/imhalid/cv-for-job"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    <div className="h-1 transition-all bg-gray-400 group-hover:bg-neutral-400 blur-[2px] absolute top-0 w-full left-0"></div>
                    <FaGithubAlt className="pb-1 w-9 h-9 text-white " />
                    <div className="h-1 transition-all bg-gray-600 group-hover:bg-neutral-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
                  </button>
                </a>
              </div>

              <div className="flex space-x-2 mt-2">
                <button
                  className="resetButton transition-all h-10  bg-zinc-500 group hover:shadow-lg  hover:shadow-rose-300 hover:bg-rose-500 overflow-hidden relative flex-1"
                  onClick={setEmptyCv}
                >
                  <div className="h-1 transition-all bg-zinc-400 group-hover:bg-rose-400 blur-[2px] absolute top-0 w-full left-0"></div>
                  Reset
                  <div className="h-1 transition-all bg-zinc-600 group-hover:bg-rose-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
                </button>

                <button
                  className="resetButton transition-all h-10  bg-zinc-500 group hover:shadow-lg  hover:shadow-violet-300 hover:bg-violet-500 overflow-hidden relative flex-1"
                  onClick={setCV}
                >
                  <div className="h-1 transition-all bg-zinc-400 group-hover:bg-violet-400 blur-[2px] absolute top-0 w-full left-0"></div>
                  Fill Sample Data
                  <div className="h-1 transition-all bg-zinc-600 group-hover:bg-violet-600 blur-[2px] absolute bottom-0 w-full left-0"></div>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* PERSONAL */}
        <AnimatePresence>
          <motion.div layout className="cardStyle ">
            <motion.p layout className="projectAndExperienceTitle text-lg">
              About Yourself
            </motion.p>
            <motion.div layout className="flex items-center mt-4 mr-4">
              <input
                id="display-image"
                type="checkbox"
                onChange={(e) => updateCv("displayImage", e.target.checked)}
                defaultChecked={cv.displayImage}
              />
              <motion.label
                layout
                htmlFor="display-image"
                className="ml-2 text-gray-500"
              >
                Display Image
              </motion.label>
            </motion.div>

            {cv.displayImage ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <label
                  htmlFor="dropzone"
                  className="flex mt-1 flex-col justify-center items-center w-full py-8 bg-white border-2 border-gray-300 border-dashed cursor-pointer  rounded-xl"
                >
                  <div className="flex flex-col items-center">
                    {cv.image ? (
                      <BsPatchCheck className="h-10 w-10 text-emerald-600" />
                    ) : (
                      <BiImageAdd className="h-10 w-10 text-rose-500" />
                    )}
                    <p className="text-gray-500 mt-3">
                      Click to upload your image
                    </p>
                    <p className="text-sm text-gray-400">( *.jpg, *.png )</p>
                  </div>

                  <input
                    id="dropzone"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={uploadImage}
                  />
                </label>
              </motion.div>
            ) : null}

            <motion.div layout className="mt-4">
              <label className="text-gray-500">Name & Surname</label>
              <input
                type="text"
                className="inputStyle"
                value={cv.name}
                onChange={(e) => updateCv("name", e.target.value)}
              />
            </motion.div>
            <motion.div layout className="mt-4">
              <label className="text-gray-500">Job</label>
              <input
                type="text"
                className="inputStyle"
                value={cv.jobTitle}
                onChange={(e) => updateCv("jobTitle", e.target.value)}
              />
            </motion.div>
            <motion.div layout className="mt-4">
              <label className="text-gray-500">Location</label>
              <input
                type="text"
                className="inputStyle"
                value={cv.location}
                onChange={(e) => updateCv("location", e.target.value)}
              />
            </motion.div>
            <motion.div layout className="mt-4">
              <label className="text-gray-500">About</label>
              <textarea
                type="text"
                rows={7}
                className="inputStyle"
                value={cv.about}
                onChange={(e) => updateCv("about", e.target.value)}
              />
            </motion.div>
            <motion.p layout className="projectAndExperienceTitle mt-5 text-lg">
              Social
            </motion.p>
            <motion.div layout className="flex flex-wrap">
              <div className="flex items-center mt-4 mr-4">
                <input
                  id="mail"
                  type="checkbox"
                  defaultChecked={cv.displayMail}
                  onChange={(e) => updateCv("displayMail", e.target.checked)}
                />
                <label
                  htmlFor="mail"
                  className="ml-2 text-gray-500  text-sm font-medium"
                >
                  Mail
                </label>
              </div>
              <div className="flex items-center mt-4 mr-4">
                <input
                  id="portfolio"
                  type="checkbox"
                  defaultChecked={cv.displayWebSite}
                  onChange={(e) => updateCv("displayWebSite", e.target.checked)}
                />
                <label
                  htmlFor="portfolio"
                  className="ml-2 text-gray-500  text-sm font-medium"
                >
                  Portfolio
                </label>
              </div>
              <div className="flex items-center mt-4 mr-4">
                <input
                  id="Github"
                  type="checkbox"
                  defaultChecked={cv.displayGithub}
                  onChange={(e) => updateCv("displayGithub", e.target.checked)}
                />
                <label
                  htmlFor="Github"
                  className="ml-2 text-gray-500  text-sm font-medium"
                >
                  Github
                </label>
              </div>
              <div className="flex items-center mt-4 mr-4">
                <input
                  id="twitter"
                  type="checkbox"
                  defaultChecked={cv.displayTwitter}
                  onChange={(e) => updateCv("displayTwitter", e.target.checked)}
                />
                <label
                  htmlFor="twitter"
                  className="ml-2 text-gray-500 text-sm font-medium"
                >
                  Twitter
                </label>
              </div>
            </motion.div>

            {cv.displayWebSite ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4"
              >
                <label className="text-gray-500">Portfolio</label>
                <input
                  type="text"
                  className="inputStyle"
                  value={cv.website}
                  onChange={(e) => updateCv("website", e.target.value)}
                />
              </motion.div>
            ) : null}

            {cv.displayMail ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4"
              >
                <label className="text-gray-500">Mail</label>
                <input
                  type="text"
                  className="inputStyle"
                  value={cv.email}
                  onChange={(e) => updateCv("email", e.target.value)}
                />
              </motion.div>
            ) : null}

            {cv.displayGithub ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4"
              >
                <label className="text-gray-500">Github</label>
                <input
                  type="text"
                  className="inputStyle"
                  value={cv.github}
                  onChange={(e) => updateCv("github", e.target.value)}
                />
              </motion.div>
            ) : null}

            {cv.displayTwitter ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4"
              >
                <label className="text-gray-500">Twitter</label>
                <input
                  type="text"
                  className="inputStyle"
                  value={cv.twitter}
                  onChange={(e) => updateCv("twitter", e.target.value)}
                />
              </motion.div>
            ) : null}
          </motion.div>
        </AnimatePresence>
        {/* PERSONAL END */}
        {/* SKILL */}

        <AnimatePresence>
          <motion.div layout className="cardStyle">
            <p className="projectAndExperienceTitle text-lg">Skills</p>
            <div className=" items-center mt-4">
              <label className="text-gray-500">Tools & Tech</label>
              <input
                type="text"
                className="inputStyle mb-2"
                placeholder="Project name"
                onKeyDown={(e) =>
                  addTag(e, "toolsAndTechSkills", e.target.value)
                }
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
                placeholder="Project name"
                onKeyDown={(e) =>
                  addTag(e, "industryKnowledge", e.target.value)
                }
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
                placeholder="Project name"
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

        {/* SKILL END */}
        {/* PROJECT */}
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
            <motion.div layout className="addButton">
              <button onClick={() => addProject({ title: "", summary: "" })}>
                <RiCloseFill className="addButtonSVG" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* PROJECT END */}
        {/* EXPERIENCE */}
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
            <div className="addButton">
              <button
                onClick={() =>
                  addExperience({
                    title: "",
                    company: "",
                    summary: "",
                    startDate: "",
                    endDate: "",
                  })
                }
              >
                <RiCloseFill className="addButtonSVG" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* EXPERIENCE END */}
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;
