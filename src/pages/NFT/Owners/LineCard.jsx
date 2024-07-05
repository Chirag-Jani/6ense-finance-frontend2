// import PropTypes from 'prop-types';
import { TiLink } from "react-icons/ti";
import { ThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

const LineCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const nftRarities = [
    { title: "6ENSE GOD", description: "No NFT with this rarity." },
    { title: "6ENSE KING", description: "No NFT with this rarity." },
    // { title: "6ENSE PRINCE", description: "No NFT with this rarity." },
    // { title: "6ENSE MINISTER", description: "No NFT with this rarity." },
    // { title: "6ENSE CITIZEN", description: "No NFT with this rarity." },
  ];
  return (
    <div className=" w-full">
      <div
        className={`flex flex-col items-center border-x-[1px] border-t-[1px] border-b-[3px] bg-white border-gray-300 rounded-xl overflow-hidden ${
          isDarkMode ? "darkModeColor" : ""
        }`}
      >
        <div
          className={` w-full px-4 pt-5 pb-4 bg-gray-200    ${
            isDarkMode ? "darkModeSecondColor contentBorder" : "text-gray-700"
          }`}
        >
          <a
            href=""
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center text-[#6254ff] hover:underline"
          >
            <div className="text-xl uppercase font-medium">Bored 6ENSE</div>
            <TiLink size={20} />
          </a>
        </div>
        <div className=" w-full  py-4">
          {nftRarities.map((rarity, index) => (
            <div key={index} className="w-full p-4">
              <div className="w-full relative">
                <div className="flex justify-center items-center">
                  <h2
                    className={`text-xl font-medium z-20 text-center px-3 bg-white ${
                      isDarkMode ? "darkModeColor" : ""
                    }`}
                    style={{ border: 0 }}
                  >
                    {rarity.title}
                  </h2>
                </div>
                <hr
                  className={` absolute top-[13.4px] z-10 w-full border border-gray-300  ${
                    isDarkMode ? " contentBorder" : ""
                  }`}
                />
              </div>

              <p className="text-gray-600 mt-2 text-center">
                {rarity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// LineCard.propTypes = {

// };

export default LineCard;
