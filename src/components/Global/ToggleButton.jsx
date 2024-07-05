// import PropTypes from 'prop-types';
import { useContext } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../../ThemeContext";
// import { useState } from "react";

const ToggleButton = () => {
  // const [light, setLight] = useState(true);

  // const handleLight = () => {
  //   setLight(!light);
  // };
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`w-12  lg:w-16 h-8 lg:h-9 rounded-3xl flex justify-center items-center relative cursor-pointer border border-gray-400 ${
          isDarkMode
            ? "bg-gray-300 border-gray-400"
            : "bg-[#16161B] border-gray-600"
        }  transition-colors duration-500`}
        onClick={toggleTheme}
      >
        <div className="w-full flex justify-between items-center px-1 lg:px-2">
          <AiOutlineSun color="white" />
          <BsMoonStarsFill color="black" />
        </div>
        <div
          className={`w-9 lg:w-10 h-9 lg:h-10 rounded-full flex justify-center items-center duration-500  absolute ${
            isDarkMode
              ? "bg-[#FFFFFF] border-4 border-[#6254ff] -translate-x-[10px]  lg:-translate-x-4 "
              : "bg-[#39394b] border-4 border-[#6254ff]  translate-x-[10px] lg:translate-x-4"
          }`}
        >
          {isDarkMode ? (
            <AiOutlineSun color="black" size={40} className="p-2" />
          ) : (
            <BsMoonStarsFill color="white" size={40} className="p-2" />
          )}
        </div>
      </div>
    </>
  );
};

// ToggleButton.propTypes = {

// };

export default ToggleButton;
