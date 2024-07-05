import BottomNav from "../Header/BottomNav";

const NftNav = () => {
  const navdata = [
    { path: "/buy-nft", name: "Buy NFT 6ense" },
    { path: "/mint-nft", name: "Mint NFT" },
    { path: "/redeem-nft", name: "Redeem NFT" },
    { path: "/stak-nft", name: "Staking NFT" },
    { path: "/owner", name: "Owners" },
  ];

  return <BottomNav navdata={navdata} />;
};

export default NftNav;
