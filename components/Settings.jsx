import { motion, AnimatePresence } from "framer-motion";
import SettingMain from "./SettingsComponents/SettingMain";
import About from "./SettingsComponents/About";
import Skills from "./SettingsComponents/Skills";
import Projects from "./SettingsComponents/Projects";
import Experiences from "./SettingsComponents/Experiences";
import Education from "./SettingsComponents/Education";

const Settings = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="relative w-full max-w-[450px] p-4 sm:p-7">
        <SettingMain />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experiences />
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;
