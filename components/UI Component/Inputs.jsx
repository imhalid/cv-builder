import { motion } from "framer-motion";
import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const Inputs = ({ title, value, keyChange, placeholder }) => {
  const { updateCv } = useContext(CvContext);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-4"
    >
      <label className="text-gray-500">{title}</label>
      <input
        type="text"
        className="inputStyle"
        placeholder={placeholder}
        value={value}
        onChange={(e) => updateCv(keyChange, e.target.value)}
      />
    </motion.div>
  );
};

export default Inputs;
