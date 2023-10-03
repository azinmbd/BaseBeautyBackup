import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import aboutUsIntro from "../assets/aboutUsLogo-01.png";
import Text from "../assets/AboutUSText-01.svg";

const AboutUsPageFirstSection = () => {
  return (
    <Grid container component="main">
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ mt: 15, pb:5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            elevation={6}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            flexDirection={"column"}
            boxShadow={"none"}
          >
            <img
              src={Text}
              alt=""
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay={300}
            />
            <Typography
              paragraph
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={600}
            >
              At Base Beauty, we believe that beauty is not just about
              appearances but also about feeling confident, empowered, and
              comfortable in your own skin. We are a unique beauty company that
              acts as a medium, connecting beauty experts with individuals
              seeking their services. Our platform brings together a community
              of passionate and skilled professionals specialising in makeup,
              nails, and skincare.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="0"
              src={aboutUsIntro}
              alt=""
              width="70%"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default AboutUsPageFirstSection;
