import { Link, NavLink } from "react-router-dom";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { LuBadgeDollarSign } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";
import { GiMissileLauncher } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { GrArchlinux } from "react-icons/gr";

const FooterNav = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={` w-full   pt-12 flex justify-center md:hidden ${
        isDarkMode ? "bg-[#101013]" : "bg-gray-100"
      }`}
    >
      <div
        className={` max-w-[1080px] w-full mx-auto border-t-[1px]  bg-gray-100  border-gray-300  z-50  fixed bottom-0 ${
          isDarkMode ? "darkModeColor" : ""
        }`}
      >
        <div className=" w-full flex items-center  px-1 sm:px-2 md:px-3 lg:px-5  relative ">
          <div className=" w-full px-2">
            <ul className=" flex  justify-around sm:justify-center items-center gap-x-2 sm:gap-10  w-full">
              <li className=" list-item-hover ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-5 px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
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
                  <LuArrowUpWideNarrow size={20} style={{}} />
                </NavLink>

                <ul
                  className={`w-[230px] list-item-hover-open absolute bottom-full bg-white py-1 rounded-lg border-[1px] border-gray-300 z-50 ${
                    isDarkMode ? "darkModeColor" : ""
                  }`}
                >
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
                    to="/"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Swap
                  </Link>
                </ul>
              </li>

              <li className=" list-item-hover ">
                <NavLink
                  to="/form"
                  className={({ isActive }) =>
                    `py-5 px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
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
                  <LuBadgeDollarSign size={20} style={{}} />
                </NavLink>

                <ul
                  className={`w-[230px] list-item-hover-open absolute bottom-full bg-white py-1 rounded-lg border-[1px] border-gray-300 z-50  ${
                    isDarkMode ? "darkModeColor" : ""
                  }`}
                >
                  <Link
                    to="/vault"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    vault
                  </Link>

                  <Link
                    to="/pools"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    pools
                  </Link>

                  <Link
                    to="/staking"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    staking
                  </Link>

                  <Link
                    to="/form"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    farm
                  </Link>
                </ul>
              </li>

              <li className=" list-item-hover">
                <NavLink
                  to="/buy-nft"
                  className={({ isActive }) =>
                    `py-5 px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
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
                  <PiHandCoins size={20} />
                </NavLink>

                <ul
                  className={`w-[230px] -ml-20 list-item-hover-open absolute bottom-full bg-white py-1 rounded-lg border-[1px] border-gray-300 z-50 ${
                    isDarkMode ? "darkModeColor" : ""
                  }`}
                >
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
                    to="/buy-nft"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    buy NFT 6ense
                  </Link>
                </ul>
              </li>

              <li className=" list-item-hover">
                <NavLink
                  to="/launch"
                  className={({ isActive }) =>
                    `py-5 px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
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
                  <GiMissileLauncher size={20} />
                </NavLink>

                <ul
                  className={`w-[230px] -ml-28 list-item-hover-open absolute bottom-full bg-white py-1 rounded-lg border-[1px] border-gray-300 z-50 ${
                    isDarkMode ? "darkModeColor" : ""
                  }`}
                >
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

                  <Link
                    to="/launch"
                    className={`py-2 px-4 pr-10  font-normal text-base  cursor-pointer hover:text-[#6254ff] capitalize block ease-in duration-300 ${
                      isDarkMode
                        ? " hover:bg-[#111114] text-[#E5E7EB]"
                        : "hover:bg-slate-50 text-[#101013] "
                    } `}
                  >
                    Launchpad
                  </Link>
                </ul>
              </li>

              <li className=" list-item-hover">
                <NavLink
                  to="/govern"
                  className={({ isActive }) =>
                    `py-5 px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
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
                  <GrArchlinux size={20} />
                </NavLink>
              </li>

              <li className=" list-item-hover">
                <NavLink
                  to="https://www.plantocatalyst.com/"
                  target="_blank"
                  className={({ isActive }) =>
                    `py-5 px-2 font-normal text-base  cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block ${
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
                  <AiOutlineProduct size={20} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
