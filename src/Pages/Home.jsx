import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import HFirstSection from "../components/HomeComps/HFirstSection";
import { useSelector, useDispatch } from "react-redux";
import HAboutSection from "../components/HomeComps/HAboutSection";
import HExpertSection from "../components/HomeComps/HExpertSection";
import HCarosel from "../components/HomeComps/HCarosel";
import HPlansSection from "../components/HomeComps/HPlansSection";
import { fetchAllExtperts } from "../redux/features/allExperts";

const Home = () => {
  const dispatch = useDispatch();
  const allExperts = useSelector((state) => state.allExperts.data);

  useEffect(() => {
    dispatch(fetchAllExtperts());
  }, [dispatch]);
  return (
    <React.Fragment>
      <HFirstSection />
      <Container
        sx={{ pt: 8 , pd:8}}
        maxWidth="xl"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
      >

      </Container>
      <HPlansSection/>
      <HAboutSection />
      <HExpertSection/>
      <HCarosel allExperts={allExperts}/>
      <Footer />
    </React.Fragment>
  );
};
export default Home;
