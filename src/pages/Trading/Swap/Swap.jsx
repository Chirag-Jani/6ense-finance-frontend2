import { useContext, useState } from "react";
import Token from "../../../components/Global/Token";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import Setting from "../../../components/Global/Setting";
import { IoMdSettings } from "react-icons/io";
// import BottomNav from "../../../components/Header/BottomNav";
import TradeNav from "../../../components/Trade/TradeNav";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { ThemeContext } from "../../../ThemeContext";
import { PiArrowClockwiseBold } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
import Token2 from "../../../components/Global/Token2";

const Swap = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [token2Open, setToken2Open] = useState(false);
  const [setting, SetSetting] = useState(false);

  const handleSetting = () => {
    SetSetting(!setting);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleToken2Open = () => {
    setToken2Open(!token2Open);
  };
  return (
    <div className="">
      <TradeNav />
      <div className="mx-auto w-full  py-10 px-1 sm:px-2 ">
        <div
          className={`border-x-[1px] border-t-[1px] border-b-[3px]  max-w-[399px]  h-auto rounded-xl mx-auto py-2 shadow-md ${
            isDarkMode
              ? "bg-[#25252d] text-[#e5e7eb] border-[#2d2d37]"
              : "bg-white  text-[#101013] border-[#e5e7eb]"
          }`}
        >
          <div
            className={`w-full  border-b-[1px]  p-4 ${
              isDarkMode ? "border-slate-900" : "border-slate-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className=" text-base font-semibold">Swap</div>
              <div className="flex justify-end items-center gap-3">
                <IoMdSettings
                  size={18}
                  onClick={handleSetting}
                  style={{ cursor: "pointer" }}
                />

                {/* <GiAnticlockwiseRotation
                  size={18}
                  style={{ cursor: "pointer" }}
                />
                <PiArrowClockwiseBold size={18} style={{ cursor: "pointer" }} /> */}
              </div>
            </div>
            <div
              className={`text-[#7a6eaa] text-sm font-normal ${
                isDarkMode ? " text-slate-300" : " text-[#7a6eaa]"
              }`}
            >
              Trade tokens is an instant
            </div>
          </div>
          <div className=" w-full px-4 py-2">
            <div className="flex justify-between items-center py-1 px-1">
              <div
                className="flex justify-end items-center gap-3 cursor-pointer"
                onClick={handleOpen}
              >
                <IoMdSettings size={18} style={{ cursor: "pointer" }} />
                <div className=" text-sm font-semibold">6ENSE</div>
                <RiArrowDownSLine size={20} />
              </div>
              <div className="text-sm font-normal">
                <p>Balance : 0</p>
              </div>
            </div>
            <div
              className={` w-full rounded-lg p-3 ${
                isDarkMode ? "bg-[#32323c]" : "bg-gray-200"
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
                <div
                  className={`border-2 px-3  rounded-2xl flex justify-center items-center text-xs font-semibold pb-[3px] ${
                    isDarkMode
                      ? "text-[#e5e7eb] border-2 border-[#e5e7eb] "
                      : "text-[#313131] border-2 border-[#313131] "
                  } `}
                >
                  max
                </div>
              </label>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div
              className={` p-2 rounded-lg ${
                isDarkMode ? "bg-[#32323c]" : "bg-gray-200"
              } `}
            >
              <HiOutlineArrowSmDown />
            </div>
          </div>

          <div className=" w-full px-4 py-2">
            <div className="flex justify-between items-center py-1 px-1">
              <div
                className="flex justify-end items-center gap-3 cursor-pointer"
                onClick={handleToken2Open}
              >
                <IoMdSettings size={18} style={{ cursor: "pointer" }} />
                <div className=" text-sm font-semibold">USDT</div>
                <RiArrowDownSLine size={20} />
              </div>
              <div className="text-sm font-normal">
                <p>Balance : 0</p>
              </div>
            </div>
            <div
              className={` w-full rounded-lg p-3 ${
                isDarkMode ? "bg-[#32323c]" : "bg-gray-200"
              }`}
            >
              <input
                type="number"
                name=""
                id="ageInputId"
                className=" w-full text-base font-normal overflow-hidden whitespace-nowrap rounded-lg outline-none border-0 text-right pr-1 appearance-none bg-transparent input-number-field  "
                placeholder="0.0"
              />
            </div>
            {/* <div className="flex justify-between items-center pt-4 px-1">
              <div className=" text-[#6254ff] text-sm">Price</div>
              <div className=" text-sm font-semibold flex justify-end gap-4 items-center">
                <p className="text-sm">8.6</p>
                <PiArrowClockwiseBold size={18} style={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <div className="text-[#6254ff] text-sm">Slippage Tolerance</div>
              <div className=" text-sm font-semibold text-[#6254ff]">5%</div>
            </div> */}
          </div>

          <div className="w-full px-4 py-2 ">
            <button
              className={`w-full py-3 border-[1px] text-base font-semibold  rounded-lg flex justify-center items-center ${
                isDarkMode
                  ? "bg-[#32323c] text-[#e5e7eb]  border-[#505054]"
                  : "bg-[#101013]  text-[#e5e7eb] border-[#2d2d37]"
              }`}
            >
              Swap
            </button>
          </div>
          <div className="w-full px-4 py-2">
            <div
              className={`w-full py-3 px-4  text-base font-normal  rounded-lg flex justify-center align-middle items-center isDarkMode ${
                isDarkMode
                  ? " bg-[#32323c] text-[#cacbcd] "
                  : " bg-[#e5e5e5]  text-gray-700 "
              } `}
            >
              Insufficient liquidity for this trade. Try enabling multi-hop
              trades.
            </div>
          </div>
        </div>
        <div
          className={`max-w-[399px] h-auto rounded-xl mx-auto mt-5 ${
            isDarkMode
              ? "bg-[#25252d] text-[#e5e7eb]"
              : "bg-white  text-[#101013]"
          }`}
        >
          {/* <div className=" w-full py-4 px-5">
            <div className="w-full flex justify-between items-center text-sm ">
              <p className="text-slate-500">Maximum solod</p>
              <p className="">3.14852CRO</p>
            </div>
            <div className="w-full flex justify-between items-center text-sm ">
              <p className="text-slate-500">Prime Impact</p>
              <p className="">{`<0.01%`}</p>
            </div>
            <div className="w-full flex justify-between items-center text-sm ">
              <p className="text-slate-500">Liquidity Provider Free</p>
              <p className="">0.008503 CRP</p>
            </div>
          </div> */}
        </div>
        <div className="">
          {open ? <Token open={open} close={setOpen} /> : ""}
          {setting ? <Setting open={setting} close={SetSetting} /> : ""}
          {token2Open ? <Token2 open={token2Open} close={setToken2Open} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Swap;
