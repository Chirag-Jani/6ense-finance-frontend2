import { LuPlane } from "react-icons/lu";

const BoosterIcon = () => {
  return (
    <button className="flex justify-end items-center gap-3 rounded-xl bg-green-100 border-[1px] border-green-600 capitalize px-1 py-[1px] text-xs font-medium">
      <LuPlane />
      Booster
    </button>
  );
};

export default BoosterIcon;
