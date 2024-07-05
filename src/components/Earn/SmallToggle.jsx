import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const SmallToggle = ({ light, handleLight, name }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className=" flex items-center gap-1">
      <div
        className={`w-10 h-6 rounded-3xl flex justify-center items-center relative cursor-pointer border  ${
          light ? "bg-gray-300" : "bg-gray-600"
        } ${
          isDarkMode ? "darkModeSecondColor border-gray-700" : "border-gray-400"
        }  transition-colors duration-500`}
        onClick={handleLight}
      >
        <div className="w-full flex justify-between items-center px-2"></div>
        <div
          className={`w-6 h-6 rounded-full flex justify-center items-center duration-500 absolute ${
            light
              ? "bg-[#FFFFFF] border-4 border-[#6254ff] -translate-x-2 "
              : "bg-[#03033d] border-4 border-[#6254ff] translate-x-2"
          }`}
        ></div>
      </div>
      <p className={`${isDarkMode ? "text-[#e5e7eb]" : ""} `}>{name}</p>
    </div>
  );
};

SmallToggle.propTypes = {
  light: PropTypes.bool,
  handleLight: PropTypes.func,
  name: PropTypes.string,
};

export default SmallToggle;
