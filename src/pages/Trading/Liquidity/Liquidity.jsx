import { Link } from "react-router-dom";
import Setting from "../../../components/Global/Setting";
import { useContext, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { PiArrowClockwiseBold } from "react-icons/pi";
import TradeNav from "../../../components/Trade/TradeNav";
import { ThemeContext } from "../../../ThemeContext";
// import YourWallet from "../../../components/Global/YourWallet";
// import YourWallets from "../../../components/Global/YourWallets.jsx";

const Liquidity = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [setting, SetSetting] = useState(false);

  const handleSetting = () => {
    SetSetting(!setting);
  };

  return (
    <div className="">
      <TradeNav />
      <div className="mx-auto w-full  min-h-screen py-10 px-1 sm:px-2">
        <div
          className={`border max-w-[399px] bg-white h-auto rounded-xl mx-auto py-2  ${
            isDarkMode ? "darkModeColor" : ""
          } `}
        >
          <div className=" w-full border-gray-300 p-4">
            <div className="flex justify-between items-center">
              <div className=" text-base font-semibold">Your Liquidity</div>
              <div className="flex justify-end items-center gap-3">
                <IoMdSettings
                  size={18}
                  onClick={handleSetting}
                  style={{ cursor: "pointer" }}
                />
                <PiArrowClockwiseBold size={18} style={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className=" text-sm font-normal">
              Remove liquidity to receive token back
            </div>
          </div>

          <div
            className={`w-full px-4 py-4 bg-gray-200 ${
              isDarkMode ? "darkModeSecondColor" : ""
            }`}
          >
            <p className="w-full py-2 text-gray-600 text-xs font-semibold rounded-lg flex justify-center items-center">
              No .liquidity found
            </p>
            <p className="w-full py-2 text-gray-600 text-xs font-semibold rounded-lg flex justify-center items-center">
              {`Non't see a pool you joined.`}
            </p>
            <div className=" rounded-lg flex justify-center items-center">
              <button
                className={`border-2 border-[#313131] px-3 rounded-lg text-[#313131] text-sm font-semibold ${
                  isDarkMode ? "contentBorder" : "border-[#313131]"
                } `}
              >
                Find other LP tokens
              </button>
            </div>
          </div>
          <div className="w-full px-4 py-4 ">
            <Link
              to="/buyense"
              className={`w-full py-2 text-white text-sm font-semibold bg-[#313131] rounded-lg flex justify-center items-center cursor-pointer ${
                isDarkMode
                  ? "text-[#b5b6b7] bg-[#4b4b54] hover:bg-[#3e3e48]"
                  : ""
              }`}
            >
              <span className="font-bold text-lg px-2 -mt-[2px]">+ </span> Add
              Liquidity
            </Link>
          </div>
        </div>
        {setting ? <Setting open={setting} close={SetSetting} /> : ""}
        {/* <YourWallet /> */}
        {/* <YourWallets /> */}
      </div>
    </div>
  );
};

export default Liquidity;
