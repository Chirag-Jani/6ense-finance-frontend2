import PropTypes from "prop-types";

import { useContext, useEffect, useRef } from "react";

import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from "../../ThemeContext";

const Setting = ({ open, close }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const windowRef = useRef(null);

  const handleClickOutside = (event) => {
    if (windowRef.current && !windowRef.current.contains(event.target)) {
      close(!open);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClose = () => {
    close(!open);
  };
  return (
    <div className="w-full h-full fixed bg-[#0000004f] top-0  left-0 pt-20 px-1 flex justify-center z-10">
      <div
        className={` sm:max-w-[380px] max-h-[210px] relative w-full bg-white  rounded-2xl mx-auto overflow-y-scroll hide-scrollbar ${
          isDarkMode ? "darkModeColor" : ""
        }`}
        ref={windowRef}
      >
        <div
          className={` border-b-[1px] border-gray-300 bg-blue-50 flex justify-between items-center h-[70px] px-6 sticky top-0 ${
            isDarkMode ? "darkModeSecondColor contentBorder" : ""
          } `}
        >
          <div className=" capitalize text-lg font-semibold">Setting</div>
          <div className="p-2 cursor-pointer" onClick={handleClose}>
            <RxCross2 size={20} />
          </div>
        </div>

        <div className="w-full px-1 py-2 ">
          <div className="p-4 w-full">
            <p className="text-gray-700 font-normal text-sm px-1">
              Slippage Tolerance
            </p>
            <div className="flex items-center gap-x-1 py-4">
              <div
                className={`w-full text-center bg-blue-100 text-black hover:bg-[#313131] px-3 py-1 rounded-md hover:text-white text-sm font-semibold ease-in-out duration-500 ${
                  isDarkMode ? "darkModeSecondColor contentBorder" : ""
                }`}
              >
                0.1%
              </div>
              <div className={`w-full text-center bg-blue-100 text-black hover:bg-[#313131] px-3 py-1 rounded-md hover:text-white text-sm font-semibold ease-in-out duration-500 ${
                  isDarkMode ? "darkModeSecondColor contentBorder" : ""
                }`}>
                0.5%
              </div>
              <div className={`w-full text-center bg-blue-100 text-black hover:bg-[#313131] px-3 py-1 rounded-md hover:text-white text-sm font-semibold ease-in-out duration-500 ${
                  isDarkMode ? "darkModeSecondColor contentBorder" : ""
                }`}>
                1.0%
              </div>

              <div className="w-[115%]  text-center flex items-center gap-x-1 text-sm ">
                <input
                  type="text"
                  placeholder="1.00"
                  className={` w-full outline-[#6254ff] rounded-full px-2 py-1 border border-[#6254ff] bg-blue-100  ${
                    isDarkMode ? "darkModeSecondColor contentBorder" : ""
                  }`}
                />
                %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Setting.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};

export default Setting;
