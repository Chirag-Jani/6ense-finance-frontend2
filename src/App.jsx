import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Swap from "./pages/Trading/Swap/Swap";
import Liquidity from "./pages/Trading/Liquidity/Liquidity";
import BuyENSE from "./pages/Trading/Buy 6ENSE/BuyENSE";
import EarnForm from "./pages/Earn/EarnForm";
import EarnVault from "./pages/Earn/EarnVault";
import EarnStaking from "./pages/Earn/EarnStaking";
import EarnPool from "./pages/Earn/EarnPool";
import BuyNFT from "./pages/NFT/BuyNFT";
import MintNFT from "./pages/NFT/MintNFT";
import Owners from "./pages/NFT/Owners";
import RedeemNFT from "./pages/NFT/RedeemNFT";
import StakingNFT from "./pages/NFT/StakingNFT";
import GenToken from "./pages/LaunchPad/GenToken";
import Launcher from "./pages/LaunchPad/Launcher";
import FooterNav from "./components/Footers/FooterNav";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Footer from "./components/Footers/Footer";
import Govern from "./pages/Governance/Govern";
import DeskPopup from "./components/Global/DeskPopup";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [model, setModel] = useState(false);
  return (
    <>
      <div
        className={`min-h-screen h-auto w-full  fontStyle  ${
          isDarkMode ? "bg-[#101013] " : "bg-slate-100 "
        }`}
      >
        <Router>
          <Navbar />
          {!model ? (
            <DeskPopup closewallet={setModel} openwallet={model} />
          ) : (
            ""
          )}

          <Routes>
            <Route path="/" element={<Swap />} />
            <Route path="/liquidity" element={<Liquidity />} />
            <Route path="/buyense" element={<BuyENSE />} />
            {/* earn */}
            <Route path="/form" element={<EarnForm />} />
            <Route path="/vault" element={<EarnVault />} />
            <Route path="/staking" element={<EarnStaking />} />
            <Route path="/pools" element={<EarnPool />} />
            {/* nft */}
            <Route path="/buy-nft" element={<BuyNFT />} />
            <Route path="/mint-nft" element={<MintNFT />} />
            <Route path="/owner" element={<Owners />} />
            <Route path="/redeem-nft" element={<RedeemNFT />} />
            <Route path="/stak-nft" element={<StakingNFT />} />
            {/* token */}
            <Route path="/tokenpad" element={<GenToken />} />
            <Route path="/launch" element={<Launcher />} />
            {/* governance */}
            <Route path="/govern" element={<Govern />} />
          </Routes>
          <Footer />
          <FooterNav />
        </Router>
      </div>
    </>
  );
}

export default App;
