import { useState } from "react";
import TopHeader from "../../../components/Global/TopHeader";
import LaunchNav from "../../../components/Launchpad/Launch-Nav";
import LiveFinish from "../../../components/Earn/LiveFinish";
import Latest from "./Latest";
import Finish from "./Finish";

const Launcher = () => {
  const [live, setLive] = useState(true);
  const handleLive = () => {
    setLive(true);
  };
  const handleFinish = () => {
    setLive(false);
  };
  return (
    <div className=" w-full h-auto mx-auto">
      <LaunchNav />
      <TopHeader
        heading={"Launchpad"}
        para={"Buy new tokens with a brand new token sale model."}
      />
      <div className="w-full flex justify-center py-2 px-2">
        <div className="max-w-[1200px] w-full flex justify-center border-b-2 border-gray-600 pb-3 pt-4">
          <LiveFinish
            name={"Latest"}
            sname={"Finished"}
            handleFinish={handleFinish}
            handleLive={handleLive}
            status={live}
          />
        </div>
      </div>
      {live ? (
        <Latest />
      ) : (
        <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-x-24 gap-y-16">
          <Finish />
          {/* <Finish />
          <Finish /> */}
        </div>
      )}
    </div>
  );
};

export default Launcher;
