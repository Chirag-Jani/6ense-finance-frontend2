import { BiSolidSelectMultiple } from "react-icons/bi";
import { LuPlane } from "react-icons/lu";
import { TiLink } from "react-icons/ti";

import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import HarvestButton from "../../../components/Earn/HarvestButton";
import EnableButton from "../../../components/Earn/EnableButton";
import { ThemeContext } from "../../../ThemeContext";
import CoreIcon from "../../../components/Earn/CoreIcon";
import BoosterIcon from "../../../components/Earn/BoosterIcon";

const StakCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [detail, setDetail] = useState(false);
  const handleSet = () => {
    setDetail(!detail);
  };
  return (
    <div className={`rounded-2xl border-x-[1px] border-t-[1px] border-b-[3px]  border-gray-400 max-w-[380px] w-full h-auto ${
      isDarkMode ? "darkModeColor" : ""
    }`}>
      <div className="px-4 py-5 w-full ">
        <div className=" flex justify-between pb-6 ">
          <div className="  relative">
            <div className="bg-blue-950 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center border-[1px] border-gray-600  text-base font-bold">
              6ense
            </div>
          </div>
          <div className="">
            <p className=" text-right font-medium py-1 text-base">
              6ENSE COINS
            </p>
            <div className="flex justify-end flex-wrap items-center gap-2">
              <CoreIcon/>
              <BoosterIcon/>
              <div className="flex justify-end items-center gap-3 rounded-xl bg-[#6254ff] border-[1px] border-blue-600 capitalize px-2 py-[2px] text-xs font-medium">
                10X
              </div>
            </div>
          </div>
        </div>
        <div className="  py-2 ">
          <div className="flex justify-between items-center">
            <div className=" uppercase text-sm font-normal">apr :</div>
            <div className="flex justify-end items-center gap-2">
              <div className="text-sm font-normal text-green-500 capitalize">
                Up to 105.55%
              </div>
              <div className="text-sm font-normal capitalize">52.78%</div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className=" uppercase text-sm font-normal">earn :</div>
            <div className="flex justify-end items-center capitalize text-sm font-semibold">
              6ense + fees
            </div>
          </div>
        </div>
        <div className="  py-2">
          <div className="flex justify-start items-center gap-2">
            <div className="text-xs font-normal text-blue-500  uppercase">
              6ense
            </div>
            <div className="text-xs font-normal uppercase">earned</div>
          </div>

          <div className="flex justify-between items-center font-semibold text-gray-500">
            <div className=" uppercase ">0.0000</div>
            <div className="flex justify-end items-center">
              <HarvestButton
                name={"Harvest"}
                color={"text-gray-500"}
                bgColor={"bg-gray-200"}
              />
            </div>
          </div>
        </div>

        <div className="  py-2">
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
        </div>
        {/* <div className="  py-3 flex justify-center">
          <button className="w-full py-2 border-2 border-violet-600 text-base font-semibold px-4 rounded-xl ease-in duration-200 hover:bg-violet-100">
            Manage Nft Boosting
          </button>
        </div> */}

        <div className="flex justify-start items-center gap-2">
          <div className="text-xs font-normal text-blue-500  uppercase">
            6ense LP
          </div>
          <div className="text-xs font-normal uppercase">STAKED</div>
        </div>
        <div className="  pt-2 flex justify-center">
          <EnableButton
            name={"Connect Wallet"}
            bgColor={"bg-gray-800"}
            bgHover={"bg-gray-700"}
            color={"text-white"}
            colorHover={"hover:text-gray-100"}
          />
        </div>
      </div>
      <div className="px-4 py-5 w-full  border-t-[1px] border-gray-300 ">
        <div
          className=" flex justify-center items-center gap-3 capitalize text-base font-medium text-[#6254ff]  cursor-pointer"
          onClick={handleSet}
        >
          {detail ? "hide" : "details"}
          {detail ? (
            <FaAngleDown rotate={100} style={{ transform: "rotate(180deg)" }} />
          ) : (
            <FaAngleDown />
          )}
        </div>
      </div>
      {detail ? (
        <div className="px-5 pt-2 pb-5 w-full">
          <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
            <div className="">Total Liquidity:</div>
            <div className="">$23,556</div>
          </div>
          <div className="capitalize text-sm font-normal text-[#6254ff]   cursor-pointer">
            <Link className=" flex items-center gap-x-1 hover:underline">
              Get 6ENSE-CRO LP <TiLink size={20} />
            </Link>
            <Link className="flex items-center gap-x-1 hover:underline ">
              View Contract <TiLink size={20} />
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StakCard;
