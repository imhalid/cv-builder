import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";
import { BiImageAdd } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";

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

  return (
    <div className="p-7">
      <h1 className="text-2xl font-bold">CV Settings</h1>
      <button className="resetButton" onClick={setEmptyCv}>
        Reset
      </button>
      <button className="creatorData" onClick={setCV}>
        Fill Creator Data
      </button>
      <details>
        <summary className="detailsStyle">
          <p className="detailsTitle">Personal Information</p>
        </summary>
        <div className="cardStyle ">
          <div>
            <div className="flex items-center mt-4 mr-4">
              <input
                id="display-image"
                type="checkbox"
                onChange={(e) => updateCv("displayImage", e.target.checked)}
                defaultChecked={cv.displayImage}
              />
              <label htmlFor="display-image" className="ml-2 text-gray-500">
                Display Image
              </label>
            </div>
            {cv.displayImage ? (
              <div>
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
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-400">( just image )</p>
                  </div>

                  <input
                    id="dropzone"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={uploadImage}
                  />
                </label>
              </div>
            ) : null}
          </div>
          <div className="mt-4">
            <label className="text-gray-500">Name & Surname</label>
            <input
              type="text"
              className="inputStyle"
              value={cv.name}
              onChange={(e) => updateCv("name", e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="text-gray-500">Job</label>
            <input
              type="text"
              className="inputStyle"
              value={cv.jobTitle}
              onChange={(e) => updateCv("jobTitle", e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="text-gray-500">Location</label>
            <input
              type="text"
              className="inputStyle"
              value={cv.location}
              onChange={(e) => updateCv("location", e.target.value)}
            />
          </div>
          <div className="flex flex-wrap">
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
          </div>
          {cv.displayTwitter ? (
            <div className="mt-4">
              <label className="text-gray-500">Twitter</label>
              <input
                type="text"
                className="inputStyle"
                value={cv.twitter}
                onChange={(e) => updateCv("twitter", e.target.value)}
              />
            </div>
          ) : null}

          {cv.displayWebSite ? (
            <div className="mt-4">
              <label className="text-gray-500">Portfolio</label>
              <input
                type="text"
                className="inputStyle"
                value={cv.website}
                onChange={(e) => updateCv("website", e.target.value)}
              />
            </div>
          ) : null}
          {cv.displayGithub ? (
            <div className="mt-4">
              <label className="text-gray-500">Github</label>
              <input
                type="text"
                className="inputStyle"
                value={cv.github}
                onChange={(e) => updateCv("github", e.target.value)}
              />
            </div>
          ) : null}

          {cv.displayMail ? (
            <div className="mt-4">
              <label className="text-gray-500">Mail</label>
              <input
                type="text"
                className="inputStyle"
                value={cv.email}
                onChange={(e) => updateCv("email", e.target.value)}
              />
            </div>
          ) : null}

          <div className="mt-4">
            <label className="text-gray-500">About</label>
            <textarea
              type="text"
              rows={7}
              className="inputStyle"
              value={cv.about}
              onChange={(e) => updateCv("about", e.target.value)}
            />
          </div>
        </div>
      </details>

      <details>
        <summary className="detailsStyle">
          <p className="detailsTitle">Skills</p>
        </summary>

        <div className="flex mb-6 flex-col">
          <div className="cardStyle">
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
                <div className="tagStyle" key={index}>
                  <p className="mr-5">{tag}</p>
                  <button
                    className="right-1 top-0 bottom-0 absolute"
                    onClick={() => removeTag("toolsAndTechSkills", tag)}
                  >
                    <RiCloseFill className="tagDeleteButton" />
                  </button>
                </div>
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
                <div className="tagStyle" key={index}>
                  <p className="mr-5">{tag}</p>
                  <button
                    className="right-1 top-0 bottom-0 absolute"
                    onClick={() => removeTag("industryKnowledge", tag)}
                  >
                    <RiCloseFill className="tagDeleteButton" />
                  </button>
                </div>
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
                <div className="tagStyle" key={index}>
                  <p className="mr-5">{tag}</p>
                  <button
                    className=" right-1 top-0 bottom-0 absolute"
                    onClick={() => removeTag("languages", tag)}
                  >
                    <RiCloseFill className="tagDeleteButton" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>

      <details>
        <summary className="detailsStyle">
          <p className="detailsTitle">Projects</p>
        </summary>
        {cv.projects.map((project, index) => (
          <div key={index} className="flex mb-6 flex-col">
            <div className="cardStyle">
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
                <label className="text-gray-500">Project Summary</label>
                <textarea
                  type="textarea"
                  rows={3}
                  placeholder="Project description"
                  className="inputStyle"
                  value={project.summary}
                  onChange={(e) => {
                    const newProject = { ...project, summary: e.target.value };
                    updateCv("projects", [
                      ...cv.projects.slice(0, index),
                      newProject,
                      ...cv.projects.slice(index + 1),
                    ]);
                  }}
                />
              </div>
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
          </div>
        ))}
        <div className="addButton">
          <button onClick={() => addProject({ title: "", summary: "" })}>
            Add Project
          </button>
        </div>
      </details>
      <details>
        <summary className="detailsStyle">
          <p className="detailsTitle">Experiences</p>
        </summary>
        {cv.experiences.map((experience, index) => (
          <div key={index} className="flex mb-6 flex-col">
            <div className="cardStyle">
              <p>{index + 1}</p>
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
              <div className="items-center mt-4">
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
          </div>
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
            <RiCloseFill />
          </button>
        </div>
      </details>
    </div>
  );
};

export default Settings;
