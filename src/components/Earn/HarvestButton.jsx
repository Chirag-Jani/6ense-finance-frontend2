import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const HarvestButton = ({ name, bgColor, color }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`capitalize py-2 px-4 rounded-lg ${
        isDarkMode ? "harvestIconColor contentBorder hover:bg-[#595963]" : ""
      } ${color} ${bgColor}`}
    >
      {name}
    </div>
  );
};

HarvestButton.propTypes = {
  name: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default HarvestButton;
