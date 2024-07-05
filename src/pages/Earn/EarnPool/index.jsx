// import React from 'react';
// import PropTypes from 'prop-types';

import TopHeader from "../../../components/Global/TopHeader";
import FormNav from "../../../components/Earn/FormNav";
import { useState } from "react";
import SmallToggle from "../../../components/Earn/SmallToggle";
import LiveFinish from "../../../components/Earn/LiveFinish";
import Selector from "../../../components/Earn/Selector";
import Search from "../../../components/Earn/Search";
import PoolCard from "./PoolCard";
import PoolList from "./PoolList";
import Gridicon from "../../../components/Earn/Gridicon";
import Listicon from "../../../components/Earn/Listicon";

const EarnPools = () => {
  const [light, setLight] = useState(true);

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
        heading={"Pools"}
        para={"Stake tokens to earn other tokens."}
      />
      <div className="max-w-[1200px] px-4 pt-5 pb-2 mx-auto w-full flex justify-center sm:justify-between  items-center flex-wrap gap-5">
        <div className=" flex items-center gap-4 justify-center sm:justify-start flex-wrap">
          <div className=" p-1" onClick={handleLGrid}>
            <Gridicon />
          </div>
          <div className=" p-1" onClick={handleList}>
            <Listicon />
          </div>

          <SmallToggle
            handleLight={handleLight}
            light={light}
            name={"Staked only"}
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
        <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-x-8 gap-y-16">
          <PoolCard />
          <PoolCard />
        </div>
      ) : (
        <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-5">
          <PoolList />
          <PoolList />
      
        </div>
      )}
    </div>
  );
};

// EarnForm.propTypes = {

// };

export default EarnPools;
