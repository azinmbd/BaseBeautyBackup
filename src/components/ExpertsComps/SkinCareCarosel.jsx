import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "react-multi-carousel";

//new code

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function MakeUpCarosel(props) {
  const delay = 200;
  return (
    <section className="SkincareExp">
      <Container
        maxWidth="xl"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
        sx={{ marginBottom: "30px" }}
      >
        <Container sx={{ paddingTop: "30px" }}>
          <Typography
            color="black"
            variant="h3"
            sx={{ mt: 3, textTransform: "uppercase", textAlign: "center" }}
          >
            <b>SkinCare Experts</b>
          </Typography>
        </Container>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={3000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {props.skinCare?.map((item, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={delay * i * 2}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px",
                }}
                className="planItems expertCards"
              >
                <CardMedia
                  component="img"
                  sx={{ width: "100% !important" }}
                  image={item.expertImage}
                  alt="random"
                  className="cardMedia"
                  // onClick={() => handleCoffeeInfo(item._id)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.expertFirstName}
                  </Typography>{" "}
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.expertLastName}
                  </Typography>
                  <Typography gutterBottom variant="p" >
                    {item.expertDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button
                    size="medium"
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      boxShadow: "0 2px 15px rgb(0 0 0 / 40%)",
                    }}
                    className="planbtn"
                    // onClick={() => {
                    //   dispatch(addToCart(item));
                    //   handleClick();
                    // }}
                  >
                    Choose Expert
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
