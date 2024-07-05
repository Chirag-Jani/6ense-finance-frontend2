import PropTypes from "prop-types";
import { useContext } from "react";
import { TiLink } from "react-icons/ti";
import { ThemeContext } from "../../../ThemeContext";

const MintCard = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={` max-w-[480px] w-full rounded-2xl overflow-hidden border-x-[1px] border-t-[1px] border-b-[3px] border-gray-300 ${
        isDarkMode ? "darkModeColor" : ""
      }`}
    >
      <div
        className={`flex flex-col bg-gray-100 shadow-lg p-4 ${
          isDarkMode ? "darkModeSecondColor contentBorder" : "text-gray-700"
        }`}
      >
        <div className="flex justify-center mb-4">
          <img
            src="https://www.pngkit.com/png/full/26-268992_metamask-metamask-wallet.png"
            alt="Cronos Duels Barracks"
            className={`rounded-lg w-24 p-4  bg-white ${
              isDarkMode ? "harvestIconColor contentBorder" : "text-gray-700"
            }`}
          />
        </div>
        <a
          href="https://cronoscan.com/address/0x3B74781C407541ac9837920b5c15e1CdeF98C46A"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#6254ff] text-lg font-medium  flex justify-center items-center mb-2"
        >
          <div className="text-[#6254ff] text-center text-xl mr-2">
            CronosDuels Barracks
          </div>
          <TiLink size={20} />
        </a>
        <div className="text-gray-500 text-center px-2 md:px-4 text-sm">
          The Dynamic NFT Card Game that Allows the Integration of Cronos NFTs.
          Staking Rewards, a Dynamic Ranking System, Online Matchmaking against
          other Card Holders, and much more. Integrate your NFT with a
          CronosDuels Card, Build Your Deck and Level Up your NFT Experience.
        </div>
      </div>

      <div
        className={`py-2 px-4 w-full bg-gray-50 ${
          isDarkMode ? "darkModeColor" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center p-1 ">
          <div className="text-base font-medium">Available For Public Mint</div>
        </div>
        <MintItem title="Onslaught" price="50 CRO" remaining="50" />
        <MintItem title="Warlord" price="25 CRO" remaining="105" />
        <MintItem title="Battleborn" price="12 CRO" remaining="263" />
        <MintItem title="Duelist" price="6 CRO" remaining="306" />
        <MintItem title="Brass" price="3 CRO" remaining="367" />
        <div className=" items-center px-1 py-4">
          <div className="text-base flex justify-between items-center font-medium ">
            <div className=" ">Your Minted </div>
            <hr className=" w-[73%]  border border-gray-300" />
          </div>
          <div className="text-xs px-4">No NFTs have been minted yet.</div>
        </div>

        <div className="text-base font-medium p-1">Total Minted</div>

        <MintStatus title="Onslaught" status="450 / 500" />
        <MintStatus title="Warlord" status="645 / 750" />
        <MintStatus title="Battleborn" status="737 / 1,000" />
        <MintStatus title="Duelist" status="944 / 1,250" />
        <MintStatus title="Brass" status="1,133 / 1,500" />
      </div>
    </div>
  );
};

const MintItem = ({ title, price, remaining }) => (
  <div className=" p-1 px-4 ">
    <div className="flex justify-between items-center">
      <div className="text-xs font-medium">{title}</div>
      <button className="bg-[#6254FF] text-white text-xs py-1 px-4 rounded">
        Mint
      </button>
    </div>
    <div className="flex justify-between items-center">
      <div className="text-xs px-3">Mint Price:</div>
      <div className="text-xs">{price}</div>
    </div>
    <div className="flex justify-between items-center">
      <div className="text-xs px-3">Remained: </div>
      <div className="text-xs"> {remaining}</div>
    </div>
  </div>
);

const MintStatus = ({ title, status }) => (
  <div className="flex  justify-between items-center p-1 px-4">
    <div className="text-xs font-normal">{title}</div>
    <div className="text-xs">{status}</div>
  </div>
);

export default MintCard;

MintStatus.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
};
MintItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
};
