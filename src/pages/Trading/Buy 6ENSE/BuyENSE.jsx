// import PropTypes from 'prop-types';
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Token from "../../../components/Global/Token";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";
import Setting from "../../../components/Global/Setting";
import { IoMdSettings } from "react-icons/io";
import { PiArrowClockwiseBold } from "react-icons/pi";
import TradeNav from "../../../components/Trade/TradeNav";
import { ThemeContext } from "../../../ThemeContext";

const BuyENSE = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [setting, SetSetting] = useState(false);

  const handleSetting = () => {
    SetSetting(!setting);
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <TradeNav />
      <div className="`mx-auto w-full  py-10 px-1 sm:px-2 ">
        <div
          className={` border max-w-[399px]  h-auto rounded-xl mx-auto py-2 ${
            isDarkMode ? "darkModeColor" : "bg-white"
          } `}
        >
          <div
            className={`w-full  border-b-[1px]   p-4 flex items-center ${
              isDarkMode ? "contentBorder" : "border-gray-300"
            }`}
          >
            <Link to="/liquidity" className=" w-9 ">
              <FaArrowLeft style={{ fontSize: "26px", padding: "4px" }} />
            </Link>
            <div className=" w-full">
              <div className="flex justify-between items-center">
                <div className=" text-base font-semibold">
                  6ENSE-Credit Card
                </div>
                <div className="flex justify-end items-center gap-3">
                  <IoMdSettings
                    size={18}
                    onClick={handleSetting}
                    style={{ cursor: "pointer" }}
                  />
                  <PiArrowClockwiseBold
                    size={18}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              {/* <div className=" text-sm font-normal">
                Receive LP tokens and earn 0.15% trading fees
              </div> */}
            </div>
          </div>
          <div className=" w-full px-4 py-2">
            <div className="flex justify-between items-center pr-1">
              <div
                className={`flex justify-end items-center gap-3 cursor-pointer border-[1px] p-2 rounded-t-lg ${
                  isDarkMode ? "darkModeSecondColor contentBorder" : ""
                }`}
                onClick={handleOpen}
              >
                <IoMdSettings
                  size={18}
                  onClick={handleSetting}
                  style={{ cursor: "pointer" }}
                />
                <div className=" text-sm font-semibold">6ENSE</div>
                <RiArrowDownSLine size={20} />
              </div>
              <div className="text-sm font-normal">
                <p>Balance : 0</p>
              </div>
            </div>
            <div
              className={` bg-gray-200 w-full rounded-b-lg rounded-tr-lg p-3 ${
                isDarkMode ? "darkModeSecondColor " : ""
              }`}
            >
              <input
                type="number"
                name=""
                id="ageInputId"
                className=" w-full text-base font-normal overflow-hidden whitespace-nowrap rounded-lg outline-none border-0 text-right pr-1 appearance-none bg-transparent input-number-field  "
                placeholder="0.0"
              />

              <label htmlFor={"ageInputId"} className=" flex justify-end mt-1">
                <p className=" px-2 text-xs font-normal  pt-[3px]">
                  85245652 USD
                </p>
                <div
                  className={` text-[#313131] border-2 border-[#313131] px-3  rounded-2xl flex justify-center items-center text-xs font-semibold pb-[3px] ${
                    isDarkMode ? "contentBorder darkModeSecondColor" : ""
                  }`}
                >
                  max
                </div>
              </label>
            </div>
          </div>

          <div className=" flex justify-center items-center py-2">
            <div
              className={` bg-gray-200 p-2 rounded-lg ${
                isDarkMode ? "darkModeSecondColor" : ""
              } `}
            >
              <FaPlus />
            </div>
          </div>

          <div className=" w-full px-4 py-2">
            <div className="flex justify-between items-center pr-1">
              <div
                className={`flex justify-end items-center gap-3 cursor-pointer border-[1px] p-2 rounded-t-lg ${
                  isDarkMode ? "darkModeSecondColor contentBorder" : ""
                }`}
                onClick={handleOpen}
              >
                <IoMdSettings
                  size={18}
                  onClick={handleSetting}
                  style={{ cursor: "pointer" }}
                />
                <div className=" text-sm font-semibold">6ENSE</div>
                <RiArrowDownSLine size={20} />
              </div>
              <div className="text-sm font-normal">
                <p>Balance : 0</p>
              </div>
            </div>
            <div
              className={` bg-gray-200 w-full rounded-b-lg rounded-tr-lg p-3 ${
                isDarkMode ? "darkModeSecondColor " : ""
              }`}
            >
              <input
                type="number"
                name=""
                id="ageInputId"
                className=" w-full text-base font-normal overflow-hidden whitespace-nowrap rounded-lg outline-none border-0 text-right pr-1 appearance-none bg-transparent input-number-field  "
                placeholder="0.0"
              />

              <label htmlFor={"ageInputId"} className=" flex justify-end mt-1">
                <p className=" px-2 text-xs font-normal text-gray-700 pt-[3px]">
                  52255512741 USD
                </p>
                <div
                  className={` text-[#313131] border-2 border-[#313131] px-3  rounded-2xl flex justify-center items-center text-xs font-semibold pb-[3px] ${
                    isDarkMode ? "contentBorder darkModeSecondColor" : ""
                  }`}
                >
                  max
                </div>
              </label>
            </div>
          </div>
          {/* 
          <div className="w-full px-4 py-2">
            <div
              className={`w-full py-3 px-4 text-yellow-700 text-base font-normal bg-[#e8dccb] rounded-lg flex justify-center align-middle items-center ${
                isDarkMode ? "darkModeSecondColor" : ""
              }`}
            >
              <BiSolidError size={30} />
              <div className="pl-2">
                Insufficient liquidity for this trade. Try enabling multi-hop
                trades.
              </div>
            </div>
          </div> */}

          {/* <div className="  max-w-[399px] h-auto  mx-auto mt-5 py-2 px-3">
              <div
                className={` w-full rounded-xl border-[1px] p-2 ${
                  isDarkMode ? "darkModeSecondColor contentBorder" : ""
                } `}
              >
                <div className="w-full flex justify-between items-center text-xs ">
                  <p className="">Maximum solod</p>
                  <p className="">3.14852CRO</p>
                  <p className="">3.14852CRO</p>
                </div>
                <div className="w-full flex justify-between items-center text-xs ">
                  <p className="">Prime Impact</p>
                  <p className="">{`<0.01%`}</p>
                  <p className="">{`<0.01%`}</p>
                </div>
                <div className="w-full flex justify-between items-center text-xs ">
                  <p className="">Liquidity Provider </p>
                  <p className="">0.008503 CRP</p>
                  <p className="">0.008503 CRP</p>
                </div>
              </div>
            </div> */}

          {/* <div className="w-full flex justify-between items-center text-xs py-3 px-5 text-gray-600 ">
            <p className="">Slippage Tolerance</p>
            <p className="">3.14852CRO</p>
          </div> */}

          <div className="w-full px-4 py-2 ">
            <button className="w-full py-3  mb-3 text-white text-base font-semibold bg-[#313131] rounded-lg flex justify-center items-center">
              Buy 6ense With Credit Card
            </button>
          </div>
        </div>

        {/* <div
          className={`max-w-[399px] h-auto bg-white rounded-xl mx-auto mt-5 ${
            isDarkMode ? "darkModeColor" : ""
          }`}
        >
          <div className=" w-full py-4 px-5 flex justify-center text-center text-xs ">
            You can Activate Zap feature in settings to create liquidity
            starting from 1 token only. For $6ENSE pools, Zap feature use is
            mandatory as it helps you avoid the tax when forming LP.
          </div>
        </div> */}
        {/* <div
          className={` max-w-[399px] h-auto bg-white rounded-xl mx-auto mt-5 ${
            isDarkMode ? "darkModeColor" : ""
          }`}
        >
          <div className=" w-full py-4 px-5 flex justify-center text-center text-xs ">
            {`By adding liquidity you'll earn 0.15% of all trades on this pair
          proportional to your share of the pool. Fees are added to the pool,
          accrue in real time and can be claimed by withdrawing your liquidity.`}
          </div>
        </div> */}
        <div className="">
          {open ? <Token open={open} close={setOpen} /> : ""}
          {setting ? <Setting open={setting} close={SetSetting} /> : ""}
        </div>
      </div>
    </div>
  );
};

// BuyENSE.propTypes = {

// };

export default BuyENSE;
