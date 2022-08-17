import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";
import { BiImageAdd } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { BsPatchCheck } from "react-icons/bs";

const Settings = () => {
  const { cv, updateCv, uploadImage, toogleCheckbox, addProject } =
    useContext(CvContext);

  return (
    <div className="p-7">
      <h1 className="text-2xl font-bold">CV Settings</h1>

      {cv.projects.map((project, index) => (
        <div key={index} className="flex mb-6 flex-col">
          <div className="flex flex-col  -mx-4 rounded-xl p-4 bg-gray-300/50 relative">
            <div className=" items-center mt-4">
              <label className="text-gray-500">Project Title</label>
              <input
                type="text"
                className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
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
              <input
                type="text"
                placeholder="Project description"
                className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
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
              className="absolute bg-rose-400 rounded-full p-1 top-0 right-0 m-4"
              onClick={() => {
                updateCv("projects", [
                  ...cv.projects.slice(0, index),
                  ...cv.projects.slice(index + 1),
                ]);
              }}
            >
              <TiDelete className="w-5 h-5 fill-white" />
            </button>
          </div>
        </div>
      ))}
      <div className="w-64 py-2 rounded-xl mx-auto bg-[#96D478] text-center">
        <button
          className="text-[#1A7918] font-bold"
          onClick={() => addProject({ name: "", description: "" })}
        >
          Add Project
        </button>
      </div>

      <div className="mt-10">
        <div className="flex items-center mt-4 mr-4">
          <input
            id="display-image"
            type="checkbox"
            className=""
            onChange={(e) => toogleCheckbox("displayImage", e.target.checked)}
            defaultChecked={cv.displayImage}
          />
          <label
            htmlFor="display-image"
            className="ml-2 text-gray-500 font-medium"
          >
            Display Image
          </label>
        </div>
        {cv.displayImage ? (
          <div>
            <label
              htmlFor="dropzone"
              className="flex mt-1 flex-col justify-center items-center w-full py-8 bg-[#F2F2F2] border-2 border-gray-300 border-dashed cursor-pointer  rounded-xl"
            >
              <div className="flex flex-col items-center">
                {cv.image ? (
                  <BsPatchCheck className="h-10 w-10 text-emerald-600" />
                ) : (
                  <BiImageAdd className="h-10 w-10 text-rose-500" />
                )}
                {/* <BiImageAdd className="h-10 w-10 text-gray-600" /> */}

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
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
          value={cv.name}
          onChange={(e) => updateCv("name", e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Job</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
          value={cv.jobTitle}
          onChange={(e) => updateCv("jobTitle", e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="flex items-center mt-4 mr-4">
          <input id="twitter" type="checkbox" value="" />
          <label
            htmlFor="twitter"
            className="ml-2 text-gray-500 text-sm font-medium"
          >
            Twitter
          </label>
        </div>
        <div className="flex items-center mt-4 mr-4">
          <input id="portfolio" type="checkbox" value="" />
          <label
            htmlFor="portfolio"
            className="ml-2 text-gray-500  text-sm font-medium"
          >
            Portfolio
          </label>
        </div>
        <div className="flex items-center mt-4 mr-4">
          <input id="mail" type="checkbox" value="" />
          <label
            htmlFor="mail"
            className="ml-2 text-gray-500  text-sm font-medium"
          >
            Mail
          </label>
        </div>
        <div className="flex items-center mt-4 mr-4">
          <input id="Github" type="checkbox" value="" />
          <label
            htmlFor="Github"
            className="ml-2 text-gray-500  text-sm font-medium"
          >
            Github
          </label>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Twitter</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
          value={cv.twitter}
          onChange={(e) => updateCv("twitter", e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Portfolio</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
          value={cv.website}
          onChange={(e) => updateCv("website", e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Github</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
          value={cv.github}
          onChange={(e) => updateCv("github", e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Mail</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
          value={cv.email}
          onChange={(e) => updateCv("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Settings;
