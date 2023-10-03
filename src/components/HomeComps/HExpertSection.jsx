import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import experts from "../../assets/experts.png";

import Button from "@mui/material/Button";

export default function HExpertSection() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <section style={{ backgroundColor: "#F8F5E4" }}>
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            elevation={6}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            boxShadow={"none"}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="0"
            >
              <Container maxWidth="md">
              <Typography
                variant="h2"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={600}
              >
                Need Help We Got your back
              </Typography>
              <Typography
                paragraph
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={600}
              >
                We're . Get the help you need with your beauty concerns. Our
                expert team is ready to assist you, providing personalized
                advice and solutions. Trust us to guide you through your beauty
                journey and address your specific needs.
              </Typography>

              <Button
                variant="contained"
                size="large"
                className="secondbtn"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="1300"
                // onClick={handleAbout}
              >
                view more
              </Button>
              </Container>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}
          >
            <img
              src={experts}
              width="90%"
              alt=""
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="200"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
