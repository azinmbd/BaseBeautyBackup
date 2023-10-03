import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import inquiryText from "../assets/inquiry.svg";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

import inquiryImg from "../assets/inquiry-01.png";
import Footer from "../components/Footer";
import MuiAlert from "@mui/material/Alert";
import { fetchInquiry } from "../redux/features/inquirySlice";
import { setStatus } from "../redux/features/inquiryStatusSlice";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Inquiry = () => {
  const auth = useSelector((state) => state.auth.status);
  const [showAlert, setShowAlert] = useState(false); // Initialize showAlert as false
  const [previewImage, setPreviewImage] = useState(null);
  const inquiryResponseStatus = useSelector(
    (state) => state.inquiryStatus.status
  );
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    selectedDate: null,
    inquiryType: "", // Add inquiryType to formData
    description: "", // Add description to formData
    selectedImage: null,
    time: "",
  });
  const {
    first_name,
    last_name,
    selectedDate,
    time,
    inquiryType,
    description,
    selectedImage,
  } = formData;

  useEffect(() => {
    // Automatically hide the alert after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    // Clean up the timer when the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true); // Show the error alert on form submission
    if (auth === "Successful") {
      dispatch(fetchInquiry(formData));
      setShowSuccessAlert(true); // Show the success alert for a few seconds
      setTimeout(() => {
        setShowSuccessAlert(false); // Hide the success alert after 5 seconds
        resetFormFields();
      }, 5000);
    }
  };

  const resetFormFields = () => {
    setFormData({
      first_name: "",
      last_name: "",
      selectedDate: null,
      inquiryType: "",
      description: "",
      selectedImage: null,
      time: "",
    });
    setPreviewImage(null);
  };

  const handleAlert = () => {
    if (auth !== "Successful" && showAlert) {
      // Display the error alert if the user is not logged in and showAlert is true
      return (
        <Alert severity="error" sx={{ mt: 4 }}>
          You should Login or signUp first!
        </Alert>
      );
    } else if (inquiryResponseStatus === 200 && showSuccessAlert) {
      return (
        <Alert severity="success" sx={{ mt: 4 }}>
          Your inquiry was submitted successfully!
        </Alert>
      );
    }
    return null;
  };

  // Handle other form field changes (if needed)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];

    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedDate: formattedDate,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedImage: file,
      }));

      // Create a FileReader object to read the selected image and create a preview
      const reader = new FileReader();

      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };

      reader.onerror = (event) => {
        console.error("FileReader error:", event.target.error);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <React.Fragment>
      <section className="inquiryHeader">
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
                  <img
                    src={inquiryText}
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay={300}
                  />
                  <Typography
                    paragraph
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-delay={600}
                  >
                    Make an inquiry and experience our personalized beauty
                    expertise. Our dedicated team of experts is ready to assist
                    you with skincare, haircare, and makeup questions. Get
                    tailored guidance for your unique beauty needs. Submit your
                    inquiry now and embark on a journey to enhance your beauty.
                  </Typography>
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
                src={inquiryImg}
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
      <section className="  ">
        <Container maxWidth="xl">
          <Grid
            container
            component="main"
            justifyContent="center"
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              alignItems="center"
              justifyContent="center"
              display="flex"
              boxShadow="none"
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay={300}
                        required
                        fullWidth
                        id="first_name"
                        label="First Name"
                        name="first_name"
                        placeholder="First Name"
                        autoComplete="given-name"
                        autoFocus
                        type="text"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay={300}
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="last_name"
                        type="text"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            fullWidth
                            required
                            sx={{ width: "100%" }}
                            label="Basic date picker"
                            value={formData.selectedDate}
                            onChange={handleDateChange}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl
                        fullWidth
                        required
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay={600}
                      >
                        <InputLabel id="demo-simple-select-label">
                          Time
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="time"
                          value={formData.time} // Use formData.time for the selected time
                          onChange={handleChange}
                          name="time"
                          required
                          label="Time"
                        >
                          <MenuItem value="10:00">10:00</MenuItem>
                          <MenuItem value="10:30">10:30</MenuItem>
                          <MenuItem value="11:00">11:00</MenuItem>
                          <MenuItem value="11:30">11:30</MenuItem>
                          <MenuItem value="12:00">12:00</MenuItem>
                          <MenuItem value="12:30">12:30</MenuItem>
                          <MenuItem value="13:00">13:00</MenuItem>
                          <MenuItem value="13:30">13:30</MenuItem>
                          <MenuItem value="14:00">14:00</MenuItem>
                          <MenuItem value="14:30">14:30</MenuItem>
                          <MenuItem value="15:00">15:00</MenuItem>
                          <MenuItem value="15:30">15:30</MenuItem>
                          <MenuItem value="16:00">16:00</MenuItem>
                          <MenuItem value="16:30">16:30</MenuItem>
                          <MenuItem value="17:00">17:00</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextareaAutosize
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay={1800}
                        required
                        color="neutral"
                        minRows={2}
                        placeholder="Please describe your area of concern ...."
                        size="lg"
                        variant="outlined"
                        value={formData.description}
                        onChange={handleChange}
                        name="description"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <input
                        required
                        accept="image/*"
                        id="image-upload"
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                      <TextField
                        id="upload-button"
                        fullWidth
                        onClick={() => {
                          // Trigger the file input element when the TextField is clicked
                          document.getElementById("image-upload").click();
                        }}
                        // Show the selected file name as the value of the TextField
                        value={selectedImage ? selectedImage.name : ""}
                        // You may want to disable editing the file name manually
                        // (optional, based on your use case)
                        readOnly
                        // Add other TextField props as needed
                        placeholder="Select an image which helps to describe your inquiry"
                      />

                      {previewImage && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={previewImage} // Use the previewImage state as the src
                            alt="Uploaded"
                            style={{
                              marginTop: "16px",
                              maxWidth: "100%",
                              maxHeight: "250px",
                            }}
                          />
                          <Typography variant="caption" color="textSecondary">
                            {selectedImage.name}
                          </Typography>
                        </div>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl
                        fullWidth
                        required
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay={600}
                      >
                        <InputLabel id="demo-simple-select-label">
                          Inquiry Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          name="inquiryType"
                          required
                          label="Inquiry Type"
                        >
                          <MenuItem value="skincare">Skincare</MenuItem>
                          <MenuItem value="makeup">Makeup</MenuItem>
                          <MenuItem value="nailcare">Nailcare</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {handleAlert()}
                  <Button
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-delay={1200}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
                  >
                    Submit my inquiry
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default Inquiry;
