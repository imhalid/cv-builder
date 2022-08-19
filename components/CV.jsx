import Image from "next/image";
import {
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineLink,
  HiOutlineCalendar,
} from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const CV = () => {
  const items = "flex items-center";
  const itemsSVG = "h-4 w-4 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-rose-400";
  const paragraphSize = "text-[0.705rem] mt-1 text-gray-700 font-light";
  const jobSize = "text-[0.775rem] text-gray-500 font-light";

  const cv = useContext(CvContext);

  return (
    <div className="w-full h-fulll" id="cv">
      {[cv.cv].map((item, index) => {
        return (
          <div key={index}>
            <section id="header">
              {/* HEADER START */}
              <div className="flex items-center">
                {item.displayImage ? (
                  <div className="mr-4 flex ">
                    <Image
                      src={item.image || "/favicon.png"}
                      className="rounded-full"
                      width="72px"
                      height="72px"
                      alt="profilePicture"
                      quality={100}
                      objectFit="cover"
                    />
                  </div>
                ) : null}

                <div className="space-y-1">
                  <h1 className="text-3xl font-semibold">{item.name}</h1>
                  <h4 className=" text-gray-400 text-sm font-medium">
                    {item.jobTitle}
                    {item.location ? " - " : null}
                    {item.location}
                  </h4>
                </div>
              </div>
              <div className="flex font-light text-xs mt-4 space-x-3">
                {item.email ? (
                  <div className={items}>
                    <HiOutlineMail className={itemsSVG} />
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </div>
                ) : null}
                {item.website ? (
                  <div className={items}>
                    <HiOutlineLink className={itemsSVG} />
                    <a href={item.website} target="_blank" rel="noreferrer">
                      {item.website}
                    </a>
                  </div>
                ) : null}
                {item.github ? (
                  <div className={items}>
                    <AiFillGithub className={itemsSVG} />

                    <a
                      href={`https://github.com/${item.github}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.github}
                    </a>
                  </div>
                ) : null}
                {item.twitter ? (
                  <div className={items}>
                    <TbBrandTwitter className={itemsSVG} />
                    <a
                      href={`https://twitter.com/${item.twitter}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.twitter}
                    </a>
                  </div>
                ) : null}
              </div>
              {/* HEADER END */}
            </section>
            {/* ABOUT TEXT START  */}
            {item.about ? (
              <section id="about">
                <div className="bg-gray-100/50 border p-3 rounded-lg mt-6">
                  <p className={paragraphSize}>{item.about}</p>
                </div>
              </section>
            ) : null}
            {/* ABOUT TEXT END */}
            {/* SKILLS AND PROJECTS START */}
            <section id="skills_and_projects" className="flex mt-6">
              {/* SKILLS START */}
              <section id="skills" className="w-1/2">
                <h3 className={titles}>Skills</h3>

                {item.toolsAndTechSkills > [0] ? (
                  <div className="mt-2">
                    <h4 className="font-medium text-md">
                      Tools & Technologies
                    </h4>
                    <p className={paragraphSize}>
                      {item.toolsAndTechSkills.map((skill, index) => {
                        return <span key={index}>{skill}, </span>;
                      })}
                    </p>
                  </div>
                ) : null}
                {item.industryKnowledge > [0] ? (
                  <div className="mt-2">
                    <h4 className="font-medium  text-md">Industry Knowledge</h4>
                    <p className={paragraphSize}>
                      {item.industryKnowledge.map((knowledge, index) => {
                        return <span key={index}>{knowledge}, </span>;
                      })}
                    </p>
                  </div>
                ) : null}
                {item.languages > [0] ? (
                  <div className="mt-2">
                    <h4 className="font-medium text-md">Language</h4>
                    <p className={paragraphSize}>
                      {item.languages.map((language, index) => {
                        return <span key={index}>{language}, </span>;
                      })}
                    </p>
                  </div>
                ) : null}
              </section>
              {/* SKILLS END */}
              {/* PROJECTS START */}
              <section id="projects" className="w-1/2">
                <h3 className={titles}>Projects</h3>
                {item.projects.map((project, index) => {
                  return (
                    <div key={index} className="mt-2">
                      <h4 className="font-medium text-md">{project.title}</h4>
                      <p className={paragraphSize}>{project.summary}</p>
                    </div>
                  );
                })}
              </section>
              {/* PROJECTS END */}
            </section>
            {/* SKILLS AND PROJECTS END */}
            {/* EXPERIENCE START */}
            <section className="mt-6">
              <h3 className={titles}>Experience</h3>
              {item.experiences
                .map((experience, index) => {
                  return (
                    <div className="border-b-[1px] last:border-0" key={index}>
                      <div className="flex mt-3  justify-between">
                        <h4 className="font-medium  text-md">
                          {experience.title}
                        </h4>
                        <span className="flex items-center space-x-1">
                          {experience.company ? (
                            <HiOutlineBriefcase className="inline" />
                          ) : null}

                          <p className={jobSize}>{experience.company}</p>
                        </span>
                        <span className="flex items-center space-x-1">
                          {experience.startDate || experience.endDate ? (
                            <HiOutlineCalendar className="inline" />
                          ) : null}

                          <p className={jobSize}>{experience.startDate}</p>
                          {experience.endDate ? (
                            <span className={jobSize}> - </span>
                          ) : null}

                          <p className={jobSize}>{experience.endDate}</p>
                        </span>
                      </div>
                      <p className="text-[0.705rem] mb-2 mt-2 text-gray-700 font-light">
                        {experience.summary}
                      </p>
                    </div>
                  );
                })
                .reverse()}
            </section>
            {/* EXPERIENCE END */}
          </div>
        );
      })}
    </div>
  );
};

export default CV;
