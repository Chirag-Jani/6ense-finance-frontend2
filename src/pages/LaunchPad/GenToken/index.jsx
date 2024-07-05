// import PropTypes from 'prop-types';

import { useContext } from "react";
import TopHeader from "../../../components/Global/TopHeader";
import LaunchNav from "../../../components/Launchpad/Launch-Nav";
// import LiveFinish from "../../../components/Earn/LiveFinish";
import { ThemeContext } from "../../../ThemeContext";

const GenToken = () => {
  const { isDarkMode } = useContext(ThemeContext);
  // const [live, setLive] = useState(true);
  // const handleLive = () => {
  //   setLive(true);
  // };
  // const handleFinish = () => {
  //   setLive(false);
  // };
  return (
    <div className=" w-full h-auto mx-auto">
      <LaunchNav />
      <TopHeader
        heading={"Tokenpad"}
        para={"Create new token with your own tokenomics."}
      />
      <div className="w-full flex justify-center py-2 px-2">
        <div className="max-w-[1200px] w-full flex justify-center border-b-2 border-gray-600 pb-3 pt-4">
          {/* <LiveFinish
            name={"Create"}
            sname={"Manage"}
            handleFinish={handleFinish}
            handleLive={handleLive}
            status={live}
          /> */}
        </div>
      </div>

      <div
        className={`"w-full flex justify-center py-2 px-4" ${
          isDarkMode ? "darkModeFistColor" : "text-gray-700"
        }`}
      >
        <div className="max-w-[1200px] w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 w-full ">
            <div className="px-1 sm:px-2">
              <form className=" w-full max-w-lg mx-auto">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Please configure your tokenomics
                </h2>

                <div className="mb-2">
                  <label className="block font-normal text-sm " htmlFor="name">
                    Token name
                  </label>
                  <input
                    className="w-full px-3 py-[6px] border bg-[#EEEAF4]  border-[#d5c3f1] rounded-md outline-[#7645d9]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="xxx token"
                  />
                </div>

                <div className="mb-2">
                  <label
                    className="block font-normal text-sm "
                    htmlFor="symbol"
                  >
                    Token symbol
                  </label>
                  <input
                    className="w-full px-3 py-[6px]  bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9]"
                    type="text"
                    id="symbol"
                    name="symbol"
                    placeholder="xxx"
                  />
                </div>

                <div className="mb-2">
                  <label
                    className="block font-normal text-sm "
                    htmlFor="TokenDecimal"
                  >
                    Token decimal
                  </label>
                  <input
                    className="w-full px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9] input-number-field"
                    type="number"
                    id="TokenDecimal"
                    name="TokenDecimal"
                  />
                </div>

                <div className="mb-2">
                  <label className="block font-normal text-sm " htmlFor="Token">
                    Token total supply
                  </label>
                  <input
                    className="w-full px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9] input-number-field"
                    type="number"
                    id="Token"
                    name="Token"
                  />
                </div>

                <div className="mb-2">
                  <label className="block font-normal text-sm " htmlFor="limit">
                    Max limit (Transfer / Hold)
                  </label>
                  <div className=" flex items-center gap-x-[6px] flex-nowrap">
                    <input
                      className="w-[50%] px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9] input-number-field"
                      type="number"
                      id="limit"
                      name="limit"
                    />
                    /
                    <input
                      className="w-[50%] px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9] input-number-field"
                      type="number"
                      id="limit"
                      name="limit"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="block font-normal text-sm " htmlFor="Tax">
                    Tax % (Buy / Sell / Transfer)
                  </label>
                  <div className="flex items-center gap-x-[6px]">
                    <input
                      className="w-full px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9] input-number-field"
                      type="number"
                      id="Tax"
                      name="Tax"
                    />
                    /
                    <input
                      className="w-full px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9] input-number-field"
                      type="number"
                      id="Tax"
                      name="Tax"
                    />
                    /
                    <input
                      className="w-full px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9] input-number-field"
                      type="number"
                      id="Tax"
                      name="Tax"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label
                    className="block font-normal text-sm "
                    htmlFor="wallet"
                  >
                    Marketing wallet
                  </label>
                  <input
                    className="w-full px-3 py-[6px] bg-[#EEEAF4] border border-[#d5c3f1] rounded-md outline-[#7645d9]"
                    type="text"
                    id="wallet"
                    name="wallet"
                    placeholder="0 x 123..."
                  />
                </div>

                <p className=" text-base font-medium text-black pb-4">
                  - Token creation fee 1000 6ENSE
                </p>

                <button className=" bg-[#0f0f0f] text-white text-sm font-medium py-2 px-5 rounded-lg hover:bg-[#6254ff] transition duration-300">
                  Deploy token
                </button>
              </form>
            </div>

            <div className="px-1 sm:px-2">
              <div className=" w-full max-w-lg mx-auto">
                <div className=" h-[180px]  px-10 pt-10 ">
                  <img src="" alt="" />
                  <div className="scene">
                    <div className="cube">
                      <div className="cube-face cube-face-front">6ENSE</div>
                      <div className="cube-face cube-face-back">6ENSE</div>
                      <div className="cube-face cube-face-left">6ENSE</div>
                      <div className="cube-face cube-face-right">6ENSE</div>
                      <div className="cube-face cube-face-top">6ENSE</div>
                      <div className="cube-face cube-face-bottom">6ENSE</div>
                    </div>
                  </div>
                </div>
                <h2 className=" text-base font-semibold text-black pb-2 capitalize">
                  Available tokenomics:
                </h2>
                <ul className=" list-disc pl-4 text-sm">
                  <li className=" py-1 ">
                    Buy / sell / transfer tax. <br /> Tax can not be more than
                    30%.
                  </li>
                  <li className=" py-1">
                    Max transfer amount. <br />
                    It should be more than 0.01% of total supply.
                  </li>
                  <li className=" py-1">
                    Max hold amount. <br /> It should be more than 0.02% of
                    total supply.
                  </li>
                  <li className=" py-1">Marketing wallet to receive tax.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// TokenPad.propTypes = {

// };

export default GenToken;
