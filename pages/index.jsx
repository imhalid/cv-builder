import Head from "next/head";
import CV from "../components/CV";
import Settings from "../components/Settings";
import PageButtons from "../components/PageButtons";
import { useState, useEffect, useRef } from "react";
import { CvContext } from "../hooks/CvContext";
import { cvData } from "../data/cvData";
import { useReactToPrint } from "react-to-print";
import CV2 from "../components/CV2";
import CV3 from "../components/CV3";
import {
  FILE_NOT_SELECTED,
  FILE_READ_ERROR,
  UNSUPPORTED_FILE_TYPE,
} from "../constants/message-result.constants";
import LS from "../utils/browser.utils";
export default function Home() {
  const [cv, setCv] = useState(cvData);
  const [scale, setScale] = useState(1);

  const setCV = () => {
    setCv(cvData);
    LS.set({ key: "cv", payload: cvData });
  };

  const setEmptyCv = () => {
    const emptyCv = {
      name: "",
      image: "",
      jobTitle: "",
      location: "",
      email: "",
      linkedin: "",
      twitter: "",
      github: "",
      website: "",
      about: "",
      toolsAndTechSkills: [],
      industryKnowledge: [],
      languages: [],
      skillTitle1: "",
      skillTitle2: "",
      skillTitle3: "",
      projects: [
        {
          title: "",
          link: "",
          summary: "",
        },
      ],
      education: [
        {
          title: "",
          school: "",
          date: "",
        },
      ],
      experiences: [
        {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          summary: "",
        },
      ],
      displayImage: false,
      displayMail: false,
      displayWebSite: false,
      displayGithub: false,
      displayTwitter: false,
      activeColor: "#5B21B6",
    };
    setCv(emptyCv);
    LS.set({ key: "cv", payload: emptyCv });
  };

  const [template, setTemplate] = useState(1);

  const selectTemplate = (e) => {
    setTemplate(e.target.value);
  };

  const updateCv = (key, value) => {
    const newCv = { ...cv, [key]: value };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  //addTag to array, if same tag is already in array, remove it
  const addTag = (e, key, value) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newCv = { ...cv, [key]: [...cv[key], value] };
      const unique = newCv[key].filter((item, index) => {
        return newCv[key].indexOf(item) === index;
      });
      newCv[key] = unique;
      setCv(newCv);
      LS.set({ key: "cv", payload: newCv });
      e.target.value = "";
    }

    if (e.key === "Backspace" && e.target.value === "") {
      const newCv = { ...cv, [key]: cv[key].slice(0, -1) };
      setCv(newCv);
      LS.set({ key: "cv", payload: newCv });
    }
  };

  //when click on delete button, remove the tag from the array
  const removeTag = (key, value) => {
    const newCv = { ...cv, [key]: cv[key].filter((tag) => tag !== value) };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addExperience = (experience) => {
    const newCv = { ...cv, experiences: [...cv.experiences, experience] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addProject = (project) => {
    const newCv = { ...cv, projects: [...cv.projects, project] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addEducation = (education) => {
    const newCv = { ...cv, education: [...cv.education, education] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  //when dag and drop or click and upload image in the settings page, update the cv image, and save it in the local storage
  const uploadImage = (e) => {
    // For XSS attack from HTML injection
    const allowedFiles = ["image/png", "image/jpg", "image/jpeg"];
    const file = e.target.files[0];
    if (!file) {
      throw new Error(FILE_NOT_SELECTED);
    }
    const reader = new FileReader();
    const isAllowed = allowedFiles.some((type) => file.type === type);
    if (!isAllowed) {
      throw new Error(UNSUPPORTED_FILE_TYPE);
    }
    reader.readAsDataURL(file);
    reader.onerror = (e) => {
      throw new Error(FILE_READ_ERROR, e);
    };
    reader.onload = (e) => {
      updateCv("image", e.target.result);
    };
  };

  const scaleUp = () => {
    if (scale < 1.6) {
      setScale(scale + 0.1);
    }
  };
  const scaleDown = () => {
    if (scale > 0.4) {
      setScale(scale - 0.1);
    }
  };

  useEffect(() => {
    //create cvLocal in localStorage if it doesn't exist
    const cvLocal = LS.get("cv");
    if (cvLocal) {
      setCv((currentCv) => ({ ...currentCv, ...cvLocal }));
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,

    pageStyle:
      "body { transform-origin: top left; margin: auto; transform: scale(1); -webkit-print-color-adjust: exact !important;  color-adjust: exact !important; print-color-adjust: exact !important; }",

    documentTitle: cv.name,
    onAfterPrint: () => console.log("printed"),
  });

  const ifScaleUpOrDown = () => {
    if (scale > 1 || scale < 1) {
      setScale(1);
    }
    return setTimeout(() => {
      handlePrint();
    }, 100);
  };

  const templateSwitch = () => {
    switch (template) {
      case "1":
        return <CV2 />;
      case "2":
        return <CV3 />;
      case "3":
        return <CV />;
      default:
        return <CV2 />;
    }
  };

  const componentRef = useRef();

  return (
    <>
      <Head>
        <title>CV Builder</title>
        <meta
          name="Cv Builder"
          content="Beautifully designed cv builder where you can see the changes at the same time"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <CvContext.Provider
        value={{
          cv,
          uploadImage,
          updateCv,
          addProject,
          addExperience,
          addTag,
          removeTag,
          setEmptyCv,
          setCV,
          scaleUp,
          scaleDown,
          ifScaleUpOrDown,
          selectTemplate,
          addEducation,
        }}
      >
        <main className="flex m-auto md:w-auto w-fit flex-col-reverse justify-center items-center md:relative md:items-stretch  md:h-screen">
          <div className="m-auto md:w-fit md:h-fit relative md:absolute  md:left-[26.5rem] md:right-0 md:bottom-0 md:flex md:top-0 ">
            <div>
              <section
                ref={componentRef}
                className="bg-white md:rounded-md transition-all  p-8 h-[840px] w-[594px] md:w-[594px] md:h-[840px] "
                style={{
                  transform: `scale(${scale})`,
                }}
              >
                {templateSwitch()}
              </section>
            </div>
          </div>
          <PageButtons />

          <div className="flex align-middle h-full">
            <section className="settings rounded-2xl w-full overflow-auto">
              <Settings />
            </section>
            <div className="md:meshGradient left-0 bg-slate-300 h-full w-full md:opacity-20 fixed md:absolute -z-10  md:h-screen"></div>
          </div>
        </main>
      </CvContext.Provider>
    </>
  );
}
