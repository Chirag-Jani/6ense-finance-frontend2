import { TiLink } from "react-icons/ti";
import EnableButton from "../../../components/Earn/EnableButton";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

const RedeemLive = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const data = [
    {
      title: "Weights Per Rarity",
      items: [
        { label: "6ENSE GOD", value: "2 X" },
        { label: "6ENSE KING", value: "1.75 X" },
        { label: "6ENSE PRINCE", value: "1.5 X" },
        { label: "6ENSE MINISTER", value: "1.25 X" },
        { label: "6ENSE CITIZEN", value: "1 X" },
        { label: "TOTAL REWARDS PER DAY", value: "500 6ENSE" },
      ],
    },
  ];
  const dataR = [
    {
      title: "Total Staked",
      items: [
        { label: "6ENSE GOD", value: "2" },
        { label: "6ENSE KING", value: "3" },
        { label: "6ENSE PRINCE", value: "61" },
        { label: "6ENSE MINISTER", value: "663" },
        { label: "6ENSE CITIZEN", value: "1423" },
        { label: "TOTAL REWARDS PER DAY", value: "1586" },
      ],
    },
  ];

  const Owned = [
    {
      ensetitle: "6ENSE GOD",
      ense: "No NFT with this rarity.",
    },
    // {
    //   ensetitle: "6ENSE KING",
    //   ense: "No NFT with this rarity.",
    // },
    // {
    //   ensetitle: "6ENSE PRINCE",
    //   ense: "No NFT with this rarity.",
    // },
    // {
    //   ensetitle: "6ENSE MINISTER",
    //   ense: "No NFT with this rarity.",
    // },
    // {
    //   ensetitle: "6ENSE CITIZEN",
    //   ense: "No NFT with this rarity.",
    // },
  ];

  return (
    <div className=" w-full py-3">
      <div
        className={`w-full border-x-[1px] border-t-[1px] border-b-[3px] mb-7  border-gray-300 rounded-xl overflow-hidden ${
          isDarkMode ? "darkModeColor" : ""
        }`}
      >
        <div
          className={` w-full px-4 pt-7 pb-6 bg-gray-200   ${
            isDarkMode ? "darkModeSecondColor contentBorder" : "text-gray-700"
          }`}
        >
          <a
            href=""
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center text-[#6254ff] "
          >
            <div className="text-xl capitalize font-medium">
              Wicked Azz Pawnz Staking
            </div>
            <TiLink size={20} />
          </a>
        </div>

        <div className="w-full mx-auto p-2 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-5">
            <div
              className={`bg-white p-2 rounded-lg  border-[1px] border-gray-300 ${
                isDarkMode
                  ? "darkModeSecondColor contentBorder"
                  : "text-gray-700"
              }`}
            >
              <div className="">
                {data.map((section, index) => (
                  <div key={index} className="">
                    <div className="flex items-center p-2 justify-center text-gray-700">
                      <div className="text-xl font-medium  text-[#6254ff]">
                        {section.title}
                      </div>
                    </div>
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-[2px]"
                      >
                        <div className="text-sm text-gray-500">
                          {item.label}
                        </div>
                        <div className="text-base font-medium ">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`bg-white p-2 rounded-lg  border-[1px] border-gray-300 ${
                isDarkMode
                  ? "darkModeSecondColor contentBorder"
                  : "text-gray-700"
              }`}
            >
              <div className="">
                {dataR.map((section, index) => (
                  <div key={index} className="">
                    <div className="flex items-center p-2 justify-center text-gray-700">
                      <div className="text-xl font-medium  text-[#6254ff]">
                        {section.title}
                      </div>
                    </div>
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-[2px]"
                      >
                        <div className="text-sm text-gray-500">
                          {item.label}
                        </div>
                        <div className="text-base font-medium ">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`bg-white p-2 rounded-lg  border-[1px] border-gray-300 ${
                isDarkMode
                  ? "darkModeSecondColor contentBorder"
                  : "text-gray-700"
              }`}
            >
              <div className="flex items-center p-2 justify-center text-gray-700">
                <div className="text-xl font-medium  text-[#6254ff]">
                  You Owned 0 NFTs
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 py-3 px-4 md:px-10 justify-between text-gray-700">
                <div className="">
                  <EnableButton
                    name={"Approve"}
                    bgColor={"bg-gray-800"}
                    bgHover={"bg-gray-700"}
                    color={"text-white"}
                    colorHover={"hover:text-gray-100"}
                  />
                </div>
                <div className="">
                  <EnableButton
                    name={"Stake 0 NFTs"}
                    bgColor={"bg-gray-200"}
                    bgHover={"bg-gray-300"}
                    color={"text-gray-600"}
                    colorHover={"hover:text-gray-800"}
                  />
                </div>
              </div>
              {Owned.map((item, index) => (
                <div className="" key={index}>
                  <div className="py-4 ">
                    <div className="w-full relative">
                      <div className="flex justify-between pl-5  items-center">
                        <h2
                          className={`text-xl font-medium z-10 text-center  bg-white border-gray-700  ${
                            isDarkMode
                              ? "darkModeSecondColor contentBorder"
                              : "text-gray-700"
                          }`}
                        >
                          <button className=" text-blue-600 rounded-md text-base uppercase px-3">
                            {item.ensetitle}
                          </button>
                        </h2>
                        <h2
                          className={`text-xl font-medium z-10 text-center pl-3  bg-white border-gray-700  ${
                            isDarkMode
                              ? "darkModeSecondColor contentBorder"
                              : "text-gray-700"
                          }`}
                        >
                          <button className="border border-gray-400 text-gray-500 rounded-md text-xs py-1 px-3">
                            Deselect All
                          </button>
                        </h2>
                      </div>
                      <hr
                        className={` absolute  top-[15px] w-full border border-gray-300 ${
                          isDarkMode ? " contentBorder" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className=" flex justify-center items-center py-7">
                    <p className="text-lg font-normal">
                      No NFT with this collection.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`bg-white p-2 rounded-lg  border-[1px] border-gray-300 ${
                isDarkMode
                  ? "darkModeSecondColor contentBorder"
                  : "text-gray-700"
              }`}
            >
              <div className="flex items-center p-2 justify-center text-gray-700">
                <div className="text-xl font-medium  text-[#6254ff]">
                  You Owned 0 NFTs
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 py-3 px-4 md:px-10 justify-between text-gray-700">
                <div className="">
                  <EnableButton
                    name={"Harvest 0 STAR"}
                    bgColor={"bg-gray-200"}
                    bgHover={"bg-gray-300"}
                    color={"text-gray-600"}
                    colorHover={"hover:text-gray-800"}
                  />
                </div>
                <div className="">
                  <EnableButton
                    name={"Unstake 0 NFTs"}
                    bgColor={"bg-gray-200"}
                    bgHover={"bg-gray-300"}
                    color={"text-gray-600"}
                    colorHover={"hover:text-gray-800"}
                  />
                </div>
              </div>
              {Owned.map((item, index) => (
                <div className="" key={index}>
                  <div className="py-4 ">
                    <div className="w-full relative">
                      <div className="flex justify-between pl-5  items-center">
                        <h2
                          className={`text-xl font-medium z-10 text-center  bg-white   ${
                            isDarkMode
                              ? "darkModeSecondColor contentBorder"
                              : "text-gray-700"
                          }`}
                        >
                          <button className=" text-blue-600 rounded-md text-base uppercase px-3">
                            {item.ensetitle}
                          </button>
                        </h2>
                        <h2
                          className={`text-xl font-medium z-10 text-center pl-3  bg-white   ${
                            isDarkMode
                              ? "darkModeSecondColor contentBorder"
                              : "text-gray-700"
                          }`}
                        >
                          <button className="border-[1px] border-gray-400 text-gray-500 rounded-md text-xs py-1 px-3">
                            Deselect All
                          </button>
                        </h2>
                      </div>
                      <hr
                        className={` absolute  top-[15px] w-full border border-gray-300  ${
                          isDarkMode
                            ? "darkModeSecondColor contentBorder"
                            : "text-gray-700"
                        }`}
                      />
                    </div>
                  </div>

                  <div className=" flex justify-center items-center py-7">
                    <p className="text-lg font-normal">
                      No NFT with this collection.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// StakingCard.propTypes = {

// };

export default RedeemLive;
