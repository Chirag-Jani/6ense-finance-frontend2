import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const Search = ({name}) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${isDarkMode?"text-[#dcdde0]":""}`}>
      <p className=" text-xs font-medium p-1 uppercase">{name}</p>
      <input
        type="text"
        placeholder="Search Farms"
        className={`border-2  max-w-[20] py-1 px-2 rounded-xl outline-[#6254ff] ${
          isDarkMode ? "darkModeSecondColor border-gray-700 " : "border-gray-300 bg-gray-100"
        } `}
      />
    </div>
  );
};

Search.propTypes = {
    name:PropTypes.string

};

export default Search;
