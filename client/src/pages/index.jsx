import AuthWrapper from "../components/AuthWrapper";
import Companies from "../components/Landing/Companies";
import Everything from "../components/Landing/Everything";
import GigMarketBusiness from "../components/Landing/GigMarketBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinFiverr from "../components/Landing/JoinGigMarket";
import PopularServices from "../components/Landing/PopularServices";
import Services from "../components/Landing/Services";
import { useStateProvider } from "../context/StateContext";
import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import { ToastSucess } from "../utils/Toast";

function Index() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();

  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <GigMarketBusiness />
      <JoinFiverr />
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
}

export default Index;
