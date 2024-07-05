import BottomNav from "../Header/BottomNav";

const FormNav = () => {
  const navdata = [
    { path: "/form", name: "Farm" },
    { path: "/staking", name: "Staking" },
    { path: "/pools", name: "Pools" },
    { path: "/vault", name: "Vault" },
  ];

  return (
    <>
      <BottomNav navdata={navdata} />
    </>
  );
};

export default FormNav;
