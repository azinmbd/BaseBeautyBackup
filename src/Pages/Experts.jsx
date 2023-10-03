import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IntroSection from "../components/ExpertsComps/IntroSection";
import MakeUpCarosel from "../components/ExpertsComps/MakeUpCarosel";
import SkinCareCarosel from "../components/ExpertsComps/SkinCareCarosel";
import NailCareCarosel from "../components/ExpertsComps/NailCareCarosel";
import Footer from "../components/Footer";
import { fetchSkincare } from "../redux/features/skincareSlice";
import { fetchNailcare } from "../redux/features/nailcareSlice";
import { fetchMakeup } from "../redux/features/makeupSlice";

const Experts = () => {
  const dispatch = useDispatch();
  const skincareExperts = useSelector((state) => state.skincare.data);
  const nailcareExperts = useSelector((state) => state.nailcare.data);
  const makeupExperts = useSelector((state) => state.makeup.data);
  useEffect(() => {
    dispatch(fetchSkincare());
    dispatch(fetchNailcare());
    dispatch(fetchMakeup());
  }, [dispatch]);
  return (
    <React.Fragment>
      <IntroSection />
      <MakeUpCarosel makeUp={makeupExperts} />
      <SkinCareCarosel skinCare={skincareExperts} />
      <NailCareCarosel nailCare={nailcareExperts} />
      <Footer />
    </React.Fragment>
  );
};

export default Experts;
