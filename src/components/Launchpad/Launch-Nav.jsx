import BottomNav from "../Header/BottomNav";

const LaunchNav = () => {
  const navdata = [
    { path: "/launch", name: "Launchpad" },
    { path: "/tokenpad", name: "GENERATE YOUR TOKEN" },
  ];

  return (
    <>
      <BottomNav navdata={navdata} />
    </>
  );
};

export default LaunchNav;
