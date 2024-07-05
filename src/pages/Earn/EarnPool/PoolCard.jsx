import { TiLink } from "react-icons/ti";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import HarvestButton from "../../../components/Earn/HarvestButton";
import EnableButton from "../../../components/Earn/EnableButton";
import { ThemeContext } from "../../../ThemeContext";

const PoolCard = () => {
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
        className={` flex justify-between bg-gray-300 p-5 relative overflow-hidden ${
          isDarkMode ? "darkModeSecondColor" : ""
        } `}
      >
        <div className="">
          <p className="font-bold py-1 text-xl">6ENSE Earn</p>
          <p className="">Stake COINS</p>
        </div>
        <div className="  relative">
          <div className="bg-blue-950 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center border-[1px] border-gray-600  text-base font-bold">
            6ense
          </div>
        </div>
        <div className="uppercase text-sm bg-[#1e1e1e] absolute w-full text-center right-0 top-7 text-blue-50 font-bold py-[6px] rotate-45 translate-x-[142px]">
          Finished
        </div>
      </div>
      <div className="px-4 py-5 w-full ">
        <div className="  py-4 ">
          <div className="flex justify-between items-center">
            <div className=" uppercase text-sm font-normal">apr :</div>
            <div className="flex justify-end items-center gap-2">
              {/* <div className="text-sm font-normal text-green-500 capitalize">
                Up to 105.55%
              </div> */}
              <div className="text-sm font-normal capitalize">52.78%</div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center">
            <div className=" uppercase text-sm font-normal">earn :</div>
            <div className="flex justify-end items-center capitalize text-sm font-semibold">
              6ense + fees
            </div>
          </div> */}
        </div>
        <div className="  py-4">
          <div className="flex justify-start items-center gap-2">
            <div className="text-xs font-normal text-[#6254ff]  uppercase">
              6ense
            </div>
            <div className="text-xs font-normal uppercase">earned</div>
          </div>

          <div className="flex justify-between items-center font-semibold text-gray-500">
            <div className="">
              <div className=" uppercase ">0.0000</div>
              <div className=" uppercase text-xs font-extrabold ">0.0</div>
            </div>
            <div className="flex justify-end items-center">
              <HarvestButton
                name={"Harvest"}
                color={"text-gray-500"}
                bgColor={"bg-gray-200"}
              />
            </div>
          </div>
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
        className={`px-4 py-5 w-full  border-t-[1px]  border-gray-300 flex justify-between items-center ${
          isDarkMode ? "contentBorder" : ""
        }`}
      >
        <div className="border-2 border-[#5c54bd] capitalize text-sm font-normal text-[#6254ff] flex justify-center items-center gap-2 rounded-xl py-[2px] px-2">
          <FaArrowRotateRight size={12} /> manual
        </div>
        <div
          className=" flex justify-center items-center gap-3 capitalize text-base font-medium text-[#6254ff] cursor-pointer"
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
            <div className="">APR:</div>
            <div className="">0.00%</div>
          </div>
          <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff] ">
            <div className="">Total staked:</div>
            <div className="">0 6ENSE</div>
          </div>
          <div className="capitalize text-sm font-normal text-[#6254ff] cursor-pointer">
            <Link className=" flex justify-end items-center gap-x-1 hover:underline">
              View Project Site
              <TiLink size={20} />
            </Link>
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

export default PoolCard;
