import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import wlogo from "../assets/wlogo.svg";
import Typography from "@mui/material/Typography";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useDispatch, useSelector } from "react-redux";
// import { deleteToken } from "../redux/features/authSlice";

const ExpertAdminHeader = () => {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "WHITE",
          zIndex: "10000",
          boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        }}
        className="d-block-lg"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavLink className="nav-item logo" >
              <img src={logo} alt="" height={"100%"} />
            </NavLink>
            <div className="d-flex  w-70">
              {" "}
              <Typography
                component="h4"
                variant="h4"
                color="black"
                gutterBottom
                width={"75%"}

                mb={0}
              >
               Expert Admin Page
              </Typography>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default ExpertAdminHeader;
