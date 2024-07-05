import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Selector = ({ handleChange, selectedOption, name }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${isDarkMode ? "text-[#dcdde0]" : ""}`}>
      <p className=" text-xs font-medium p-1 uppercase">{name}</p>
      <div></div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className={`"bg-gray-100 px-4 py-[5px] border-2  rounded-2xl w-44 outline-[#6254ff] ${
          isDarkMode ? "darkModeSecondColor border-gray-700" : "border-gray-300"
        } `}
      >
        <option value="option1" className="px-4 py-2">
          hot
        </option>
        <option value="option2" className="px-4 py-2">
          apr
        </option>
        <option value="option3" className="px-4 py-2">
          multiplier
        </option>
        <option value="option4" className="px-4 py-2">
          Earned
        </option>
        <option value="option5" className="px-4 py-2">
          liquidity
        </option>
        <option value="option6" className="px-4 py-2">
          latest
        </option>
        <option value="option7" className="px-4 py-2">
          latest
        </option>
      </select>
    </div>
  );
};

Selector.propTypes = {
  handleChange: PropTypes.func,
  selectedOption: PropTypes.string,
  name: PropTypes.string,
};

export default Selector;
