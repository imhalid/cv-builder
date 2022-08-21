import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const CheckBox = ({ title, value, keyChange }) => {
  const { updateCv } = useContext(CvContext);
  return (
    <div className="flex items-center mt-4 mr-4">
      <input
        id={title}
        type="checkbox"
        defaultChecked={value}
        onChange={(e) => updateCv(keyChange, e.target.checked)}
      />
      <label
        htmlFor={title}
        className="ml-2 text-gray-500  text-sm font-medium"
      >
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
