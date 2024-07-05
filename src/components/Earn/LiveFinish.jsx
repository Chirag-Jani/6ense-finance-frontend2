import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const LiveFinish = ({ handleFinish, handleLive, name, sname, status }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={` bg-gray-200 border-[1px]  border-gray-400 flex justify-center rounded-lg text-gray-500 text-sm font-medium ${
        isDarkMode ? "darkModeSecondColor contentBorder" : ""
      } `}
    >
      <button
        className={`px-4 py-1 text-base ${
          status ? "bg-gray-500 hover:bg-gray-400 text-white" : ""
        } duration-300 rounded-lg`}
        onClick={handleLive}
      >
        {name}
      </button>
      <button
        className={`px-4 py-1 text-base ${
          !status ? "bg-gray-500 hover:bg-gray-400 text-white" : ""
        } duration-300 rounded-lg`}
        onClick={handleFinish}
      >
        {sname}
      </button>
    </div>
  );
};

LiveFinish.propTypes = {
  handleFinish: PropTypes.func,
  handleLive: PropTypes.func,
  status: PropTypes.bool,
  name: PropTypes.string,
  sname: PropTypes.string,
};

export default LiveFinish;
