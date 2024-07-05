// import { useState } from "react";
// import { MdContentCopy } from "react-icons/md";

// const AddressDisplay = () => {
//   const [copied, setCopied] = useState(false);
//   const address = "0x2EbE3572A9C1bcaE7c2891825836A475cD448b42";

//   const handleCopy = () => {
//     navigator.clipboard.writeText(address);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 3000); // Reset the copied state after 2 seconds
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       <div className=" border w-full py-1 px-2 rounded">
//         <input
//           type="text"
//           readOnly
//           value={address}
//           className="bg-transparent w-full outline-none cursor-default"
//         />
//       </div>
//       <div
//         className="flex items-center space-x-1  cursor-pointer"
//         onClick={handleCopy}
//       >
//         <div className="p-1">
//           <MdContentCopy size={24} />
//         </div>
//         {copied && <div className="text-green-500">✓</div>}
//       </div>
//     </div>
//   );
// };

// export default AddressDisplay;
