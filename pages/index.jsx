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
import CvSelector from "../components/CvSelector";

export default function Home() {
  const [cv, setCv] = useState(cvData);
  const [scale, setScale] = useState(1);

  const setCV = () => {
    setCv(cvData);
    localStorage.setItem("cv", JSON.stringify(cvData));
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
    localStorage.setItem("cv", JSON.stringify(emptyCv));
  };

  const [template, setTemplate] = useState(1);

  const selectTemplate = (e) => {
    setTemplate(e.target.value);
  };

  const updateCv = (key, value) => {
    const newCv = { ...cv, [key]: value };
    setCv(newCv);
    localStorage.setItem("cv", JSON.stringify(newCv));
  };

  //addTag to array, if same tag is already in array, remove it
  const addTag = (e, key, value) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newCv = { ...cv, [key]: [...cv[key], value] };
      const unique = newCv[key].filter((item, index) => {
        return newCv[key].indexOf(item) === index;
      });
      newCv[key] = unique;
      setCv(newCv);
      localStorage.setItem("cv", JSON.stringify(newCv));
      e.target.value = "";
    }

    if (e.key === "Backspace" && e.target.value === "") {
      const newCv = { ...cv, [key]: cv[key].slice(0, -1) };
      setCv(newCv);
      localStorage.setItem("cv", JSON.stringify(newCv));
    }
  };

  //when click on delete button, remove the tag from the array
  const removeTag = (key, value) => {
    const newCv = { ...cv, [key]: cv[key].filter((tag) => tag !== value) };
    setCv(newCv);
    localStorage.setItem("cv", JSON.stringify(newCv));
  };

  const addExperience = (experience) => {
    const newCv = { ...cv, experiences: [...cv.experiences, experience] };
    setCv(newCv);
    localStorage.setItem("cv", JSON.stringify(newCv));
  };

  const addProject = (project) => {
    const newCv = { ...cv, projects: [...cv.projects, project] };
    setCv(newCv);
    localStorage.setItem("cv", JSON.stringify(newCv));
  };

  const addEducation = (education) => {
    const newCv = { ...cv, education: [...cv.education, education] };
    setCv(newCv);
    localStorage.setItem("cv", JSON.stringify(newCv));
  };

  //when dag and drop or click and upload image in the settings page, update the cv image, and save it in the local storage
  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      updateCv("image", e.target.result);
    };
    reader.readAsDataURL(file);
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
    const cvLocal = JSON.parse(localStorage.getItem("cv"));
    if (cvLocal) {
      setCv((currentCv) => ({ ...currentCv, ...cvLocal }));
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    pageStyle:
      "body { transform-origin: top left; margin: auto; transform: scale(1); -webkit-print-color-adjust: exact !important;  color-adjust: exact !important; print-color-adjust: exact !important; }",
    removeAfterPrint: false,
  });

  const ifScaleUpOrDown = async () => {
    if (scale > 1 || scale < 1) {
      await setScale(1);
    }
    return handlePrint();
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
        <main className="flex flex-col-reverse justify-center items-center md:relative md:items-stretch  md:h-screen">
          <div className="m-auto md:w-fit md:h-fit relative md:absolute  md:left-[26.5rem] md:right-0 md:bottom-0 md:flex md:top-0 ">
            <div>
              <CvSelector />
              <section
                ref={componentRef}
                className="bg-white md:rounded-md transition-all p-8 w-full md:w-[594px] md:h-[840px] "
                style={{
                  transform: `scale(${scale})`,
                }}
              >
                {templateSwitch()}
              </section>
            </div>
          </div>
          <PageButtons />

          <div className="flex align-middle  h-full">
            <section className="settings rounded-2xl w-full overflow-auto">
              <Settings />
            </section>
            <div className="meshGradient h-full w-full opacity-20 fixed md:absolute -z-10  md:h-screen"></div>
          </div>
        </main>
      </CvContext.Provider>
    </>
  );
}
