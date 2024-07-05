// import PropTypes from 'prop-types';
import { TiLink } from "react-icons/ti";
import EnableButton from "../../../components/Earn/EnableButton";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

const StakingFinishCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const nftRarities = [
    {
      id: 1,
      title: "Rebel Punk Staking",
      link: "https://cronoscan.com/address/0x0d15BF6010e0Bf4406c0c14F567801DCdD2D3BFc",
      rewardsPerDay: "0 WARZ",
      totalStaked: "27 RBL",
      ownedNFTs: "0 NFTs",
      stakedNFTs: "0 NFTs",
      rewardsToken: "WARZ",
    },
    // {
    //   id: 2,
    //   title: "CrofamLadiesVIP Staking",
    //   link: "https://cronoscan.com/address/0x306500486549c8bBa28dd2cC3F789E5d431e25Dc",
    //   rewardsPerDay: "5 WCRO",
    //   totalStaked: "2 CROLADIESVIP",
    //   ownedNFTs: "0 NFTs",
    //   stakedNFTs: "0 NFTs",
    //   rewardsToken: "WCRO",
    // },
    // {
    //   id: 3,
    //   title: "TiltedDabbersOG Staking",
    //   link: "https://cronoscan.com/address/0x888b74A7f9C253FA6daD4f46ECafF49e2C9B524b",
    //   rewardsPerDay: "1 6ENSE",
    //   totalStaked: "7 TDOG",
    //   ownedNFTs: "0 NFTs",
    //   stakedNFTs: "0 NFTs",
    //   rewardsToken: "6ense",
    // },
  ];
  return (
    <div className=" w-full py-3">
      {nftRarities.map((rarity, index) => (
        <div
          key={index}
          className={`w-full border-x-[1px] border-t-[1px] border-b-[3px] border-gray-400 rounded-xl  mb-7  overflow-hidden ${
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
              className="flex items-center justify-center text-[#6254ff]  "
            >
              <div className="text-xl capitalize font-medium">
                {rarity.title}
              </div>
              <TiLink size={20} />
            </a>
          </div>

          <div className="w-full mx-auto p-2 md:p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-5">
              <div
                className={`bg-white p-2 rounded-lg  border-2  ${
                  isDarkMode
                    ? "darkModeSecondColor contentBorder"
                    : "text-gray-700"
                }`}
              >
                <div className="flex items-center p-1 justify-center text-gray-700">
                  <h2 className="text-xl font-medium  text-[#6254ff] ">
                    Rewards Per Day
                  </h2>
                </div>
                <div className="flex items-center p-1 justify-center text-gray-700">
                  <p className="text-xl font-medium uppercase">
                    {rarity.rewardsPerDay}
                  </p>
                </div>
              </div>
              <div
                className={`bg-white p-2 rounded-lg  border-2  ${
                  isDarkMode
                    ? "darkModeSecondColor contentBorder"
                    : "text-gray-700"
                }`}
              >
                <div className="flex items-center p-1 justify-center text-gray-700">
                  <h2 className="text-xl font-medium  text-[#6254ff] ">
                    Total Staked
                  </h2>
                </div>
                <div className="flex items-center p-1 justify-center text-gray-700">
                  <p className="text-xl font-medium uppercase">
                    {rarity.totalStaked}
                  </p>
                </div>
              </div>

              <div
                className={`bg-white p-2 rounded-lg  border-2  ${
                  isDarkMode
                    ? "darkModeSecondColor contentBorder"
                    : "text-gray-700"
                }`}
              >
                <div className="flex items-center p-2 justify-center text-gray-700">
                  <h2 className="text-xl font-medium  text-[#6254ff] ">
                    {rarity.ownedNFTs}
                  </h2>
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
                <div className="py-4">
                  <div className="w-full relative">
                    <div className="flex justify-end  items-center">
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

              <div
                className={`bg-white p-2 rounded-lg  border-2  ${
                  isDarkMode
                    ? "darkModeSecondColor contentBorder"
                    : "text-gray-700"
                }`}
              >
                <div className="flex items-center p-2 justify-center text-gray-700">
                  <h2 className="text-xl font-medium  text-[#6254ff] ">
                    {rarity.rewardsToken}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-1 p-1 py-3 px-4 md:px-10 justify-between text-gray-700">
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
                <div className="py-4">
                  <div className="w-full relative">
                    <div className="flex justify-end  items-center">
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

StakingFinishCard.propTypes = {};

export default StakingFinishCard;
