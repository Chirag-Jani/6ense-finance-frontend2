import { useState } from "react";
import LiveFinish from "../../../components/Earn/LiveFinish";
import TopHeader from "../../../components/Global/TopHeader";
import NftNav from "../../../components/NFT/Nft-nav";
import StakingCard from "./StakingCard";
import StakingFinishCard from "./StakingFinishCard";

const StakingNFT = () => {
  const [live, setLive] = useState(true);
  const handleLive = () => {
    setLive(true);
  };
  const handleFinish = () => {
    setLive(false);
  };
  return (
    <div className="w-full pb-10 mx-auto">
      <NftNav />
      <TopHeader
        heading={"Partner NFT Staking"}
        para={"Stake your NFTs to earn partner tokens."}
        spara={"The reward is fixed per day."}
      />
      <div className="flex justify-center items-center pt-8 pb-4">
        <LiveFinish
          name={"Live"}
          sname={"Finish"}
          handleFinish={handleFinish}
          handleLive={handleLive}
          status={live}
        />
      </div>
      <div className=" max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6">
        {live ? <StakingCard /> : <StakingFinishCard />}
      </div>
    </div>
  );
};

export default StakingNFT;
