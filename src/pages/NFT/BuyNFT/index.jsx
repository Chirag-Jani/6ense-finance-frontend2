import { useState } from "react";
import TopHeader from "../../../components/Global/TopHeader";
import NftNav from "../../../components/NFT/Nft-nav";
import LiveFinish from "../../../components/Earn/LiveFinish";
import NFTLive from "./NFT-Live";

const BuyNFT = () => {
  const [live, setLive] = useState(true);
  const handleLive = () => {
    setLive(true);
  };
  const handleFinish = () => {
    setLive(false);
  };
  return (
    <div className="w-full mx-auto">
      <NftNav />
      <TopHeader
        heading={" Buy NFT 6ense"}
        para={"Supply and Demand style investment."}
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
        {live ? <NFTLive /> : ""}
       
      </div>
    </div>
  );
};

export default BuyNFT;
