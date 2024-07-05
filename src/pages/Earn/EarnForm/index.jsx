// import React from 'react';
// import PropTypes from 'prop-types';

import { useState } from "react";

import TopHeader from "../../../components/Global/TopHeader";
import BoosterCard from "../../../components/Earn/BoosterCard";
import FormNav from "../../../components/Earn/FormNav";
import FarmCard from "./FarmCard";
import FormListCard from "./FormListCard";
import SmallToggle from "../../../components/Earn/SmallToggle";
import Selector from "../../../components/Earn/Selector";
import Search from "../../../components/Earn/Search";
import LiveFinish from "../../../components/Earn/LiveFinish";
import Gridicon from "../../../components/Earn/Gridicon";
import Listicon from "../../../components/Earn/Listicon";

const EarnForm = () => {
  const [light, setLight] = useState(true);
  const [slight, setSlight] = useState(true);
  const [list, setList] = useState(true);
  const [live, setLive] = useState(true);

  const handleLGrid = () => {
    setList(true);
  };

  const handleList = () => {
    setList(false);
  };

  const handleLight = () => {
    setLight(!light);
  };
  const handleSecondLight = () => {
    setSlight(!slight);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLive = () => {
    setLive(true);
  };
  const handleFinish = () => {
    setLive(false);
  };

  return (
    <div className="w-full mx-auto">
      <FormNav />
      <TopHeader
        heading={"Farms"}
        para={"Stake LP tokens to earn."}
        Booster={<BoosterCard />}
      />

      <div className="max-w-[1200px] px-4 pt-5 pb-2 mx-auto w-full flex justify-center sm:justify-between  items-center flex-wrap gap-5">
        <div className=" flex items-center gap-4 justify-center sm:justify-start flex-wrap">
          <div className=" p-1" onClick={handleLGrid}>
            <Gridicon />
          </div>
          <div className="p-1" onClick={handleList}>
            <Listicon />
          </div>

          <SmallToggle
            handleLight={handleLight}
            light={light}
            name={"Staked only"}
          />
          <SmallToggle
            handleLight={handleSecondLight}
            light={slight}
            name={"Booster Available"}
          />

          <LiveFinish
            name={"Live"}
            sname={"Finish"}
            handleFinish={handleFinish}
            handleLive={handleLive}
            status={live}
          />
        </div>
        <div className=" flex gap-5 justify-center sm:justify-end flex-wrap">
          <Selector
            handleChange={handleChange}
            selectedOption={selectedOption}
            name={"sort by"}
          />

          <Search name={"search"} />
        </div>
      </div>
      {list ? (
        <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-x-5 gap-y-16">
          <FarmCard />
          <FarmCard />
          <FarmCard />
        </div>
      ) : (
        <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-5">
          <FormListCard />
          <FormListCard />
          <FormListCard />
        </div>
      )}
    </div>
  );
};

// EarnForm.propTypes = {

// };

export default EarnForm;
