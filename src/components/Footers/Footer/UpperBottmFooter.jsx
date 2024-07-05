import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext";

const footerData = [
  {
    id: 1,
    title: "Company",
    links: ["About Us", "We’re Hiring", "Investors", "Contact"],
  },
  {
    id: 2,
    title: "Trading",
    links: ["Swap", "Liquidity", "Buy 6ENSE"],
  },
  {
    id: 3,
    title: "Earn",
    links: ["Farm", "Staking", "Pools", "Vault"],
  },
  {
    id: 4,
    title: "NFT",
    links: [
      "Buy NFT 6ense",
      "Mint NFT",
      "Redeem NFT",
      "Staking NFT",
      "  Owners",
    ],
  },
  {
    id: 5,
    title: "Launchpad",
    links: ["Launchpad", " GENERATE YOUR TOKEN"],
  },
];

const UpperBottmFooter = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="flex w-full pt-12 mb-6 px-4 md:px-0">
      <div className=" pb-5 hidden md:flex w-[20%]">
        {/* <img src={logo} alt="logo" style={{ height: "24px", width: "auto" }} /> */}
        <div className="text-3xl text-[#6254ff] font-bold">6ense</div>
      </div>
      <div className="flex flex-1">
        <div className="hidden md:grid grid-cols-5 w-full">
          {footerData.map((item) => {
            return (
              <div key={item.id} className="mb-10">
                <h2 className=" font-bold text-[16px] mb-5">{item.title}</h2>
                <div className="flex flex-col gap-y-2 ">
                  {item.links.map((link, index) => (
                    <Link
                      key={index}
                      className={` font-normal py-[2px] text-[12px] cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                        isDarkMode ? "  text-[#E5E7EB]" : " text-[#101013] "
                      } `}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid md:hidden grid-cols-2 w-full">
          {footerData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`mb-5 ${index === 4 ? "col-span-2" : ""}`}
              >
                <h2 className=" font-bold text-[16px] mb-5">{item.title}</h2>
                <div className="flex flex-col gap-y-2">
                  {item.links.map((link, index) => (
                    <Link
                      key={index}
                      className={` font-normal py-[2px] text-[12px] cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                        isDarkMode ? "  text-[#E5E7EB]" : " text-[#101013] "
                      } `}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpperBottmFooter;
