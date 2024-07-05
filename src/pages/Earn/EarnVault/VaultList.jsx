import { useContext, useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import { TiLink } from "react-icons/ti";
import { Link } from "react-router-dom";
import EnableButton from "../../../components/Earn/EnableButton";
import { FaArrowRotateRight } from "react-icons/fa6";
import { SlCalculator } from "react-icons/sl";
import { ThemeContext } from "../../../ThemeContext";

const VaultList = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [detail, setDetail] = useState(false);
  const handleSet = () => {
    setDetail(!detail);
  };
  return (
    <div
      className={`w-full border-x-[1px] border-t-[1px] border-b-[3px]  border-gray-400 rounded-xl overflow-hidden ${
        isDarkMode ? "darkModeColor" : ""
      }`}
    >
      <div
        className=" flex gap-x-4 px-2 justify-between items-center cursor-pointer"
        onClick={handleSet}
      >
        <div className=" w-full flex sm:gap-x-6 md:gap-x-8 lg:gap-x-20 py-1 justify-between items-center flex-wrap md:flex-nowrap ">
          <div className=" w-full flex justify-between gap-2 items-center pt-3 pb-4 ">
            <div className=" flex justify-start gap-2 flex-wrap items-center relative">
              <div className="bg-blue-950 text-white w-12 h-12 rounded-full flex justify-center items-center border-[1px] border-gray-600  text-xs font-bold">
                6ense
              </div>
              <div className="">
                <p className="font-bold text-base">6ENSE Earn</p>
                <p className=" text-sm">Stake COINS</p>
              </div>
            </div>
            <div className=" hidden md:flex justify-between items-center">
              <div className="flex justify-end flex-wrap items-center gap-2">
                <div className="">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-xs font-normal uppercase">
                      6ense earned
                    </div>
                  </div>
                  <div className=" uppercase ">0.0000</div>
                  <div className=" uppercase text-xs font-extrabold ">
                    0.0 usd
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* asdfgh */}
          <div className=" hidden w-full md:flex justify-between gap-2 items-center pt-3 pb-4 ">
            <div className=" gap-3 capitalize text-sm font-medium text-[#6254ff]">
              <div className="">Flexible APY</div>
              <div className="flex gap-2 items-center">
                2.10% <SlCalculator />
              </div>
            </div>
            <div className=" gap-3 capitalize text-sm font-medium text-[#6254ff] ">
              <div className="">LOCKED APY:</div>
              <div className="flex items-center gap-2">
                Up to 109.13% <SlCalculator />
              </div>
            </div>
          </div>
          {/* asdfgh */}
          <div className="  hidden w-[70%] md:flex justify-center gap-2 items-center pt-3 pb-4 ">
            <div className="">
              <div className=" capitalize text-xs font-normal">
                {" "}
                Total staked:
              </div>
              <div className=" capitalize text-center text-xs font-semibold">
                20,338,796 6ense
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end  items-center gap-2 capitalize text-sm font-medium text-[#6254ff] ">
          <p className=" hidden lg:contents">deatils</p>
          {detail ? (
            <FaAngleDown size={20} style={{ transform: "rotate(180deg)" }} />
          ) : (
            <FaAngleDown size={20} />
          )}
        </div>
      </div>

      {/* bottom part */}
      {detail ? (
        <div
          className={` border-t-2  py-4 px-1 sm:px-4 w-full gap-4 flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap ${
            isDarkMode
              ? "darkModeSecondColor contentBorder"
              : "bg-gray-100 border-gray-300"
          } `}
        >
          <div className=" w-full md:w-[35%] px-3 flex justify-center flex-col items-center">
            <div className=" w-full">
              <div className="  py-2 md:hidden ">
                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
                  <div className="">FLEXIBLE APY:</div>
                  <div className="flex gap-2 items-center">
                    2.10% <SlCalculator />
                  </div>
                </div>
                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff]">
                  <div className="">LOCKED APY:</div>
                  <div className="flex gap-2 items-center">
                    Up to 109.13% <SlCalculator />
                  </div>
                </div>

                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
                  <div className=" underline decoration-dotted underline-offset-2">
                    Total staked:
                  </div>
                  <div className="">20,338,796 6ense</div>
                </div>

                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
                  <div className=" ">Total staked:</div>
                  <div className="">12,462,228 6ense</div>
                </div>
              </div>
            </div>
            <div className="w-full capitalize text-sm font-normal text-[#6254ff]">
              <div className="capitalize text-sm font-normal text-[#6254ff]  cursor-pointer">
                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
                  <div className=" underline decoration-dotted underline-offset-2">
                    Average lock duration:
                  </div>
                  <div className="">44 weeks</div>
                </div>
                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff]">
                  <div className="underline decoration-dotted underline-offset-2 ">
                    Performance Fee
                  </div>
                  <div className="">0~2%</div>
                </div>
                <Link className="flex justify-start items-center gap-x-1 hover:underline ">
                  View Contract <TiLink size={20} />
                </Link>
                <Link className="flex justify-start items-center gap-x-1 hover:underline ">
                  Add to Wallet <TiLink size={20} />
                </Link>
              </div>
              <div className="flex justify-start items-center py-1">
                <button className="border-2 border-[#6254ff]  capitalize text-sm font-normal text-[#6254ff] flex justify-center items-center gap-2 rounded-xl py-[2px] px-2">
                  <FaArrowRotateRight size={12} /> auto
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" flex w-full items-center gap-4 flex-wrap sm:flex-nowrap">
              <div
                className={`border-2 w-full py-4 px-2 sm:px-4 rounded-xl border-gray-300 ${
                  isDarkMode ? "contentBorder" : ""
                }`}
              >
                <div className="  py-2">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-xs font-normal text-[#6254ff]  uppercase">
                      6ense
                    </div>
                    <div className="text-xs font-normal uppercase">earned</div>
                  </div>

                  <div className="flex justify-between gap-6 items-center font-semibold text-gray-500">
                    <div className="">
                      <div className=" uppercase ">0.0000</div>
                      <div className=" uppercase text-xs font-extrabold ">
                        0.0 usd
                      </div>
                    </div>
                    <div className="  px-2">
                      <p className=" text-end text-sm font-normal  underline decoration-dotted underline-offset-2">
                        0.1% unstaking fee if withdrawn within 72h
                      </p>
                      <p className="text-sm font-semibold text-end">0</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className=" w-full py-4 px-2 sm:px-4 border-2 rounded-xl border-gray-300">
                <div className="text-xs font-normal text-blue-500  uppercase">
                  YIELD BOOSTER
                </div>

                <div className="flex justify-between items-center font-semibold text-gray-500">
                  <div className=" uppercase ">
                    <p className="text-base text-gray-950">Up to 2x...</p>
                    <p className=" text-xs font-light text-gray-800 text-wrap max-w-40 capitalize">
                      Lock 6ENSE to activate yield booster
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    <HarvestButton
                      name={" Go to Vault"}
                      color={"text-white "}
                      bgColor={"bg-gray-900"}
                    />
                  </div>
                </div>

                <div className="  py-3 flex justify-center">
                  <button className="w-full py-2 border-2 border-violet-600 text-base font-semibold px-4 rounded-xl ease-in duration-200 hover:bg-violet-100">
                    Manage Nft Boosting
                  </button>
                </div>
              </div> */}
              <div className=" w-full">
                <div
                  className={` border-2 p-4 rounded-xl border-gray-300  ${
                    isDarkMode ? "contentBorder" : ""
                  }`}
                >
                  <div className="flex justify-start items-center gap-2 pb-2">
                    <div className="text-xs font-normal text-[#6254ff]  uppercase">
                      6ense LP
                    </div>
                    <div className="text-xs font-normal uppercase">STAKED</div>
                  </div>
                  <EnableButton
                    name={"Enable"}
                    bgColor={"bg-gray-800"}
                    bgHover={"bg-gray-700"}
                    color={"text-white"}
                    colorHover={"hover:text-gray-100"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

// FormListCard.propTypes = {

// };

export default VaultList;
