import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

const Latest = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`"w-full flex justify-center py-10 px-4" ${
        isDarkMode ? "  darkModeFistColor" : ""
      }`}
    >
      <div className="max-w-[1200px] w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 w-full ">
          <div className="px-1 sm:px-2">
            <h2 className=" text-lg font-semibold text-[#6254ff] pb-2 capitalize">
              How to take part
            </h2>
            <h2 className=" text-lg font-semibold  pb-2 capitalize">
              Before Sale:
            </h2>
            <ul className=" list-disc pl-4 text-sm">
              <li className=" py-1 ">Read $6ENSE tokenomics.</li>
              <li className=" py-1">Get $MATIC to join the presale.</li>
            </ul>
            <h2 className=" text-lg font-semibold  pb-2 capitalize">
              During Sale:
            </h2>
            <ul className=" list-disc pl-4 text-sm">
              <li className=" py-1 ">
                While the sale is live, contribute with MATIC.
              </li>
            </ul>
            <h2 className=" text-lg font-semibold  pb-2 capitalize">
              After Sale:
            </h2>
            <ul className=" list-disc pl-4 text-sm">
              <li className=" py-1 ">Claim the tokens you purchased.</li>
              <li className=" py-1">
                Token will be transferred to your wallet.
              </li>
            </ul>
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
              <h2 className=" text-lg font-semibold  pb-2 capitalize">
                Want to run your launchpad with us?
              </h2>
              <div className=" list-disc py-3 text-sm">
                <p className="">
                  Please contact us if you want to launch your project with
                  Bored 6ENSE City, Cronos Chain’s first community owned DEX &
                  AMM, to bring your token directly to the most active and
                  rapidly growing community on Cronos Chain.
                </p>
              </div>
              <div className="py-3">
                <button className=" bg-[#0f0f0f] text-white text-base font-medium py-3 px-5 rounded-lg hover:bg-[#6254ff] transition duration-300">
                  Apply to launch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
