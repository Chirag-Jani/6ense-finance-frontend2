import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

const Votting = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className=" w-full py-3">
      <div
        className={`w-full border-[1px]  mb-7  border-gray-300 rounded-xl overflow-hidden ${
          isDarkMode ? "darkModeColor" : "bg-gray-100"
        }`}
      >
        <div
          className={` w-full px-4 pt-7 pb-6 flex justify-center items-center gap-3 bg-gray-200 text-[#6254ff]  ${
            isDarkMode ? "darkModeSecondColor contentBorder" : "text-gray-700"
          }`}
        >
          <div className="text-xl capitalize font-medium text-[#6254ff] ">
            Governance Overview
          </div>
        </div>

        <div className="w-full mx-auto p-2 md:p-5">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-x-2 gap-y-5">
            {/* sdfghjk */}
            <div
              className={`bg-white flex justify-between flex-wrap sm:flex-nowrap items-center py-2 px-4 rounded-lg  border-[1px] border-gray-300 ${
                isDarkMode
                  ? "darkModeSecondColor contentBorder"
                  : "text-gray-700"
              }`}
            >
              <div className="  max-w-[100%]  pr-8">
                <h1 className="text-xl">1,632,278</h1>
                <p className="text-sm  text-nowrap"> COMP Remaining</p>
              </div>

              <div className=" w-full pb-3 ">
                <div className=" flex justify-end items-center py-2">
                  <span className="text-base"> view</span>
                </div>

                <div className=" w-full flex overflow-hidden justify-end h-2 rounded-full w-200 border-[1px] border-[#6254ff] bg-[#b5b0ee]">
                  <div className=" bg-teal-500 w-[60%] text-center font-semibold text-blck text-[5px]  h-full">
                    {" "}
                    60%
                  </div>
                </div>
              </div>
            </div>

            {/* asdfghjkl */}
            <div className="  flex items-center gap-x-4 gap-y-2 ">
              <div
                className={`w-full flex justify-center items-center bg-white p-2 rounded-lg  border-[1px] border-gray-300 ${
                  isDarkMode
                    ? "darkModeSecondColor contentBorder"
                    : "text-gray-700"
                }`}
              >
                <div className="py-2">
                  <h1 className="text-xl text-center">2,162,247</h1>
                  <p className="text-sm text-center">Votes Delegated</p>
                </div>
              </div>

              {/* sdfghjkl; */}

              <div
                className={` w-full flex justify-center items-center bg-white p-2 rounded-lg  border-[1px] border-gray-300 ${
                  isDarkMode
                    ? "darkModeSecondColor contentBorder"
                    : "text-gray-700"
                }`}
              >
                <div className="py-2">
                  <h1 className="text-xl text-center">5079</h1>
                  <p className="text-sm text-center">Voting Addresses</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div
              className={`bg-white  items-center py-2  rounded-lg  border-[1px] border-gray-300 ${
                isDarkMode
                  ? "darkModeSecondColor contentBorder"
                  : "text-gray-700"
              }`}
            >
              <div
                className={`"  full border-b-[1px] px-4 border-gray-300  pr-8" ${
                  isDarkMode ? " contentBorder" : "text-gray-700"
                } `}
              >
                <div className="text-xl capitalize font-medium text-[#6254ff] py-2 ">
                  Governance Overview
                </div>
              </div>

              <div className=" w-full pt-2 pb-6 px-4 ">
                <div className="py-2">
                  <div className="text-xl font-bold py-3">
                    Initialize 6ENSE on Optimism
                  </div>
                  <div className="flex items-center gap-6 ">
                    <button className=" text-white px-3 py-1 rounded-full text-sm">
                      Review
                    </button>
                    <div className=" text-sm flex items-center">
                      <span>257</span>
                      <span className="mx-1">•</span>
                      <span>1 day, 2 hrs until voting</span>
                    </div>
                  </div>
                </div>
              </div>

              {[1].map((item, index) => (
                <div
                  className={` px-4 pt-5 pb-8 border-t-[1px] flex items-center flex-wrap lg:flex-nowrap ${
                    isDarkMode ? " contentBorder" : "text-gray-700"
                  }`}
                  key={index}
                >
                  <div className=" w-full">
                    <div className="text-xl font-semibold w-[270px] pb-4">
                      Interest Rate and Rewards Recommendation for WETH Comet on
                      BASE
                    </div>
                    <div className="flex items-center gap-6 ">
                      <div className=" bg-[#6254ff] text-white px-3 py-1 rounded-full text-sm">
                        Review
                      </div>
                      <div className=" text-sm text-[#6254ff] flex items-center">
                        <span>257</span>
                        <span className="mx-1">•</span>
                        <span>1 day, 2 hrs left</span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full">
                    <div className=" flex items-center gap-x-4">
                      <div className=" w-full flex overflow-hidden justify-end h-2 rounded-full w-200 border-[1px] my-4 border-[#6254ff] bg-[#b5b0ee]">
                        <div className=" bg-teal-500 w-[60%] text-center font-semibold text-blck text-[5px]  h-full">
                          {" "}
                          60%
                        </div>
                      </div>

                      <div className="">40k</div>
                    </div>

                    <div className=" flex items-center gap-x-4">
                      <div className=" w-full flex overflow-hidden justify-end h-2 rounded-full w-200 border-[1px] my-4 border-[#6254ff] bg-[#b5b0ee]">
                        <div className=" bg-teal-500 w-[90%] text-center font-semibold text-blck text-[5px]  h-full">
                          {" "}
                          90%
                        </div>
                      </div>
                      <div className="">OK</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* bottom border */}

              <div
                className={`"  full border-t-[1px] px-4 border-gray-300 py-4  pr-8" ${
                  isDarkMode ? " contentBorder" : "text-gray-700"
                } `}
              >
                <div className="text-xl capitalize text-center font-medium text-[#6254ff] py-2 ">
                  VIEW ALL PROPOSALS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// StakingCard.propTypes = {

// };

export default Votting;
