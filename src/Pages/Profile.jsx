import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import plan1 from "../assets/plan-01.svg";
import plan2 from "../assets/plan-02.svg";
import plan3 from "../assets/plan-03.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
const Profile = () => {
  let navigate = useNavigate();
  const auth = useSelector((state) => state.auth.status);
  const userInformation = useSelector((state) => state.auth.user);
  const packageData = useSelector((state) => state.packageType);
  const inquiryData = useSelector((state) => state.inquiry.data);
  console.log(packageData);

  const { userinfo } = packageData;
  const { package_name } = userinfo;

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const handleShop = (e) => {
    e.preventDefault();
    navigate("/plans");
  };
  const handleInquiry = (e) => {
    e.preventDefault();
    navigate("/inquiry");
  };
  useEffect(() => {
    if (auth !== "Successful" || userInformation == null) {
      return navigate("/signin");
    }
  }, [auth, inquiryData, userInformation, packageData, navigate]);

  const renderPackage = () => {
    if (package_name === "basic") {
      return (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            minHeight: "200px !important",
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
        </Card>
      );
    } else if (package_name === "pro") {
      return (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            minHeight: "200px !important",
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
        </Card>
      );
    } else if (package_name === "gold") {
      return (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            minHeight: "200px !important",
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
        </Card>
      );
    }
  };
  const renderList = () => {
    return (
      <List sx={{ width: "100%" }}>
        <Card>
          <CardContent>
            <CardMedia
              sx={{ width: "100%", height: "400px" }}
              image={inquiryData.expert.expertImage}
              title="Expert Image"
            />
            <Typography variant="h6" component="h2">
              Expert Name: {inquiryData.expert.expertFirstName}{" "}
              {inquiryData.expert.expertLastName}
            </Typography>

            <Typography variant="body1" color="textSecondary">
              Reservation Type: {inquiryData.reservationType}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Date: {inquiryData.calendar}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Time: {inquiryData.time}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Description: {inquiryData.description}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              First Name: {inquiryData.firstName}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Last Name: {inquiryData.lastName}
            </Typography>
          </CardContent>
        </Card>
      </List>
    );
  };
  return (
    <React.Fragment>
      <Grid
        container
        component="main"
        sx={{ minHeight: "100vh" }}
        className="profileBg"
      >
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: "custom.milk",
            p: 5,
            mt: 15,
            mb: 15,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs value={tabIndex} onChange={handleTabChange}>
              <Tab
                label="Information"
                icon={<PersonOutlineOutlinedIcon sx={{ fontSize: "40px" }} />}
                iconPosition="start"
              />
              <Tab
                label="My Sessions"
                iconPosition="start"
                icon={<LocalMallOutlinedIcon sx={{ fontSize: "40px" }} />}
              />{" "}
              <Tab
                label="My Plan"
                iconPosition="start"
                icon={<RedeemOutlinedIcon sx={{ fontSize: "40px" }} />}
              />
            </Tabs>
          </Box>
          <Box sx={{ width: "100%", mt: 5 }}>
            {tabIndex === 0 && (
              <Grid
                container
                component="main"
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={12}
                  elevation={6}
                  alignItems="center"
                  justifyContent="center"
                  display={"flex"}
                  flexDirection={"column"}
                  boxShadow={"none"}
                >
                  <Box>
                    <Avatar
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-delay="0"
                      sx={{ width: 150, height: 150, mr: 2, mb: 3 }}
                    />
                  </Box>
                  <Typography
                    component="h4"
                    variant="h4"
                    color="black"
                    textAlign={"center"}
                    gutterBottom
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    Welcome {userInformation.firstname}!
                  </Typography>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="black"
                    gutterBottom
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    {" "}
                    Your Personal Information:
                  </Typography>
                  <TextField
                    disabled
                    id="filled-basic"
                    label="First Name:"
                    defaultValue={userInformation.firstname}
                    sx={{ mb: 2, width: "90%" }}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  />
                  <TextField
                    disabled
                    id="filled-basic"
                    label="Last Name:"
                    defaultValue={userInformation.lastname}
                    sx={{ mb: 2, width: "90%" }}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                  />
                  <TextField
                    disabled
                    id="filled-basic"
                    label="Email"
                    sx={{ width: "90%" }}
                    defaultValue={userInformation.email}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="600"
                  />
                </Grid>
              </Grid>
            )}
            {tabIndex === 1 && (
              <Grid
                container
                component="main"
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {inquiryData ? (
                  renderList()
                ) : (
                  <Box sx={{ width: "100% ", textAlign: "center" }}>
                    <Typography
                      component="h4"
                      variant="h4"
                      color="black"
                      textAlign={"center"}
                      gutterBottom
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                    >
                      You dont have any upcoming events.
                    </Typography>
                    <Button
                      sx={{ bgcolor: "secondary.main" }}
                      variant="contained"
                      size="large"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="500"
                      onClick={handleInquiry}
                    >
                      Submit an inquiry
                    </Button>
                  </Box>
                )}
              </Grid>
            )}
            {tabIndex === 2 && (
              <Grid
                container
                component="main"
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {package_name ? (
                  renderPackage()
                ) : (
                  <Box sx={{ width: "100% ", textAlign: "center" }}>
                    <Typography
                      component="h4"
                      variant="h4"
                      color="black"
                      textAlign={"center"}
                      gutterBottom
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                    >
                      You dont have any plans.
                    </Typography>
                    <Button
                      sx={{ bgcolor: "secondary.main" }}
                      variant="contained"
                      size="large"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="500"
                      onClick={handleShop}
                    >
                      View Plans
                    </Button>
                  </Box>
                )}
              </Grid>
            )}
          </Box>
        </Container>
      </Grid>
    </React.Fragment>
  );
};
export default Profile;
