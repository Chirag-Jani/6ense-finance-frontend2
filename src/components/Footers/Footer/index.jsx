import { useContext } from "react";
import LowerBottomFooter from "./LowerBottomFooter";
import { ThemeContext } from "../../../ThemeContext";
import UpperBottmFooter from "./UpperBottmFooter";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={` w-full mx-auto border-t-[1.5px] duration-200 flex justify-center mt-10  ${
        isDarkMode
          ? " bg-[#101013] darkModeColor border-gray-900"
          : "bg-gray-200  border-gray-300"
      }`}
    >
      <div className="max-w-[1280px] w-full pb-6 px-4">
        <UpperBottmFooter />
        <LowerBottomFooter />
      </div>
    </div>
  );
};

export default Footer;
