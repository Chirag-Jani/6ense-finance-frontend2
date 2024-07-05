import { useContext } from "react";
import { MdFormatListBulleted } from "react-icons/md";
import { ThemeContext } from "../../ThemeContext";

const Listicon = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`bg-gray-200 duration-300 ease-in rounded-md p-2 cursor-pointer ${
        isDarkMode
          ? "darkModeSecondColor hover:bg-[#44444e]"
          : "hover:bg-gray-300 "
      }`}
    >
      <MdFormatListBulleted size={20} />
    </div>
  );
};

export default Listicon;
