import TopHeader from "../../../components/Global/TopHeader";
import NftNav from "../../../components/NFT/Nft-nav";
import LineCard from "./LineCard";
import NolineCard from "./NolineCard";

const Owners = () => {
  return (
    <div className="w-full mx-auto">
      <NftNav />
      <TopHeader heading={"Owned NFTs"} para={"Boost your rewards with NFTs"} />
      <div className="max-w-[1200px] w-full mx-auto h-auto py-6 px-2 sm:px-4 md:px-6">
        <LineCard />
      </div>
      <div className="max-w-[1200px] w-full mx-auto h-auto pb-6 pt-4 px-2 sm:px-4 md:px-6">
        <NolineCard />
      </div>
    </div>
  );
};

export default Owners;
