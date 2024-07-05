import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const TopHeader = ({ heading, para, spara, Booster }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="w-full h-auto mx-auto">
      <div
        className={`w-full flex justify-center py-5 duration-200 bg-gradient-to-r ${
          isDarkMode
            ? "from-[#1d1d22] via-[#6254ff] to-[#1d1d22]"
            : "from-gray-200 via-gray-300 to-gray-200"
        }
      `}
      >
        <div
          className={`max-w-[1200px] mx-auto w-full flex items-center flex-wrap px-3 ${
            Booster
              ? "justify-center gap-x-10 gap-y-3 sm:justify-between "
              : "justify-center"
          }`}
        >
          <div className="">
            <h1
              className={` font-medium text-3xl sm:text-4xl md:text-6xl  py-2 ${
                isDarkMode ? "text-gray-100 " : "text-[#1d1d22] "
              }
              
               ${Booster ? "text-start" : "text-center"}`}
            >
              {heading}
            </h1>
            <h2
              className={`font-semibold text-2xl  py-2   ${
                isDarkMode ? "text-gray-300 " : "text-[#1A1A20] "
              }
              
              ${Booster ? "text-start" : "text-center"}`}
            >
              {para}
            </h2>
            <h3
              className={` font-semibold text-xl  pb-2  ${
                isDarkMode ? "text-gray-300 " : "text-[#1A1A20] "
              }  ${Booster ? "text-start" : "text-center"}`}
            >
              {spara}
            </h3>
          </div>
          <div className="">{Booster}</div>
        </div>
      </div>
    </div>
  );
};

TopHeader.propTypes = {
  heading: PropTypes.string,
  para: PropTypes.string,
  spara: PropTypes.string,
  Booster: PropTypes.node,
};

export default TopHeader;
