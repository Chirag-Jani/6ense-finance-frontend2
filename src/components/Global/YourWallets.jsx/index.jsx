// import { useRef, useEffect, useContext, useState } from "react";

// import PropTypes from "prop-types";

// import { CrossSVG } from "../../../utils/SVGicons/SvgIcons";
// import LiveFinish from "../../Earn/LiveFinish";
// import HarvestButton from "../../Earn/HarvestButton";
// import { ThemeContext } from "../../../ThemeContext";
// import AddressDisplay from "./AddressDisplay";
// import { GoAlertFill } from "react-icons/go";

// const YourWallets = ({ openwallet, closewallet }) => {
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
//     <div className="w-full h-full fixed bg-[#0000004f] top-0  left-0 pt-20 px-1 flex justify-center items-center z-10">
//       <div
//         className={`  relative  bg-white  rounded-2xl mx-auto overflow-y-scroll hide-scrollbar ${
//           isDarkMode ? "darkModeColor" : ""
//         }`}
//         ref={windowRef}
//       >
//         <div
//           className={` border-b-[1px] border-gray-300 bg-blue-50 flex justify-between items-center h-[70px] px-6 sticky top-0 ${
//             isDarkMode ? "darkModeSecondColor contentBorder" : ""
//           }`}
//         >
//           <div className=" capitalize text-lg font-semibold">Your wallet</div>
//           <div className="p-2 cursor-pointer" onClick={handleClose}>
//             <CrossSVG color="red" />
//           </div>
//         </div>

//         <div className="w-full px-1 md:px-5 py-3">
//           <div className="flex justify-center px-8">
//             <div className="w-full bg-red-500 flex justify-around items-center">
//               <div className=" bg-green-300 w-full flex justify-around items-center py-2 px-8">
//                 Wallet
//               </div>
//               <div className=" bg-yellow-500 w-full flex justify-around items-center py-2 px-8">
//                 Transactions
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* 
//         <div className="flex justify-end items-center">
//           <HarvestButton
//             name={"Harvest"}
//             color={"text-gray-500"}
//             bgColor={"bg-gray-200"}
//           />
//         </div> */}

//         <div
//           className={` w-full px-4 py-5 bg-blue-500 border-t-[1px] ${
//             isDarkMode ? "darkModeSecondColor contentBorder" : ""
//           }`}
//         >
//           <div className="">
//             <div className=" pb-2 uppercase text-xs font-semibold">
//               your address
//             </div>
//             <div className=" w-full ">
//               <AddressDisplay />
//             </div>
//           </div>

//           <div className=" bg-red-100 flex items-center py-2 px-3 mt-3 rounded-lg">
//             <div className="pr-2">
//               <GoAlertFill size={22} />
//             </div>
//             <div className="">
//               <h2 className="text-sm">6ense Balance Low</h2>
//               <p className=" text-xs">You need 6ense for transaction fees.</p>
//             </div>
//           </div>
//           <div className=" bg-red-100 flex items-center justify-between py-2 px-3 mt-3 rounded-lg">
//             <div className="pr-2 flex items-center gap-x-2">
//               <div className="p-1 border rounded-full bg-red-400 "></div>
//               <div className="">6ense Balance</div>
//             </div>
//             <div className="">
//               <span className="">0.00</span>
//             </div>
//           </div>

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

// YourWallets.propTypes = {
//   openwallet: PropTypes.bool,
//   closewallet: PropTypes.func,
// };

// export default YourWallets;
