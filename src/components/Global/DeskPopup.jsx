import PropTypes from "prop-types";

import { CrossSVG } from "../../utils/SVGicons/SvgIcons";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const DeskPopup = ({ openwallet, closewallet }) => {
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
        className=" sm:max-w-[1010px] max-h-[520px] h-auto relative w-full bg-white  rounded-2xl mx-auto overflow-y-scroll hide-scrollbar 
      
        "
        ref={windowRef}
      >
        <div className=" border-b-[1px] border-gray-300 bg-gray-50 flex justify-between items-center h-[70px] px-6 sticky top-0 ">
          <div className=" capitalize text-lg font-semibold"></div>
          <div className="p-2 cursor-pointer" onClick={handleClose}>
            <CrossSVG color="red" />
          </div>
        </div>

        <div className="w-full px-1 md:px-5 py-2 bg-gray-100">
          <div className=" p-2">
            <p className=" text-[#3f3f3f] text-center font-semibold text-xl p-1 mx-auto">
              *The DEX launch for teaching and testnet is on June 19th!*
            </p>
          </div>
        </div>

        <div className=" w-full px-4 py-8  border-t-[1px] ">
          <p className=" text-[#3f3f3f] font-medium text-sm sm:text-base text-center sm:px-4 pb-4 pt-2">
            This will be followed by 6 days of tutorials and explanations on our
            social media pages, detailing all available features. During the
            tutorial period and until the full release, the features will be
            available in testnet.
          </p>
          <p className=" text-[#3f3f3f] font-medium text-sm sm:text-base text-center pb-4 pt-2">
            In the meantime, you can purchase the token on 6ense.info.
          </p>
          <p className=" text-[#3f3f3f] font-medium text-sm sm:text-base text-center pb-4 pt-2">
            The full functionalities of the DEX will be fully available to users
            from August 1st.
          </p>
          <p className=" text-[#3f3f3f] font-medium text-sm sm:text-base text-center pb-4 pt-2">
            Follow our social media pages and visit
            <Link to="https://www.6ense.net/" className="text-[#6254ff] px-2">
              http://www.6ense.it
            </Link>
            for updates and usage tutorials.
          </p>
        </div>
      </div>
    </div>
  );
};

DeskPopup.propTypes = {
  openwallet: PropTypes.bool,
  closewallet: PropTypes.func,
};

export default DeskPopup;
