import { TiLink } from "react-icons/ti";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import EnableButton from "../../../components/Earn/EnableButton";
import { SlCalculator } from "react-icons/sl";
import { ThemeContext } from "../../../ThemeContext";

const VaultCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [detail, setDetail] = useState(false);
  const handleSet = () => {
    setDetail(!detail);
  };
  return (
    <div
      className={`rounded-2xl border-x-[1px] border-t-[1px] border-b-[3px]  overflow-hidden border-gray-400 max-w-[360px] w-full h-auto ${
        isDarkMode ? "darkModeColor" : ""
      }`}
    >
      <div
        className={` flex justify-between bg-gray-300 p-5 relative overflow-hidden  ${
          isDarkMode ? "darkModeSecondColor" : ""
        } `}
      >
        <div className="">
          <p className="font-bold py-1 text-xl">Stake 6ENSE </p>
          <p className="">Stake, Earn – And more!</p>
        </div>
        <div className="  relative">
          <div className="bg-blue-950 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center border-[1px] border-gray-600  text-base font-bold">
            6ense
          </div>
        </div>
      </div>
      <div className="px-4 pt-6 pb-3 w-full ">
        <div
          className={` border-2  px-4 py-4 rounded-xl   ${
            isDarkMode
              ? "darkModeSecondColor contentBorder"
              : "bg-gray-200 border-gray-300"
          }`}
        >
          <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
            <div className="">FLEXIBLE APY:</div>
            <div className="flex gap-2 items-center">
              2.10% <SlCalculator />
            </div>
          </div>
          <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
            <div className="">LOCKED APY:</div>
            <div className="flex items-center gap-2">
              Up to 109.13% <SlCalculator />
            </div>
          </div>
        </div>
        <div className="  pt-5 px-2 flex justify-between items-center">
          <p className=" text-sm font-normal  underline decoration-dotted underline-offset-2">
            0.1% unstaking fee if withdrawn within 72h
          </p>
          <p className="text-sm font-semibold">0</p>
        </div>

        {/* <div className="  py-2">
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
        <div className="  py-3 flex justify-center">
          <button className="w-full py-2 border-2 border-violet-600 text-base font-semibold px-4 rounded-xl ease-in duration-200 hover:bg-violet-100">
            Manage Nft Boosting
          </button>
        </div> */}

        <div className=" py-5">
          <div className="flex justify-start items-center gap-2">
            <div className="text-xs font-normal text-[#6254ff]  uppercase">
              6ense
            </div>
            <div className="text-xs font-normal uppercase">STAKED</div>
          </div>
          <div className="  pt-2 flex justify-center">
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
      <div
        className={` px-4 py-4 w-full  border-t-[1px]  flex justify-between items-center  ${
          isDarkMode ? "contentBorder" : "border-gray-300"
        }`}
      >
        <div className="border-2 border-[#6254ff]  capitalize text-sm font-normal text-[#6254ff] flex justify-center items-center gap-2 rounded-xl py-[2px] px-2">
          <FaArrowRotateRight size={12} /> auto
        </div>
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
            <div className=" underline decoration-dotted underline-offset-2">
              Total staked:
            </div>
            <div className="">20,338,796 6ENSE</div>
          </div>
          <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
            <div className=" ">Total staked:</div>
            <div className="">12,462,228 6ENSE</div>
          </div>
          <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
            <div className=" underline decoration-dotted underline-offset-2">
              Average lock duration:
            </div>
            <div className="">44 weeks</div>
          </div>
          <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
            <div className="underline decoration-dotted underline-offset-2 ">
              Performance Fee
            </div>
            <div className="">0~2%</div>
          </div>
          <div className="capitalize text-sm font-normal text-[#6254ff]  cursor-pointer">
            <Link className="flex justify-end items-center gap-x-1 hover:underline ">
              View Contract <TiLink size={20} />
            </Link>
            <Link className="flex justify-end items-center gap-x-1 hover:underline ">
              Add to Wallet <TiLink size={20} />
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

// FarmCard.propTypes = {

// };

export default VaultCard;
