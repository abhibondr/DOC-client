import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { errorToast, successToast } from "../../../ui/toast/Toast";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [feesPerCunsaltation, setFeesconsaltation] = useState("");
  const [timings, setTimings] = useState({
    startTime: "",
    endTime: "",
  });

  const resetInputs = () => {
    setFirstName("");
    setEmail("");
    setPassword("");
    setLastName("");
    setAddress("");
    setSpecialization("");
    setPhone("");
    setFeesconsaltation("");
    setExperience("");
    setWebsite("");
    setTimings({ startTime: "", endTime: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      website,
      password,
      address,
      specialization,
      experience,
      timings,
      phone,
      feesPerCunsaltation,
    };

    axios
      .post("http://localhost:9999/api/doctor/apply-doctor", formData)
      .then((response) => {
        successToast("profile created");
        console.log(response.data);
        resetInputs();
      })
      .catch((err) => {
        console.log(err);
        errorToast("profile not created");
        console.log("formData: ", formData);
        // resetInputs();
      });
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Apply Doctor</h2>
      <Container
        sx={{
          maxWidth: 500,
          minWidth: 300,
          marginTop: 5,

          border: "1px solid #c6ccc8",
          borderRadius: 2,
          p: 5,
        }}
      >
        <form onSubmit={handleSubmit} action={<Link to="/login" />}>
          {/* <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>  */}
          <h3> Personal Details</h3>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 4 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="website"
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          {/* </Stack> */}
          <TextField
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            sx={{ mb: 4 }}
          />

          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          <h3> Professional Details</h3>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="specialization"
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Experience"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 2 }}>
              <TextField
                type="number"
                variant="outlined"
                color="secondary"
                label="Fees Per Consultation"
                onChange={(e) => setFeesconsaltation(e.target.value)}
                value={feesPerCunsaltation}
                fullWidth
                required
              />
            </Grid>
            <br />

            <Grid item xs={12} md={12}>
              <Typography variant="h6" textAlign={"center"} color={"GrayText"}>
                {" "}
                Timings
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 4 }}>
              <TextField
                type="time"
                variant="outlined"
                color="secondary"
                label="Start Time"
                onChange={(e) =>
                  setTimings((prevTimings) => ({
                    ...prevTimings,
                    startTime: e.target.value,
                  }))
                }
                value={timings.startTime}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ mb: 4 }}>
              <TextField
                type="time"
                variant="outlined"
                color="secondary"
                label="End Time"
                onChange={(e) =>
                  setTimings((prevTimings) => ({
                    ...prevTimings,
                    endTime: e.target.value,
                  }))
                }
                value={timings.endTime}
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
        <small>
          Already have an account? <Link to="/doctor-login">Login Here</Link>
        </small>
      </Container>
    </>
  );
};

export default RegisterForm;
