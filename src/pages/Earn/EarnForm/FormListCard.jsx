// import PropTypes from 'prop-types';
import { useContext, useState } from "react";

// import { SiSecurityscorecard } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa";
import { TiLink } from "react-icons/ti";
import { Link } from "react-router-dom";
import EnableButton from "../../../components/Earn/EnableButton";
import HarvestButton from "../../../components/Earn/HarvestButton";
import { ThemeContext } from "../../../ThemeContext";
import CoreIcon from "../../../components/Earn/CoreIcon";
import BoosterIcon from "../../../components/Earn/BoosterIcon";

const FormListCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [detail, setDetail] = useState(false);
  const handleSet = () => {
    setDetail(!detail);
  };
  return (
    <div
      className={`w-full border-x-[1px] border-t-[1px] border-b-[3px]  border-gray-300 rounded-xl overflow-hidden ${
        isDarkMode ? "darkModeColor" : ""
      }`}
    >
      <div
        className=" flex gap-x-2 px-2 justify-between items-center cursor-pointer"
        onClick={handleSet}
      >
        <div className=" w-full flex sm:gap-x-6 md:gap-x-8 lg:gap-x-10 py-1 justify-between items-center flex-wrap md:flex-nowrap ">
          <div className=" w-full flex justify-between gap-2 items-center pt-3 pb-4 ">
            <div className=" flex justify-start gap-2 flex-wrap items-center relative">
              <div className="bg-blue-950 text-white w-12 h-12 rounded-full flex justify-center items-center border-[1px] border-gray-600  text-xs font-bold">
                6ense
              </div>
              <p className=" font-medium  text-sm">6ENSE COINS</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-end flex-wrap items-center gap-2">
                <CoreIcon />

                <BoosterIcon />
              </div>
            </div>
          </div>
          {/* asdfgh */}
          <div className=" hidden w-full md:flex justify-between gap-2 items-center pt-3 pb-4 ">
            <div className="">
              <div className=" capitalize text-sm font-normal">earn </div>
              <div className=" capitalize text-sm font-semibold">0.0</div>
            </div>
            <div className="">
              <div className=" uppercase text-sm font-normal">apr </div>
              <div className="flex justify-end items-center gap-2">
                <div className="text-sm font-medium text-green-500 capitalize">
                  Up to 105.55%
                </div>
                <div className="text-sm font-normal capitalize">52.78%</div>
              </div>
            </div>
          </div>
          {/* asdfgh */}
          <div className="  hidden w-[70%] md:flex justify-between gap-2 items-center pt-3 pb-4 ">
            <div className="">
              <div className=" capitalize text-xs font-normal">Liquidity</div>
              <div className=" capitalize text-xs font-semibold">$23,939</div>
            </div>
            <div className="">
              <div className=" capitalize text-xs font-normal">Multiplier</div>
              <div className="flex justify-end items-center gap-2">
                <div className="text-xs font-normal text-green-500 capitalize">
                  10X
                </div>
                <div className="text-sm font-normal capitalize">?</div>
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
          className={`bg-gray-100 border-t-2 border-gray-300 py-4 px-1 sm:px-4 w-full gap-4 flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap ${
            isDarkMode ? "darkModeSecondColor contentBorder" : ""
          }`}
        >
          <div className=" w-full md:w-[35%] flex justify-center flex-col items-center">
            <div className=" w-full">
              <div className="  py-2 md:hidden ">
                <div className="flex justify-between items-center">
                  <div className=" uppercase text-sm font-normal">apr :</div>
                  <div className="flex justify-end items-center gap-2 ">
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
                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff]">
                  <div className="">Total Liquidity:</div>
                  <div className="">$23,556</div>
                </div>
                <div className=" flex justify-between items-center gap-3 capitalize text-sm font-medium text-[#6254ff]">
                  <div className="">Multiplier</div>
                  <div className=""> 10X</div>
                </div>
              </div>
            </div>
            <div className="w-full capitalize text-sm font-normal text-[#6254ff]">
              <Link className=" flex md:justify-center items-center gap-x-1 hover:underline">
                Get 6ENSE-CRO LP <TiLink size={20} />
              </Link>
              <Link className="flex  md:justify-center items-center gap-x-1 hover:underline ">
                View Contract <TiLink size={20} />
              </Link>
            </div>
          </div>
          <div className=" w-full">
            <div className=" flex w-full items-center gap-4 flex-wrap sm:flex-nowrap">
              <div
                className={`border-2 w-full py-4 px-2 sm:px-4 rounded-xl border-gray-300 ${
                  isDarkMode ? " contentBorder" : ""
                }`}
              >
                <div className="  py-2">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-xs font-normal text-[#6254ff]  uppercase">
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
              </div>
              <div
                className={` w-full py-4 px-2 sm:px-4 border-2 rounded-xl border-gray-300 ${
                  isDarkMode ? "darkModeSecondColor contentBorder" : ""
                }`}
              >
                <div className="text-xs font-normal text-[#6254ff]  uppercase">
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
                  <button className="w-full py-2 border-2 text-[#6254ff] text-base font-semibold px-4 rounded-xl ease-in duration-200 hover:bg-violet-100">
                    Manage Nft Boosting
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div
                className={`border-2 p-4 rounded-xl border-gray-300 ${
                  isDarkMode ? " contentBorder" : ""
                }`}
              >
                <div className="flex justify-start items-center gap-2 pb-1">
                  <div className="text-xs font-normal text-[#6254ff]  uppercase">
                    6ense LP
                  </div>
                  <div className="text-xs font-normal uppercase">STAKED</div>
                </div>
                <EnableButton
                  name={"Connect Wallet"}
                  bgColor={"bg-gray-800"}
                  bgHover={"bg-gray-700"}
                  color={"text-white"}
                  colorHover={"hover:text-gray-100"}
                />
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

export default FormListCard;
