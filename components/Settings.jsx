import { cvData } from "../data/cvData";
import { useState } from "react";

const Settings = () => {
  //Here are some features that need to change. but now i'm not sure what it is
  const [cv, setCv] = useState({
    ...cvData,
    name: "",
  });
  console.log(cv);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCv({ ...cv, [name]: value });
  };

  return (
    <div className="p-7">
      <h1 className="text-2xl font-bold">CV Settings</h1>
      <div className="mt-10">
        <label className="text-gray-500">Name & Surname</label>
        <input
          type="text"
          onKeyUp={(e) => handleChange(e)}
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Job</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="flex items-center mt-4 mr-4">
          <input
            id="twitter"
            type="checkbox"
            value=""
            className="focus:outline-none"
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
            value=""
            className="focus:outline-none"
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
            value=""
            className="focus:outline-none"
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
            value=""
            className="focus:outline-none"
          />
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
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Portfolio</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Github</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
        />
      </div>
      <div className="mt-4">
        <label className="text-gray-500">Mail</label>
        <input
          type="text"
          className="w-full mt-1 bg-[#F2F2F2] rounded-xl p-2 border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Settings;
