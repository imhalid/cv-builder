import Image from "next/image";
import {
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineLink,
  HiOutlineCalendar,
} from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";

const CV = ({ className }) => {
  const items = "flex items-center";
  const itemsSVG = "h-4 w-4 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-rose-400";
  const paragraphSize = "text-[0.705rem] mt-1 text-gray-700 font-light";
  const jobSize = "text-[0.775rem] text-gray-500 font-light";

  const [cvData, setCvData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/api/cv");
    const data = await res.json();
    setCvData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(cvData);
  return (
    <div className={className}>
      {/* HEADER START */}
      {/* Fetch Data from local API */}
      {/* 
      <div>
        {[cvData].map((item) => {
          return <h1>{item.name}</h1>;
        })}
      </div> */}
      <section id="header">
        <div className="flex items-center">
          <div className="mr-4 flex ">
            <Image
              src="https://avatars.githubusercontent.com/u/40598819?v=4"
              width={72}
              height={72}
              className="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold">Halit İslam İçli</h1>
            <h4 className=" text-gray-400 text-sm font-medium">
              Front End Developer - Ankara
            </h4>
          </div>
        </div>
        <div className="flex font-light text-xs mt-4 space-x-3">
          <div className={items}>
            <HiOutlineMail className={itemsSVG} />
            <p>halidiislam@gmail.com</p>
          </div>
          <div className={items}>
            <HiOutlineLink className={itemsSVG} />
            <p>halid.dev</p>
          </div>
          <div className={items}>
            <AiFillGithub className={itemsSVG} />
            <p>imhalid</p>
          </div>
          <div className={items}>
            <RiInstagramLine className={itemsSVG} />
            <p>halidislm</p>
          </div>
        </div>
      </section>
      {/* HEADER END */}
      {/* ABOUT TEXT START  */}
      <section id="about">
        <div className="bg-gray-100/50 border p-3 rounded-lg mt-6">
          <p className={paragraphSize}>
            After graduating from the programming department, I worked remotely
            on graphic design for about 5 years. I have been working to be a
            Front End Developer for the last 4 months and I am looking for a job
            in this field. Because of my old job, I give importance to design
            and visuality in my work.
          </p>
        </div>
      </section>
      {/* ABOUT TEXT END */}
      {/* SKILLS AND PROJECTS START */}
      <section id="skills_and_projects" className="flex mt-6">
        {/* SKILLS START */}
        <section id="skills" className="w-1/2">
          <h3 className={titles}>Skills</h3>

          <div className="mt-2">
            <h4 className="font-medium text-md">Tools & Technologies</h4>
            <p className={paragraphSize}>
              Photoshop, Final Cut Pro, Figma, Webflow, Excel, Wordpress
            </p>
          </div>
          <div className="mt-2">
            <h4 className="font-medium  text-md">Industry Knowledge</h4>
            <p className={paragraphSize}>
              Javascript, CSS, HTML, React, Next.js, TailwindCSS
            </p>
          </div>
          <div className="mt-2">
            <h4 className="font-medium text-md">Language</h4>
            <p className={paragraphSize}>Turkish (Native), English (A2)</p>
          </div>
        </section>
        {/* SKILLS END */}
        {/* PROJECTS START */}
        <section id="projects" className="w-1/2">
          <h3 className={titles}>Projects</h3>
          <div className="mt-2">
            <h4 className="font-medium text-md">halid.dev</h4>
            <p className={paragraphSize}>
              My personal website, that I created with Next.js, Tailwind Css,
              Content Layer.
            </p>
          </div>
          <div className="mt-2">
            <h4 className="font-medium text-md">Tip Calculator</h4>
            <p className={paragraphSize}>
              An application that will facilitate your tip calculations.
            </p>
          </div>
          <div className="mt-2">
            <h4 className="font-medium text-md">Weather App</h4>
            <p className={paragraphSize}>
              A very nice looking application that shows the weather according
              to your location.
            </p>
          </div>
        </section>
        {/* PROJECTS END */}
      </section>
      {/* SKILLS AND PROJECTS END */}
      {/* EXPERIENCE START */}
      <section className="mt-6">
        <h3 className={titles}>Experience</h3>
        <div className="mt-3">
          <div className="flex justify-between">
            <h4 className="font-medium text-md">
              Content Creator, Videographer
            </h4>
            <span className="flex items-center space-x-1">
              <HiOutlineBriefcase className="inline" />
              <p className={jobSize}>Zore Aksesuar</p>
            </span>
            <span className="flex items-center space-x-1">
              <HiOutlineCalendar className="inline" />
              <p className={jobSize}>2021</p>
            </span>
          </div>
          <p className={paragraphSize}>
            In this company that sells accessories for phones and technological
            products, I prepared the video edits of the new products and mounted
            them with Final Cut Pro. I shared my social media posts with
            Facebook Business.
          </p>
        </div>
        <div className="mt-3">
          <div className="flex justify-between">
            <h4 className="font-medium text-md">
              Graphic Designer, Editor, Data analysis
            </h4>
            <span className="flex items-center space-x-1">
              <HiOutlineBriefcase className="inline" />
              <p className={jobSize}>Suriye Gündemi</p>
            </span>
            <span className="flex items-center space-x-1">
              <HiOutlineCalendar className="inline" />
              <p className={jobSize}>2016 – 2020</p>
            </span>
          </div>
          <p className={paragraphSize}>
            It is an impartial information sharing platform about Syria. My job
            task: Preparation of up-to-date maps according to the situation in
            the war zone. Preparing visual infographics about the obtained data
            and organizing these data. Adding articles and content to the site
            with Wordpress.
          </p>
        </div>
      </section>
      {/* EXPERIENCE END */}
    </div>
  );
};

export default CV;
