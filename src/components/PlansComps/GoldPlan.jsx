import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CheckIcon from "@mui/icons-material/Check";
import plan1 from "../../assets/plan-01.svg";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const GoldPlan = () => {
  const planName = "gold";
  const sessionCount = 50;
  const authStatus = useSelector((state) => state.auth.status);
  const [showAlert, setShowAlert] = useState(false); // Initialize showAlert as false

  useEffect(() => {
    // Automatically hide the alert after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    // Clean up the timer when the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, [showAlert]); // Include showAlert in the dependency array

  const handleChoosePlanClick = () => {
    if (authStatus !== "Successful") {
      // Show the error alert for a few seconds
      setShowAlert(true);
    } else {
      // Handle other actions or navigation
    }
  };
  return (
    <section className="Gold">
      <Container maxWidth="xl" sx={{ pt: 8, pb: 8 }}>
        <Grid container component="main">
          {" "}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={200}
          >
            <CardMedia
              component="img"
              sx={{ width: "70% !important", margin: "auto" }}
              image={plan1}
              alt="random"
              className="cardMedia"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={1360}
              // onClick={}
            />{" "}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              gutterBottom
              variant="h4"
              align="center"
              marginBottom={3}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={200}
            >
              GOLD
              <span className="line"></span>
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              margin={0}
              textAlign="center"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={300}
            >
              $450.99
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              color={"text.secondary"}
              textAlign="center"
              marginBottom={3}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={400}
            >
              per year
            </Typography>
            <Typography
              variant="p"
              textAlign="center"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={450}
            >
              The Pro Plan is designed for beauty enthusiasts who want extensive
              access to beauty services. With 50 sessions, this plan provides
              many opportunities to explore different looks, experiment with
              nail designs, and receive personalised skin care treatments. The
              Pro Plan offers the best value for those prioritising their beauty
              regimen. You can pay for the plan annually or opt for the monthly
              subscription, which grants you unlimited access to our pool of
              talented beauty experts.
              <br />
              Monthly Subscription: $40 per month
            </Typography>
            <CardContent sx={{ textAlign: "center" }}>
              <div
                className="d-flex "
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={500}
              >
                <CheckIcon sx={{ color: "#F7C04A", fontSize: "1.5em" }} />{" "}
                <h4 style={{ marginBottom: "0", marginLeft: "10px" }}>
                  50 sessions
                </h4>
              </div>
              <div
                className="d-flex"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={600}
              >
                <CheckIcon sx={{ color: "#F7C04A", fontSize: "1.5em" }} />{" "}
                <h4 style={{ marginBottom: "0", marginLeft: "10px" }}>
                  Personalised skin care treatments
                </h4>
              </div>
              <div
                className="d-flex"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={700}
              >
                <CheckIcon sx={{ color: "#F7C04A", fontSize: "1.5em" }} />{" "}
                <h4 style={{ marginBottom: "0", marginLeft: "10px" }}>
                  Unlimited access to our pool of talented beauty experts
                </h4>
              </div>
              {showAlert && (
                <Alert severity="error" sx={{ mt: 4 }}>
                  You should Login or signUp first!
                </Alert>
              )}
              <Button
                variant="contained"
                size="large"
                className="secondbtn"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="1300"
                sx={{ marginTop: "20px" }}
                onClick={handleChoosePlanClick}
              >
                {authStatus === "Successful" ? (
                  <Link
                    style={{ color: "white" }}
                    to={`/checkoutform/${planName}/${sessionCount}`}
                  >
                    Choose Plan
                  </Link>
                ) : (
                  <span style={{ color: "white" }}>Choose Plan</span>
                )}
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default GoldPlan;
