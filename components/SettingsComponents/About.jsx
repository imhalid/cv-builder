import { BiImageAdd } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";
import Inputs from "../UI Component/Inputs";
import TextArea from "../UI Component/Textarea";
import CheckBox from "../UI Component/Checkbox";

const About = () => {
  const { cv, uploadImage } = useContext(CvContext);

  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle ">
        <motion.p layout className="projectAndExperienceTitle text-lg">
          About Yourself
        </motion.p>
        <CheckBox
          title="Display Image"
          value={cv.displayImage}
          keyChange="displayImage"
        />

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
                <p className="text-gray-500 mt-3">Click to upload your image</p>

                <p className="text-sm text-gray-400">( *.jpg, *.png )</p>
              </div>
              <input
                id="dropzone"
                type="file"
                accept="image/jpeg, image/png"
                className="hidden"
                onChange={uploadImage}
              />
            </label>
          </motion.div>
        ) : null}

        <Inputs
          title="Name & Surname"
          value={cv.name}
          placeholder="Your name"
          keyChange="name"
        />
        <Inputs
          title="Job"
          value={cv.jobTitle}
          placeholder="What is your job?"
          keyChange="jobTitle"
        />
        <Inputs
          title="Location"
          value={cv.location}
          placeholder="Where do you live?"
          keyChange="location"
        />
        <TextArea
          title="About"
          value={cv.about}
          placeholder="A few sentences about yourself"
          keyChange="about"
        />

        <motion.p layout className="projectAndExperienceTitle mt-5 text-lg">
          Social
        </motion.p>
        <motion.div layout className="flex flex-wrap">
          <CheckBox
            title="Mail"
            value={cv.displayMail}
            keyChange="displayMail"
          />
          <CheckBox
            title="Portfolio"
            value={cv.displayWebSite}
            keyChange="displayWebSite"
          />
          <CheckBox
            title="Github"
            value={cv.displayGithub}
            keyChange="displayGithub"
          />
          <CheckBox
            title="Twitter"
            value={cv.displayTwitter}
            keyChange="displayTwitter"
          />
        </motion.div>
        {cv.displayMail ? (
          <Inputs
            title="Mail"
            value={cv.email}
            placeholder="example@mail.com"
            keyChange="email"
          />
        ) : null}

        {cv.displayWebSite ? (
          <Inputs
            title="Portfolio"
            value={cv.website}
            placeholder="Site Link without ' https:// '"
            keyChange="website"
          />
        ) : null}

        {cv.displayGithub ? (
          <Inputs
            title="Github"
            value={cv.github}
            placeholder="Only Username"
            keyChange="github"
          />
        ) : null}

        {cv.displayTwitter ? (
          <Inputs
            title="Twitter"
            value={cv.twitter}
            placeholder="Only Username without @"
            keyChange="twitter"
          />
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
