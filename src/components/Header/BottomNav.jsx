import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";
import { ThemeContext } from "../../ThemeContext";

const BottomNav = ({ navdata }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-full  relative flex items-center  ${
        isDarkMode ? " bg-[#25252d] " : "bg-white  "
      }`}
    >
      <button
        className="absolute left-0  py-3 px-2 bg-gray-400 sm:hidden"
        onClick={() => scroll("left")}
      >
        <FaChevronLeft />
      </button>
      <div className="w-full overflow-x-hidden px-4">
        <ul
          ref={scrollRef}
          className="px-5 flex justify-start sm:justify-center gap-x-5 overflow-x-scroll hide-scrollbar snap-x"
        >
          {navdata.map((elem) => (
            <NavLink
              key={elem.path}
              to={elem.path}
              className={({ isActive }) =>
                `py-2 px-2 font-normal text-sm hover:text-[#6254ff] text-nowrap snap-start duration-300 
              ${
                isDarkMode
                  ? ` ${
                      isActive
                        ? "border-b-4 text-[#6254ff] font-semibold border-[#6254ff] "
                        : "text-[#E5E7EB]"
                    } `
                  : `${
                      isActive
                        ? "border-b-4 text-[#6254ff] font-semibold border-[#101013] "
                        : "text-[#101013] "
                    } `
              }
               `
              }
            >
              {elem.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <button
        className="absolute right-0  py-3 px-2 bg-gray-400 sm:hidden"
        onClick={() => scroll("right")}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
BottomNav.propTypes = {
  navdata: PropTypes.array,
};

export default BottomNav;
