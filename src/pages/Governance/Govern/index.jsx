import TopHeader from "../../../components/Global/TopHeader";

import GovernNav from "../../../components/Govern/GovernNav";
import Votting from "./Votting";

const Govern = () => {
  return (
    <div className="w-full mx-auto">
      <GovernNav />
      <TopHeader
        heading={"Governance Overview"}
        para={"Governance  to define your stacks in givens section."}
      />

      <div className="max-w-[1200px] pt-5 pb-2 px-2 mx-auto w-full flex justify-center items-start flex-wrap gap-x-8 gap-y-16">
        <Votting />
      </div>
    </div>
  );
};

export default Govern;
