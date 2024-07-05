import TopHeader from "../../../components/Global/TopHeader";
import FormNav from "../../../components/Earn/FormNav";
import { useState } from "react";
import VaultList from "./VaultList";
import VaultCard from "./VaultCard";
import Gridicon from "../../../components/Earn/Gridicon";
import Listicon from "../../../components/Earn/Listicon";

const EarnVault = () => {
  const [list, setList] = useState(true);

  const handleLGrid = () => {
    setList(true);
  };

  const handleList = () => {
    setList(false);
  };

  return (
    <div className="w-full mx-auto">
      <FormNav />
      <TopHeader
        heading={"6ense Vaults"}
        para={"Boost your earnings through vaults."}
      />

      <div className="max-w-[1200px] px-4 pt-5 pb-2 mx-auto w-full flex justify-center  items-center gap-5">
        <div className=" flex items-center gap-4 justify-center  ">
          <div className=" p-2 " onClick={handleLGrid}>
            <Gridicon />
          </div>
          <div className="  p-2 " onClick={handleList}>
            <Listicon />
          </div>
        </div>
      </div>
      {list ? (
        <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-x-8 gap-y-16">
          <VaultCard />
          <VaultCard />
        </div>
      ) : (
        <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-5">
          <VaultList />
          <VaultList />
        </div>
      )}
    </div>
  );
};

export default EarnVault;
