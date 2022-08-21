import { motion } from "framer-motion";
import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const TextArea = ({ title, value, keyChange, placeholder }) => {
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
      <textarea
        type="text"
        rows={7}
        placeholder={placeholder}
        className="inputStyle"
        value={value}
        onChange={(e) => updateCv(keyChange, e.target.value)}
      />
    </motion.div>
  );
};

export default TextArea;
