// import { useRef, useEffect, useContext, useState } from "react";
// import { CrossSVG } from "../../utils/SVGicons/SvgIcons";
// import PropTypes from "prop-types";
// import { ThemeContext } from "../../ThemeContext";
// import LiveFinish from "../Earn/LiveFinish";
// import HarvestButton from "../Earn/HarvestButton";

// const YourWallet = ({ openwallet, closewallet }) => {
//   const [live, setLive] = useState(true);
//   const { isDarkMode } = useContext(ThemeContext);
//   console.log(openwallet, "openwallet");

//   const windowRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (windowRef.current && !windowRef.current.contains(event.target)) {
//       closewallet(!openwallet);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLive = () => {
//     setLive(true);
//   };
//   const handleFinish = () => {
//     setLive(false);
//   };

//   const handleClose = () => {
//     closewallet(!openwallet);
//   };
//   return (
//     <div className="w-full h-full fixed bg-[#0000004f] top-0  left-0 pt-20 px-1 flex justify-center z-10">
//       <div
//         className={` sm:max-w-[380px] max-h-[320px] relative w-full bg-white  rounded-2xl mx-auto overflow-y-scroll hide-scrollbar ${
//           isDarkMode ? "darkModeColor" : ""
//         }`}
//         ref={windowRef}
//       >
//         <div
//           className={` border-b-[1px] border-gray-300 bg-blue-50 flex justify-between items-center h-[70px] px-6 sticky top-0 ${
//             isDarkMode ? "darkModeSecondColor contentBorder" : ""
//           }`}
//         >
//           <div className=" capitalize text-lg font-semibold">
//             Connect wallet
//           </div>
//           <div className="p-2 cursor-pointer" onClick={handleClose}>
//             <CrossSVG color="red" />
//           </div>
//         </div>

//         <div className="w-full px-1 md:px-5 py-2">
//           <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-4xl">
//             <LiveFinish
//               name={"Create"}
//               sname={"Manage"}
//               handleFinish={handleFinish}
//               handleLive={handleLive}
//               status={live}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end items-center">
//           <HarvestButton
//             name={"Harvest"}
//             color={"text-gray-500"}
//             bgColor={"bg-gray-200"}
//           />
//         </div>

//         <div
//           className={` w-full px-4 py-5 bg-blue-50 border-t-[1px] ${
//             isDarkMode ? "darkModeSecondColor contentBorder" : ""
//           }`}
//         >
//           <p className=" text-[#3f3f3f] font-normal text-sm text-center pb-4 pt-2">
//             {` Haven’t got a crypto wallet yet?`}
//           </p>
//           <button className="w-full py-2 text-white text-sm font-semibold bg-[#3f3f3f] rounded-lg flex justify-center items-center cursor-pointer capitalize">
//             learn how to connect
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// YourWallet.propTypes = {
//   openwallet: PropTypes.bool,
//   closewallet: PropTypes.func,
// };

// export default YourWallet;
