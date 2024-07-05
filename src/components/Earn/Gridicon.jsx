import { BsGrid3X2GapFill } from "react-icons/bs";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

const Gridicon = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`bg-gray-200 duration-300 ease-in  rounded-md p-2 cursor-pointer ${
        isDarkMode
          ? "darkModeSecondColor hover:bg-[#44444e]"
          : "hover:bg-gray-300 "
      }`}
    >
      <BsGrid3X2GapFill size={20} />
    </div>
  );
};

// GridIcon.propTypes = {};

export default Gridicon;
