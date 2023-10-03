import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom"; // Import useParams
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { fetchPackage } from "../redux/features/packageSlice"; // Import your fetchPackage action
import { useSelector } from "react-redux";

import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CheckoutForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.status);
  const stripe = useStripe();
  const elements = useElements();
  const { planName, sessionCount } = useParams(); // Get route parameters
  const userInfo = useSelector((state) => state.auth.user);
  const packageStatus = useSelector((state) => state.packageType.status);
  const [formFilled, setFormFilled] = useState(false);
  useEffect(() => {
    if (auth !== "Successful" ) {
      return navigate("/plans");
    }
  }, [auth, userInfo,packageStatus, navigate]);
  // Add a function to handle form field changes
  const handleFieldChange = (event) => {
    // Check if all the required fields are filled
    if (event.complete) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  };
  const handleAlert = () => {
    if ( packageStatus === "Successful") {
    
      return (
        <Alert severity="success" sx={{ mt: 4 }}>
          Your purchase was successful!
        </Alert>
      );
      
    }
  
    return null;
  };
  const handleDispatch = () => {
    const customerEmail = userInfo.email; // Replace with actual value
    const customerPackage = planName; // Use the planName from route params
    const customerSessionLeft = parseInt(sessionCount); // Use the sessionCount from route params
    dispatch(
      fetchPackage({ customerEmail, customerPackage, customerSessionLeft })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Call the function to dispatch the action
    handleDispatch();
    handleAlert()
    navigate("/profile")
  };

  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
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
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Plan: {planName}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Session Count: {sessionCount}
            </Typography>
          </div>
          <span className="line" style={{ width: "100%" }}></span>
          <form onSubmit={handleSubmit}>
            {/* Display the PaymentElement */}
            <PaymentElement
              options={{
                // Add the event listener to the options of PaymentElement
                // It will trigger handleFieldChange whenever the fields change
                paymentRequestButtonElement: {
                  id: "payment-request-button",
                },
              }}
              onReady={(element) => {
                // Listen for changes in the PaymentElement fields
                element.on("change", handleFieldChange);
              }}
            />
            <Button disabled={!stripe || !formFilled} type="submit">
              Submit
            </Button>
          </form>
          {handleAlert()}
        </Box>
      </Container>
    </Grid>
  );
};

export default CheckoutForm;
