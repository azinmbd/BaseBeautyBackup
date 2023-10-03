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
import Select from "@mui/material/Select";
import { fetchExpertAdd } from "../redux/features/AddExpertSlice";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ExpertAdmin = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    expertFirstName: "",
    expertLastName: "",
    selectedDate: null,
    expertServiceArea: "", // Add expertServiceArea  to formData
    expertDescription: "", // Add expertDescription  to formData
    selectedImage: null,
    time: "",
  });
  const {
    expertFirstName,
    expertLastName,
    expertServiceArea,
    expertDescription,
    selectedImage,
  } = formData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true); // Show the error alert on form submission

    dispatch(fetchExpertAdd(formData));
    setShowSuccessAlert(true); // Show the success alert for a few seconds
    setTimeout(() => {
      setShowSuccessAlert(false); 
      resetFormFields();
    }, 5000);
  };

  const resetFormFields = () => {
    setFormData({
      expertFirstName: "",
      expertLastName: "",
      expertServiceArea: "",
      expertDescription: "",
      selectedImage: null,
    });
    setPreviewImage(null);
  };

  const handleAlert = () => {
    if (showSuccessAlert) {
      return (
        <Alert severity="success" sx={{ mt: 4 }}>
          Your inquiry was submitted successfully!
        </Alert>
      );
    }
    return null;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedImage: file,
      }));

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
      <section >
        <Container maxWidth="xl" sx={{ mt: 15 }}>
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
                {" "}
                <Typography
                  gutterBottom
                  variant="h4"
                  align="center"
                  marginBottom={3}
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={200}
                >
                  Add Expert
                  <span className="line"></span>
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay={300}
                        required
                        fullWidth
                        id="expertFirstName"
                        label="First Name"
                        name="expertFirstName"
                        placeholder="First Name"
                        autoComplete="given-name"
                        autoFocus
                        type="text"
                        value={formData.expertFirstName}
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
                        id="expertLastName"
                        label="Last Name"
                        name="expertLastName"
                        type="text"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        value={formData.expertLastName}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextareaAutosize
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-delay={1800}
                        required
                        color="neutral"
                        minRows={2}
                        placeholder="A brif description about the expert"
                        size="lg"
                        variant="outlined"
                        value={formData.expertDescription}
                        onChange={handleChange}
                        name="expertDescription"
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
                          document.getElementById("image-upload").click();
                        }}
                        value={selectedImage ? selectedImage.name : ""}
                        readOnly
                        placeholder="Choose the expert image"
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
                          Service Area
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="expertServiceArea "
                          value={formData.expertServiceArea}
                          onChange={handleChange}
                          name="expertServiceArea"
                          required
                          label="Service Area"
                        >
                          <MenuItem value="skincare">skincare</MenuItem>
                          <MenuItem value="makeup">makeup</MenuItem>
                          <MenuItem value="nailcare">nailcare</MenuItem>
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
                    Add Expert
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default ExpertAdmin;
