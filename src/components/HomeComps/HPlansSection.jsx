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
import plan2 from "../../assets/plan-02.svg";
import plan3 from "../../assets/plan-03.svg";
import planbg from "../../assets/planbg.svg";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert sx={{position:"absolute" ,top:"20px", left:"100px"}} elevation={6} ref={ref} variant="filled" {...props} />;
});
const HPlansSection = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [showAlert, setShowAlert] = useState(false); // Initialize showAlert as false

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showAlert]); // Include showAlert in the dependency array

  const handleChoosePlanClick = () => {
    if (authStatus !== "Successful") {
      setShowAlert(true);
    } else {
    }
  };
  return (
    <section className="plansSection">

      <Container sx={{ paddingTop: "30px" }}>
        <Typography
          color="black"
          variant="h3"
          sx={{ mt: 3, textTransform: "uppercase", textAlign: "center" }}
        >
          <b>Our Plans</b>
        </Typography>
        {showAlert && (
                <Alert severity="error" sx={{ mt: 4 }}>
                  You should Login or signUp first to buy the plan!
                </Alert>
              )}
      </Container>
      <Container maxWidth="xl">
        <Grid container component="main" sx={{ mt: "30px" }}>
          <Grid
            item
            // key={item._id}
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1200}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              className="planItems"
            >
              <CardMedia
                component="img"
                sx={{ width: "70% !important", margin: "auto" }}
                image={plan2}
                alt="random"
                className="cardMedia"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1220}
                // onClick={}
              />{" "}
              <Typography
                gutterBottom
                variant="h5"
                align="center"
                marginBottom={3}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1240}
              >
                BASIC
                <span className="line"></span>
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                margin={0}
                textAlign="center"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1260}
              >
                $150
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                color={"text.secondary"}
                textAlign="center"
                marginBottom={3}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1270}
              >
                per Year
              </Typography>
              <CardContent
                sx={{ flexGrow: 1, textAlign: "center" }}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1200}
              >
                <div className="d-flex ">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    5 sessions
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    makeup, nail, or skin care services
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    monthly subscription option
                  </p>
                </div>

                <Button
                  variant="contained"
                  size="large"
                  className="planbtn"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={1280}
                  onClick={handleChoosePlanClick}
                >
                  {authStatus === "Successful" ? (
                    <Link
                      style={{ color: "white" }}
                      to={`/checkoutform/${"basic"}/${5}`}
                    >
                      Choose Plan
                    </Link>
                  ) : (
                    <span style={{ color: "white" }}>Choose Plan</span>
                  )}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            // key={item._id}
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1350}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              className="planItems"
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
              <Typography
                gutterBottom
                variant="h5"
                align="center"
                marginBottom={3}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1370}
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
                data-aos-delay={1380}
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
                data-aos-delay={1390}
              >
                per Year
              </Typography>
              <CardContent
                sx={{ flexGrow: 1, textAlign: "center" }}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1400}
              >
                <div className="d-flex ">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    50 sessions
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    Personalised skin care treatments
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    Unlimited access to our pool of talented beauty experts
                  </p>
                </div>

                <Button
                  variant="contained"
                  size="large"
                  className="planbtn"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={1420}
                  onClick={handleChoosePlanClick}
                >
                  {authStatus === "Successful" ? (
                    <Link
                      style={{ color: "white" }}
                      to={`/checkoutform/${"gold"}/${50}`}
                    >
                      Choose Plan
                    </Link>
                  ) : (
                    <span style={{ color: "white" }}>Choose Plan</span>
                  )}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            // key={item._id}
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1450}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              className="planItems"
            >
              <CardMedia
                component="img"
                sx={{ width: "70% !important", margin: "auto" }}
                image={plan3}
                alt="random"
                className="cardMedia"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1480}
                // onClick={}
              />{" "}
              <Typography
                gutterBottom
                variant="h5"
                align="center"
                marginBottom={3}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1500}
              >
                PRO
                <span className="line"></span>
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                margin={0}
                textAlign="center"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1520}
              >
                $300
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                color={"text.secondary"}
                textAlign="center"
                marginBottom={3}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1540}
              >
                per Year
              </Typography>
              <CardContent
                sx={{ flexGrow: 1, textAlign: "center" }}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1580}
              >
                <div className="d-flex ">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    25 sessions
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    Flexibility to book appointments
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    sx={{ color: "secondary.main", fontSize: "1em" }}
                  />{" "}
                  <p style={{ marginBottom: "0", marginLeft: "10px" }}>
                    Monthly subscription option
                  </p>
                </div>

                <Button
                  variant="contained"
                  size="large"
                  className="planbtn"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={1600}
                  onClick={handleChoosePlanClick}
                >
                {authStatus === "Successful" ? (
                  <Link
                    style={{ color: "white" }}
                    to={`/checkoutform/${"pro"}/${25}`}
                  >
                    Choose Plan
                  </Link>
                ) : (
                  <span style={{ color: "white" }}>Choose Plan</span>
                )}
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>        
      </Container>
    </section>
  );
};

export default HPlansSection;
