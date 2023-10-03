import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import planText from "../../assets/plansText.svg";

const IntroSection = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 8, pb: 8 }}>
      <Grid container component="main">
        <Grid
          container
          component="main"
          sx={{ pt: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          display={"flex"}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            flexDirection={"column"}
            boxShadow={"none"}
          >
            <img
              src={planText}
              alt=""
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay={300}
              width={"100%"}
            />
            <Typography
              paragraph
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={600}
              textAlign={"center"}
              marginTop={"30px"}
            >
              Take a look at our range of plans designed to meet your specific
              needs and goals. Whether you're just starting out or looking to
              level up, we have a plan for you. Our carefully curated packages
              offer a combination of comprehensive features, personalized
              support, and exclusive benefits. With our plans, you'll gain
              access to a wealth of resources, expert guidance, and a thriving
              community of like-minded individuals. It's time to take the next
              step towards achieving your aspirations. Choose a plan that suits
              you best and embark on your journey to success today.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntroSection;
