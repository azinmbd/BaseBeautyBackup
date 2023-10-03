import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import aboutUsBeans from "../assets/Haloween.png";
const AboutUsQualitySection = () => {
  return (
    <section className="about-us-green">
          <Container maxWidth="xl">
      <Grid
        container
        component="main"
        sx={{ pt: 10, pb: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          elevation={6}
          alignItems="flex-start"
          justifyContent="center"
          display={"flex"}
          flexDirection={"column"}
          boxShadow={"none"}
        >
          <img
            src={aboutUsBeans}
            alt=""
            width="80%"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="600"
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center ",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            color="black"
            gutterBottom
            width={"100%"}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <b>Personalisation and Convenience</b>
          </Typography>
          <Typography
            component="p"
            variant="p"
            color="text.secondary"
            gutterBottom
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            We understand that beauty is not one-size-fits-all. That's why we
            focus on providing personalised experiences. Our experts take the
            time to understand your unique preferences, style, and goals,
            tailoring their services to meet your specific needs. Your
            satisfaction and happiness are our top priorities.
            <br />
            With Base Beauty, searching for the perfect beauty expert is
            effortless. Our user-friendly platform allows you to browse our
            diverse range of experts, explore their portfolios, and read reviews
            from satisfied clients. You can easily connect with the expert of
            your choice and book appointments at your convenience, all from the
            comfort of your own home.
          </Typography>
        </Grid>
      </Grid>
    </Container>
    </section>

  );
};
export default AboutUsQualitySection;
