

import BottomNav from "../Header/BottomNav";

const TradeNav = () => {
  const navdata = [
    { path: "/", name: "Swap" },
    { path: "/liquidity", name: "Liquidity" },
    { path: "/buyense", name: " Buy 6ENSE" },
  ];

  return (
    <>
      <BottomNav navdata={navdata} />
    </>
  );
};



export default TradeNav;
