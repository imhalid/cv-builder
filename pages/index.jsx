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
  const [saveStatus, setSaveStatus] = useState("Saved");
  const saveStatusTimeout = useRef();

  const persistCv = (nextCv) => {
    setCv(nextCv);
    setSaveStatus("Saving...");
    LS.set({ key: "cv", payload: nextCv });
    clearTimeout(saveStatusTimeout.current);
    saveStatusTimeout.current = setTimeout(() => {
      setSaveStatus("Saved");
    }, 500);
  };

  const createFileName = (suffix = "cv") => {
    const date = new Date().toISOString().slice(0, 10);
    const name = (cv.name || "cv")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `${name || "cv"}-${suffix}-${date}`;
  };

  const setCV = () => {
    persistCv(cvData);
  };

  const setEmptyCv = () => {
    const emptyCv = {
      name: "",
      image: "",
      jobTitle: "",
      location: "",
      email: "",
      linkedin: "",
      linkedIn: "",
      instagram: "",
      facebook: "",
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
      displayLinkedIn: false,
      displayInstagram: false,
      displayFacebook: false,
      displayAboutSection: true,
      displaySkillsSection: true,
      displayEducationSection: true,
      displayProjectsSection: true,
      displayExperienceSection: true,
      activeColor: "#5B21B6",
    };
    persistCv(emptyCv);
  };

  const exportCvData = () => {
    const blob = new Blob([JSON.stringify(cv, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${createFileName("data")}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importCvData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedCv = JSON.parse(event.target.result);
        const nextCv = { ...cvData, ...importedCv };
        persistCv(nextCv);
      } catch {
        alert("CV data file could not be imported.");
      } finally {
        e.target.value = "";
      }
    };
    reader.readAsText(file);
  };

  const [template, setTemplate] = useState(1);

  const selectTemplate = (e) => {
    setTemplate(e.target.value);
  };

  const updateCv = (key, value) => {
    const newCv = { ...cv, [key]: value };
    persistCv(newCv);
  };

  //addTag to array, if same tag is already in array, remove it
  const addTag = (e, key, value) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newCv = { ...cv, [key]: [...cv[key], value] };
      const unique = newCv[key].filter((item, index) => {
        return newCv[key].indexOf(item) === index;
      });
      newCv[key] = unique;
      persistCv(newCv);
      e.target.value = "";
    }

    if (e.key === "Backspace" && e.target.value === "") {
      const newCv = { ...cv, [key]: cv[key].slice(0, -1) };
      persistCv(newCv);
    }
  };

  //when click on delete button, remove the tag from the array
  const removeTag = (key, value) => {
    const newCv = { ...cv, [key]: cv[key].filter((tag) => tag !== value) };
    persistCv(newCv);
  };

  const addExperience = (experience) => {
    const newCv = { ...cv, experiences: [...cv.experiences, experience] };
    persistCv(newCv);
  };

  const addProject = (project) => {
    const newCv = { ...cv, projects: [...cv.projects, project] };
    persistCv(newCv);
  };

  const addEducation = (education) => {
    const newCv = { ...cv, education: [...cv.education, education] };
    persistCv(newCv);
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

    return () => clearTimeout(saveStatusTimeout.current);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,

    pageStyle:
      "body { transform-origin: top left; margin: auto; transform: scale(1); -webkit-print-color-adjust: exact !important;  color-adjust: exact !important; print-color-adjust: exact !important; }",

    documentTitle: createFileName("resume"),
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
          saveStatus,
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
          exportCvData,
          importCvData,
        }}
      >
        <main className="flex min-h-screen w-full flex-col-reverse items-center justify-center overflow-x-hidden bg-slate-100 md:relative md:h-screen md:items-stretch">
          <div className="relative mx-auto my-6 w-full overflow-x-auto px-4 md:absolute md:bottom-0 md:left-[26.5rem] md:right-0 md:top-0 md:my-auto md:flex md:h-fit md:w-fit md:px-0">
            <div className="mx-auto w-fit">
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

          <div className="flex h-full w-full align-middle md:w-auto">
            <section className="settings w-full overflow-auto rounded-2xl">
              <Settings />
            </section>
            <div className="md:meshGradient left-0 bg-slate-300 h-full w-full md:opacity-20 fixed md:absolute -z-10  md:h-screen"></div>
          </div>
        </main>
      </CvContext.Provider>
    </>
  );
}
