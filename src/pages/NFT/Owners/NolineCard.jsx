// import PropTypes from 'prop-types';
import { useContext } from "react";
import { TiLink } from "react-icons/ti";
import { ThemeContext } from "../../../ThemeContext";

const NolineCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const nftRarities = [
    { title: "Rebel Punk", description: "No NFT with this collection." },
    // { title: "CrofamLadiesVIP", description: "No NFT with this collection." },
    // { title: "TiltedDabbersOG", description: "No NFT with this collection." },
    // { title: "BingoNFT", description: "No NFT with this collection." },
    // { title: "TeenDACC", description: "No NFT with this collection." },
    // { title: "Crovilian", description: "No NFT with this collection." },
    // { title: "SpicyCroPepe", description: "No NFT with this collection." },
    // {
    //   title: "CronosDuels Barracks",
    //   description: "No NFT with this collection.",
    // },
  ];
  return (
    <div className=" w-full">
      <div className=" w-full">
        {nftRarities.map((rarity, index) => (
          <div
            key={index}
            className={`w-full border-x-[1px] border-t-[1px] border-b-[3px] bg-white  border-gray-300 my-7 rounded-xl overflow-hidden  ${
              isDarkMode ? "darkModeColor" : ""
            }`}
          >
            <div
              className={` w-full px-4 pt-5 pb-4 bg-gray-200    ${
                isDarkMode
                  ? "darkModeSecondColor contentBorder"
                  : "text-gray-700"
              }`}
            >
              <a
                href=""
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center text-[#6254ff] hover:underline"
              >
                <div className="text-xl font-medium"> {rarity.title}</div>
                <TiLink size={20} />
              </a>
            </div>

            <p className="text-gray-600 text-lg  w-full px-4 pt-8 pb-7 text-center">
              {rarity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// NolineCard.propTypes = {

// };

export default NolineCard;
