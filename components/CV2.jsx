import Image from "next/image";
import {
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineLink,
  HiOutlineCalendar,
  HiExternalLink,
} from "react-icons/hi";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const CV2 = () => {
  const cv = useContext(CvContext);

  const websiteWithoutHttps = (website) => {
    if (website.includes("https://")) {
      return website;
    } else {
      return website.replace("", "https://");
    }
  };

  const deleteHttpsAndwww = (website) => {
    if (website.includes("https://")) {
      return website
        .replace("https://www.", "")
        .replace("www.", "")
        .replace("https://", "");
    } else {
      return website;
    }
  };

  return (
    <div className="w-full h-full flex" id="cv">
      <div className="border-r w-[30%] mr-2 border-black h-full">
        {[cv.cv].map((item, index) => {
          return (
            <>
              <div className="space-y-1">
                <h1 className="text-3xl font-semibold w-10/12">{item.name}</h1>
                <h4 className=" text-gray-400 text-sm font-medium">
                  {item.jobTitle}
                </h4>
                <h4 className=" text-gray-400 text-sm font-medium">
                  {item.location}
                </h4>
              </div>
            </>
          );
        })}
      </div>
      <div className="border-l h-full ml-3 border-black "></div>
    </div>
  );
};

export default CV2;
