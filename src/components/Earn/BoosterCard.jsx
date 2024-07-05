// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const BoosterCard = () => {
  return (
    <div className=" max-w-[280px] w-full h-auto border bg-white rounded-xl py-3 px-5">
      <div className="">
        <div className=" border-b-2 pb-2 font-semibold text-gray-800 text-base">Yield Booster</div>
        <div className="py-2 text-xs font-normal text-gray-500">
          <p className=" font-normal texy-sm text-gray-600">No 6ENSE locked</p>
          An active fixed-term 6ENSE staking position is required for activating
          farm yield boosters.
        </div>
        <Link to="/vault" className="bg-black flex justify-center items-center rounded-lg py-1 text-white text-base font-semibold">Go to Vault</Link>
      </div>
    </div>
  );
};

// BoosterCard.propTypes = {

// };

export default BoosterCard;
