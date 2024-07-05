import { useContext, useState } from "react";
import { Greater } from "../../utils/SVGicons/SvgIcons";
import Wallet from "../Global/Wallet";
import { Link, NavLink } from "react-router-dom";
import ToggleButton from "../Global/ToggleButton";
import { SiPaloaltonetworks } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { ThemeContext } from "../../ThemeContext";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const handleOpen = () => {
    setIsopen(!isopen);
    console.log(isopen);
  };

  return (
    <div
      className={` w-full mx-auto border-b-[1.5px] bg-slate-100  border-slate-200 duration-200  ${
        isDarkMode ? " darkModeNavColor contentBorder" : ""
      }`}
    >
      <div className=" max-w-[1480px] w-full mx-auto">
        <div className=" w-full flex justify-between items-center  px-1 sm:px-2 md:px-3 lg:px-5 relative ">
          <NavLink
            to="/"
            className={` duration-200 ${
              isDarkMode ? "text-slate-100  " : " text-[#101013] "
            }`}
          >
            <h1 className=" font-bold text-3xl py-2 px-1">6ENSE</h1>
          </NavLink>
          <div className="">
            <ul className=" flex justify-end items-center  gap-0">
              <li className="hidden md:block list-item-hover">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-4 px-1 lg:px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block  ${
                      isDarkMode
                        ? ` ${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#E5E7EB]"
                          } `
                        : `${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#101013] "
                          } `
                    }`
                  }
                >
                  TRADING
                </NavLink>

                <ul
                  className={`w-[230px] list-item-hover-open absolute top-full  py-1 rounded-lg border-[1px]  z-50 ${
                    isDarkMode
                      ? " bg-[#1A1A20] border-[#111114]"
                      : "bg-slate-100  border-slate-300"
                  }`}
                >
                  <Link
                    to="/"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Swap
                  </Link>
                  <Link
                    to="/liquidity"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Liquidity
                  </Link>
                  <Link
                    to="/buyense"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Buy 6ense
                  </Link>
                </ul>
              </li>

              <li className="hidden md:block list-item-hover">
                <NavLink
                  to="/form"
                  className={({ isActive }) =>
                    `py-4 px-1 lg:px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block  ${
                      isDarkMode
                        ? ` ${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#E5E7EB]"
                          } `
                        : `${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#101013] "
                          } `
                    }`
                  }
                >
                  EARN
                </NavLink>

                <ul
                  className={`w-[230px] list-item-hover-open absolute top-full  py-1 rounded-lg border-[1px] z-50  ${
                    isDarkMode
                      ? " bg-[#1A1A20] border-[#111114]"
                      : " bg-slate-100 border-slate-300"
                  }`}
                >
                  <Link
                    to="/form"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff]  capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    farm
                  </Link>
                  <Link
                    to="/staking"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff]  capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    staking
                  </Link>
                  <Link
                    to="/pools"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff]  capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    pools
                  </Link>
                  {/* <Link to="/tokenpad"> */}
                  <Link
                    to="/vault"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff]  capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    vault
                  </Link>
                  {/* </Link> */}
                </ul>
              </li>

              <li className="hidden md:block list-item-hover">
                <NavLink
                  to="/buy-nft"
                  className={({ isActive }) =>
                    `py-4 px-1 lg:px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
                      isDarkMode
                        ? ` ${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#E5E7EB]"
                          } `
                        : `${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#101013] "
                          } `
                    }`
                  }
                >
                  NFT
                </NavLink>

                <ul
                  className={`w-[230px] list-item-hover-open absolute top-full  py-1 rounded-lg border-[1px]  z-50 ${
                    isDarkMode
                      ? " bg-[#1A1A20] border-[#111114]"
                      : "bg-slate-100  border-slate-300"
                  }`}
                >
                  <Link
                    to="/buy-nft"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    buy NFT 6ense
                  </Link>
                  <Link
                    to="/mint-nft"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    mint NFT
                  </Link>
                  <Link
                    to="/redeem-nft"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Redeem NFT
                  </Link>

                  <Link
                    to="/stak-nft"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    staking NFT
                  </Link>
                  <Link
                    to="/owner"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Owners
                  </Link>
                </ul>
              </li>

              <li className="hidden md:block list-item-hover">
                <NavLink
                  to="/launch"
                  className={({ isActive }) =>
                    `py-4 px-1 lg:px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
                      isDarkMode
                        ? ` ${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#E5E7EB]"
                          } `
                        : `${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#101013] "
                          } `
                    }`
                  }
                >
                  LAUNCHPAD
                </NavLink>

                <ul
                  className={`w-[230px] list-item-hover-open absolute top-full  py-1 rounded-lg border-[1px]  z-50 ${
                    isDarkMode
                      ? " bg-[#1A1A20] border-[#111114]"
                      : "bg-slate-100  border-slate-300"
                  }`}
                >
                  {/* <Link
                    to="/launch"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Launchpad
                  </Link> */}

                  <Link
                    to="/tokenpad"
                    className={`py-2 px-4 w-full font-normal text-base  cursor-pointer hover:text-[#6254ff]  capitalize block ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    }`}
                  >
                    GENERATE YOUR TOKEN
                  </Link>
                </ul>
              </li>

              <li className="hidden md:block list-item-hover">
                <NavLink
                  to="/govern"
                  className={({ isActive }) =>
                    `py-4 px-1 lg:px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
                      isDarkMode
                        ? ` ${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#E5E7EB]"
                          } `
                        : `${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#101013] "
                          } `
                    }`
                  }
                >
                  GOVERNANCE
                </NavLink>
              </li>

              <li className="hidden md:block list-item-hover">
                <NavLink
                  to="https://www.plantocatalyst.com/"
                  target="_blank"
                  className={({ isActive }) =>
                    `py-4 px-1 lg:px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
                      isDarkMode
                        ? ` ${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#E5E7EB]"
                          } `
                        : `${
                            isActive
                              ? "text-[#6254ff] font-semibold "
                              : "text-[#101013] "
                          } `
                    }`
                  }
                >
                  {/* <span className=" hidden lg:contents">
                    P&G<FaExternalLinkAlt />
                  </span>
                  <span className=" lg:hidden">PRODUCT</span> */}
                  <span className=" hidden lg:flex items-center gap-x-2 text-nowrap">
                    PRODUCT AND GADGET
                  </span>
                  <span className=" lg:hidden flex items-center gap-x-2 text-nowrap">
                    <FaExternalLinkAlt /> P&G
                  </span>
                </NavLink>
              </li>

              {/* toggle button */}
              <li className="px-1 pr-2 lg:px-2">
                <ToggleButton />
              </li>

              <li className="list-item-hover px-1 lg:px-2 py-3">
                <div
                  className={`flex justify-between items-center gap-1 bg-white whitespace-nowrap px-3 py-1  border-b-[2px] border-gray-500 rounded-xl`}
                >
                  {/* <Diamond /> */}
                  <SiPaloaltonetworks size={20} className=" " />
                  <div className=" text-black font-medium text-base capitalize hidden lg:block">
                    network
                  </div>
                  <Greater />
                </div>
                <ul
                  className={`w-[230px] -ml-24 list-item-hover-open absolute top-full  py-1 rounded-lg border-[1px]  z-50 ${
                    isDarkMode
                      ? " bg-[#1A1A20] border-[#111114]"
                      : "bg-slate-100  border-slate-300"
                  } `}
                >
                  <div
                    className={`py-2 px-4 pr-10  font-normal text-base  hover:text-[#6254ff]   block ease-in duration-300 border-b-[1px]  ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB] contentBorder"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Select a Network
                  </div>
                  <Link
                    className={`py-2 px-4 w-full font-normal text-base  cursor-pointer hover:text-[#6254ff]  capitalize block ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    }`}
                  >
                    ethereum
                  </Link>
                  <Link
                    className={`py-2 px-4 w-full font-normal text-base  cursor-pointer hover:text-[#6254ff]  capitalize block ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    }`}
                  >
                    Binance Smart Chain
                  </Link>
                </ul>
              </li>

              <li
                className=" cursor-pointer list-item-hover px-1 lg:px-2 py-3"
                onClick={handleOpen}
              >
                <div
                  className={`hidden lg:flex justify-between items-center whitespace-nowrap px-2 py-1 border-b-[2px] rounded-lg ${
                    isDarkMode
                      ? "bg-white border-gray-500"
                      : "bg-[#313131]  text-white  border-[#1d1d1d]"
                  }`}
                >
                  {" "}
                  <div className=" font-medium text-base  capitalize ">
                    <span className="hidden lg:block"> connect wallet</span>
                    {/* <span className=" lg:hidden">Wallet</span> */}
                  </div>
                </div>

                <div className="lg:hidden flex justify-between items-center gap-1 bg-white whitespace-nowrap px-3 py-1  border-b-[2px] border-gray-500 rounded-xl">
                  {/* <Diamond /> */}

                  {/* <SiPaloaltonetworks size={20} className=" " /> */}
                  <GiWallet size={20} />

                  <Greater />
                </div>
                <ul
                  className={`w-[230px] -ml-44 md:-ml-40 lg:-ml-24 list-item-hover-open absolute top-full  py-1 rounded-lg border-[1px]  z-50 ${
                    isDarkMode
                      ? " bg-[#1A1A20] border-[#111114]"
                      : "bg-slate-100  border-slate-300"
                  }`}
                >
                  <Link
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013]  "
                    } `}
                  >
                    Wallet
                  </Link>
                  <Link
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    recent transactions
                  </Link>
                  <Link
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    disconnect
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {isopen ? <Wallet openwallet={isopen} closewallet={setIsopen} /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
