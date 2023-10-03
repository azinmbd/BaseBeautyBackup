import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import expertText from "../../assets/expertsText.svg";

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
              src={expertText}
              alt=""
              data-aos="fade-down"
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
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntroSection;
