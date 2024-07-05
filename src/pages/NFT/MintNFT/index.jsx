import TopHeader from "../../../components/Global/TopHeader";
import NftNav from "../../../components/NFT/Nft-nav";
import MintCard from "./MintCard";

const MintNFT = () => {
  return (
    <div className="w-full mx-auto">
      <NftNav />
      <TopHeader
        heading={"NFT Mint"}
        para={"Supply and Demand style investment."}
      />
      <div className="px-2 py-10 flex justify-center">
        <MintCard />
      </div>
    </div>
  );
};

export default MintNFT;
