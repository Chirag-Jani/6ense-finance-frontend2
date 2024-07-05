import { useRef, useEffect, useContext } from "react";
import { CrossSVG } from "../../utils/SVGicons/SvgIcons";
import PropTypes from "prop-types";
import { ThemeContext } from "../../ThemeContext";

const Token = ({ open, close }) => {
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
  }, []);

  const handleClose = () => {
    close(!open);
  };
  return (
    <div className="w-full h-full fixed bg-[#0000004f] top-0  left-0 py-2 px-1 flex justify-center">
      <div
        className={` border-[1px] border-gray-500 max-w-[399px] max-h-[633px] relative w-full bg-white h-auto rounded-xl mx-auto overflow-y-scroll hide-scrollbar ${
          isDarkMode ? "darkModeColor" : ""
        }`}
        ref={windowRef}
      >
        <div
          className={`" border-b-2 bg-slate-100 border-gray-300 flex justify-between items-center h-[60px] px-6 sticky top-0 ${
            isDarkMode ? "darkModeSecondColor contentBorder" : " text-gray-700"
          }`}
        >
          <div className="">Salect a Token</div>
          <div className="p-2 cursor-pointer" onClick={handleClose}>
            <CrossSVG />
          </div>
        </div>

        <div className=" h-[110px] py-5 px-4">
          <input
            type="text"
            name=""
            id=""
            className={` w-full bg-blue-50 px-3 py-3 text-xs font-normal rounded-xl outline-none border-2 border-[#a199e6] ${
              isDarkMode ? "darkModeSecondColor contentBorder" : "text-gray-700"
            }`}
            placeholder="Search name or paste address"
          />

          <div className=" text-xs pt-3 pl-1 font-medium text-gray-500">
            Common tokens
          </div>
        </div>

        <div className=" w-full h-[403px] overflow-y-scroll hide-scrollbar">
          {/* <div className="pt-2 pb-4 px-6 flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 overflow-hidden rounded-md flex justify-center items-center">
                {" "}
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.-kE2gM38a7FXZuVbstXHtAHaML&pid=Api&P=0&h=220"
                  alt=""
                  className="w-5 h-5"
                />
              </div>
              <div className="text-sm uppercase font-medium text-gray-500">
                6ense
              </div>
            </div>
          </div> */}

          <div
            className={` px-4  overflow-y-scroll hide-scrollbar border-t-[1px] ${
              isDarkMode ? "darkModeColorsN contentBorder" : ""
            }`}
          >
            <div className="flex items-center justify-between py-1 mb-1">
              <div className=" flex items-center gap-3">
                <div className="w-5 h-5 overflow-hidden flex justify-center rounded-md items-center">
                  {" "}
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.-kE2gM38a7FXZuVbstXHtAHaML&pid=Api&P=0&h=220"
                    alt=""
                    className="w-5 h-5"
                  />
                </div>
                <div className="">
                  <div className=" font-medium text-sm uppercase">6ense</div>
                  <div className=" caption-bottom text-gray-500 font-normal">
                    token
                  </div>
                </div>
              </div>
              <button className="bg-gray-200 w-3 h-5 border-[1px] border-red-400 rounded-xl"></button>
            </div>
          </div>
        </div>

        <div
          className={`  w-full h-[60px] bg-gray-200 rounded-b-xl sticky bottom-0 ${
            isDarkMode ? "darkModeSecondColor" : ""
          }`}
        >
          <div className=" flex  justify-center items-center py-3 text-[#6254ff]">
            Manage Tokens
          </div>
        </div>
      </div>
    </div>
  );
};

Token.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};

export default Token;
