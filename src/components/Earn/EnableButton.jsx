import PropTypes from 'prop-types';

const EnableButton = ({colorHover,color,bgHover,bgColor, name}) => {
  return (
    <button className={` w-full ${colorHover +" "+ color +" "+ bgColor} hover:${bgHover}  py-3 text-base font-semibold px-4 rounded-xl ease-in duration-200`}>
     {name}
    </button>
  );
};

EnableButton.propTypes = {

    colorHover: PropTypes.string,
    color: PropTypes.string,
    bgHover: PropTypes.string,
    bgColor: PropTypes.string,
    name: PropTypes.string,

};

export default EnableButton;
