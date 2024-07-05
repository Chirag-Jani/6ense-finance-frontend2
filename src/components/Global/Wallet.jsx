import { useRef, useEffect, useContext } from "react";
import { Metamask, MetamaskConnect } from "../../utils/SVGicons/SvgIcons";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";
import { ThemeContext } from "../../ThemeContext";

const Wallet = ({ openwallet, closewallet }) => {
  const { isDarkMode } = useContext(ThemeContext);
  console.log(openwallet, "openwallet");

  const windowRef = useRef(null);

  const handleClickOutside = (event) => {
    if (windowRef.current && !windowRef.current.contains(event.target)) {
      closewallet(!openwallet);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    closewallet(!openwallet);
  };
  return (
    <div className="w-full h-full fixed bg-[#0000004f] top-0  left-0 pt-20 px-1 flex justify-center z-10">
      <div
        className={` sm:max-w-[380px] max-h-[320px] relative w-full bg-white  rounded-2xl mx-auto overflow-y-scroll hide-scrollbar ${
          isDarkMode ? "darkModeColor" : ""
        }`}
        ref={windowRef}
      >
        <div
          className={` border-b-[1px] border-gray-300 bg-blue-50 flex justify-between items-center h-[70px] px-6 sticky top-0 ${
            isDarkMode ? "darkModeSecondColor contentBorder" : ""
          }`}
        >
          <div className=" capitalize text-lg font-semibold">
            Connect wallet
          </div>
          <div className="p-2 cursor-pointer" onClick={handleClose}>
            {/* <CrossSVG color="red" /> */}
            <RxCross2 size={22} />
          </div>
        </div>

        <div className="w-full px-1 md:px-5 py-2">
          <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-4xl">
            <div className=" p-2">
              <div className="flex justify-center items-center">
                <MetamaskConnect />
              </div>
              <p className=" text-[#3f3f3f] font-normal text-xs p-1 text-center">
                Connect wallet
              </p>
            </div>
            <div className=" p-2">
              <div className="flex justify-center items-center">
                <Metamask />
              </div>
              <p className=" text-[#3f3f3f] font-normal text-xs p-1 text-center">
                Metamask
              </p>
            </div>
          </div>
        </div>

        <div
          className={` w-full px-4 py-5 bg-blue-50 border-t-[1px] ${
            isDarkMode ? "darkModeSecondColor contentBorder" : ""
          }`}
        >
          <p className=" text-[#3f3f3f] font-normal text-sm text-center pb-4 pt-2">
            {` Haven’t got a crypto wallet yet?`}
          </p>
          <button className="w-full py-2 text-white text-sm font-semibold bg-[#3f3f3f] rounded-lg flex justify-center items-center cursor-pointer capitalize">
            learn how to connect
          </button>
        </div>
      </div>
    </div>
  );
};

Wallet.propTypes = {
  openwallet: PropTypes.bool,
  closewallet: PropTypes.func,
};

export default Wallet;
