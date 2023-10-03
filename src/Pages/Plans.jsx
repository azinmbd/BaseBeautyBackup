import React from "react";
import IntroSection from "../components/PlansComps/IntroSection";
import BasicPlan from "../components/PlansComps/BasicPlan";
import ProPlan from "../components/PlansComps/ProPlan.jsx";
import GoldPlan from "../components/PlansComps/GoldPlan";
import Footer from "../components/Footer";

const Plans = () => {
  return (
    <React.Fragment>
      <IntroSection />
      <BasicPlan />
      <ProPlan />
      <GoldPlan />
      <Footer />
    </React.Fragment>
  );
};

export default Plans;
